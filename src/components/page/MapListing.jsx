import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../config'
import axios from 'axios';
import Loader from 'react-loader-spinner'

const mapStyle = {
    width: '100%',
    height: '400px'
};

class MapListing extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //         lat: 36,
        //         lng: -4.8
        // };
        // this.handleChange = this.handleChange.bind(this);
    }
    addMarker = (location, map) => {
        this.setState({
            // lat: location.lat().toFixed(6),
            // lng: location.lng().toFixed(6)
        });
    };
    componentWillMount() {
        this.setState({
            mapIsLoaded: false,
            nearbyPrinters: []
        });
    }
    componentDidMount() {
        let user_id = localStorage.getItem('user_id')

        const geo = navigator.geolocation;
        if (!geo) {
            console.log('Geolocation is not supported');
            return;
        }
        const onChange = ({ coords }) => {
            this.setState({
                lat: coords.latitude,
                lng: coords.longitude,
                mapIsLoaded: true,
            });
            console.log("Dashboard state did mount", this.state)
        };

        geo.watchPosition(onChange);

        fetch(`${config.API_URL}/accounts/${user_id}/location`)
            .then(response => response.json())
            .then(
                (result) => {
                    if (result.features[0].geometry === null) {
                        return
                    }
                    let lat = result.features[0].geometry.coordinates[1]
                    let lng = result.features[0].geometry.coordinates[0]
                    console.log('Yes getting coords, ', lat, lng)

                    this.setState({
                        mapIsLoaded: true,
                        lat: lat,
                        lng: lng,
                    });
                    this.getNearbyPrinters()
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        mapIsLoaded: true,
                        error
                    });
                }

            );


    }


    getNearbyPrinters(radius = 150) {
        console.log('Searching using this coords, ', this.state.lng, this.state.lat)
        fetch(`${config.API_URL}/nearby-accounts?lat=${this.state.lat}&lng=${this.state.lng}&radius=${radius}`)
            .then(response => response.json())
            .then(
                (result) => {
                    
                    if (result.count > 0)
                    console.log('List of nearby users', result.features)
                        this.setState({ nearbyPrinters: result.features, mapIsLoaded: true, })
                },

                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        mapIsLoaded: false,
                        error
                    });
                }
            );


    }
    render() {
        return (
            <Fragment>
                <div className="m-4">
                    <div className="map" id="map-one" style={{ position: 'relative' }}>
                        {this.state.mapIsLoaded ? <Map
                            google={this.props.google}
                            zoom={10}
                            style={mapStyle}
                            initialCenter={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
                            center={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
                        // onClick={(t, map, c) => this.addMarker(c.latLng, map)}
                        >
                            {console.log('From within the component',this.state.nearbyPrinters),
                                this.state.nearbyPrinters.map((link) =>
                                    <Marker position={{ lat: parseFloat(link.geometry.coordinates[1]), lng: parseFloat(link.geometry.coordinates[0]) }} />
                                    )
                            }


                        </Map> : <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}

                            />}

                    </div>
                </div>

                <div className="container">
                </div>

            </Fragment>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: config.API_KEY_GMAPS
})(MapListing);