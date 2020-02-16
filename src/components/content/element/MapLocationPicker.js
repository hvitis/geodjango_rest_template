import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../../config'

const mapStyle = {
    width: '100%',
    height: '400px'
};



class MapLocationPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
                lat: props.latitude.toFixed(6),
                lng: props.longitude.toFixed(6)
          
        };
        // this.handleChange = this.handleChange.bind(this);
    }
    addMarker = (location, map) => {
        this.setState({
           
                lat: location.lat().toFixed(6),
                lng: location.lng().toFixed(6)

          
        });
        console.log(location, map, this.state.location)
    };
    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <div className="map" id="map-one" style={{ position: 'relative' }}>

                    <Map
                        google={this.props.google}
                        zoom={13}
                        style={mapStyle}
                        initialCenter={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
                        center={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
                        // onClick={(t, map, c) => { console.log(t, map, c, c.latLng.lat, c.latLng.lng) }}
                        onClick={(t, map, c) => this.addMarker(c.latLng, map)}
                    >
                        <Marker position={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }} />
                        {/* <Marker position={{ lat: parseFloat(this.state.fields.lat), lng: parseFloat(this.state.fields.lng) }} /> */}

                    </Map>
                </div>
                <p >Or Enter Coordinates (latitude and longitude) manually. </p>
                <div className="row p-2">
                    <div className="col-sm-6 mt-3 mt-1">
                        <div className="form-group">
                            <label htmlFor="manual_lat" className="not_empty"> Latitude </label>
                            <input type="text" name="manual_lat" id="manual_lat" value={this.state.lat} onChange={(e) => this.setState({lat: e.target.value })} className="form-control directory_field" placeholder={this.state.lat ? this.state.lat : "Enter Latitude eg. 24.89904"} />
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3 mt-1">
                        <div className="form-group">
                            <label htmlFor="manual_lng" className="not_empty"> Longitude </label>
                            <input type="text" name="manual_lng" id="manual_lng" value={this.state.lng} onChange={(e) => this.setState({ lng: e.target.value })} className="form-control directory_field" placeholder={this.state.lng ? this.state.lng : "Enter Longitude eg. 91.87198"} />
                        </div>
                    </div>
                    <button className="btn btn-primary mt-4" id="generate_admin_map">Save Location</button>
                </div>

            </Fragment>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: config.API_KEY_GMAPS
})(MapLocationPicker);