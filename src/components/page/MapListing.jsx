import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../config'
import axios from 'axios';
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const mapStyle = {
    width: '100%',
    height: '400px'
};

class MapListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLocation: false
        };
        // this.handleChange = this.handleChange.bind(this);
    }
    addMarker = (location, map) => {
        this.setState({
            // lat: location.lat().toFixed(6),
            // lng: location.lng().toFixed(6)
        });
    };

    onMarkerClick = (props) => {
        console.log('Markers proos,', props);
        if (props.unique_uuid) {
            this.nextPath(`/printer-profile/${props.unique_uuid}`)
        }
    }

    nextPath(path) {
        console.log('Path to go', path, this.props)
        this.props.history.push(path);
    }

    componentWillMount() {
        this.setState({
            mapIsLoaded: false,
            nearbyPrinters: []
        });
    }

    componentDidMount() {
        let user_uuid = localStorage.getItem('user_uuid')

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
        };

        geo.watchPosition(onChange);

        fetch(`${config.API_URL}/accounts/${user_uuid}/location`)
            .then(response => response.json())
            .then(
                (result) => {
                    console.log('location', result)
                    if (result.features[0].geometry === null) {
                        this.setState({ hasLocation: false })

                    }
                    else {
                        let lat = result.features[0].geometry.coordinates[1]
                        let lng = result.features[0].geometry.coordinates[0]
                        this.setState({
                            mapIsLoaded: true,
                            lat: lat,
                            lng: lng,
                            hasLocation: true,
                        });
                    }
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


    getNearbyPrinters(radius = 20) {
        console.log('Find nearby printers state: ', this.state.lat, this.state.lng)
        fetch(`${config.API_URL}/nearby-accounts?lat=${this.state.lat}&lng=${this.state.lng}&radius=${radius}`)
            .then(response => response.json())
            .then(
                (result) => {
                    if (result.count > 0) {
                        this.setState({ nearbyPrinters: result.features, mapIsLoaded: true, })
                    }
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
    setMarkerColor(help_type){
        console.log(help_type, config.API_URL)
        switch (help_type) {
            case 'NEEDS':
                return {url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"};
            case 'PRINTS':
                return {url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"};
            case 'OFFERS':
                return {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"};
            default:
                return {url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"};
        }
    }
    render() {
        return (
            <Fragment>
                <div className="m-4">
                    <div className="map" id="map-one" style={{ position: 'relative' }}>
                        {this.state.mapIsLoaded ? <Map
                            google={this.props.google}
                            zoom={15}
                            style={mapStyle}
                            initialCenter={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
                            center={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
                        // onClick={(t, map, c) => this.addMarker(c.latLng, map)}
                        >
                            {this.state.nearbyPrinters.map((marker, x) =>
                            
                                <Marker
                                    position={{
                                        lat: parseFloat(marker.geometry.coordinates[1]),
                                        lng: parseFloat(marker.geometry.coordinates[0])
                                    }}

                                    // name={'Current location'}
                                    // title={'Current location'}
                                    key={marker.properties.unique_id}
                                    unique_uuid={marker.properties.unique_id}
                                    onClick={this.onMarkerClick}
                                    icon={
                                      
                                        this.setMarkerColor(marker.properties.help_type)
                                        // anchor: new google.maps.Point(32,32),
                                        // scaledSize: new google.maps.Size(64,64)
                                  
                                
                                }
                                >
                                    {/* <InfoWindow
                                            visible={showInfoWindow}
                                            style={styles.infoWindow}
                                        >
                                            <div className={classes.infoWindow}>
                                                <p>Click on the map or drag the marker to select location where the incident occurred</p>
                                            </div>
                                        </InfoWindow> */}
                                </Marker>
                            )
                            }
                        </Map> :
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}

                            />
                        }

                    </div>
                </div>

                <div className="container">
                    {!this.state.hasLocation ?
                        <div className="alert alert-info">Guarda tu ubicacion en el perfil en primero!</div>
                        : <></>
                    }
                    <div className="alert alert-info">Cliquea en el marcador de geolocalización para ver el perfil.</div>
                    <p><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" alt=""/> Persona necessita ayuda</p>
                    <p><img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt=""/> Persona ofrece ayuda</p>
                    <p><img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" alt=""/> Persona imprime 3D</p>
                    <p><img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png" alt=""/> Persona no ha rellenado su perfil.</p>


                </div>

            </Fragment>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: config.API_KEY_GMAPS
})(MapListing);