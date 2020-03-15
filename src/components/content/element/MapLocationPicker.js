import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../../config'
import axios from 'axios';

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
    };
    

    updateLocation(){
        // Updates location with API using current data on the map
        let user_id = localStorage.getItem('user_id')
        let dataToSend = {
            "coordinates": `POINT (${this.state.lat} ${this.state.lng})`
        }
        console.log('data to send', dataToSend)
        axios.put(`${config.API_URL}/accounts/${user_id}/location`, dataToSend, {
            headers: {
                'accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `application/json`,
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if(response.status == 200){
                    console.log('Success!')
                }
                console.log('Whole success response', response)
            }).catch((error) => {
                //handle error
                console.log('Whole error response', error)
            });
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
                        onClick={(t, map, c) => this.addMarker(c.latLng, map)}
                    >
                        <Marker position={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }} />

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
                    <button className="btn btn-primary mt-4" id="generate_admin_map" onClick={()=> this.updateLocation()}>Save Location</button>
                </div>

            </Fragment>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: config.API_KEY_GMAPS
})(MapLocationPicker);