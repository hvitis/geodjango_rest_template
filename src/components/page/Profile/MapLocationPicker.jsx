import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../../config'
import axios from 'axios';
import CustomAlert from '../../layout/CustomAlert'

const mapStyle = {
    width: '100%',
    height: '400px'
};
class MapLocationPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: props.latitude.toFixed(6),
            lng: props.longitude.toFixed(6),
            alert: ''
        };
        // const alert = useAlert()
        // this.handleChange = this.handleChange.bind(this);
    }

    addMarker = (location, map) => {
        this.setState({
            lat: location.lat().toFixed(6),
            lng: location.lng().toFixed(6)
        });
        console.log(location, map, this.state.location)
    };
    sendData() {
        let userId = localStorage.getItem('user_id');

        axios.put(config.API_URL + `/accounts/${userId}/location`, {
            latitude: this.state.lat,
            longitude: this.state.lng
        })
            .then(res => {
                console.log("Location response : ", res)
                console.log("config.API_URL  : ", config.API_URL)
                this.setState({ alert: <CustomAlert alertId={1} alertVariant={'success'} alertContent={'Location has been saved.'}/>});
                // this.alert.show('Oh look, an alert!')
            })
            .catch(err => {
                console.log("Location response : ", err)
            })
    }
    render() {

        return (
            <Fragment>
                {/* MAP PICKER LOCATION */}
                <div className="atbdb_content_module_contents">
                                                                            <label className="not_empty form-label">Set the Marker by clicking anywhere on the Map</label>
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
                            <input type="text" name="manual_lat" id="manual_lat" value={this.state.lat} onChange={(e) => this.setState({ lat: e.target.value })} className="form-control directory_field" placeholder={this.state.lat ? this.state.lat : "Enter Latitude eg. 24.89904"} />
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3 mt-1">
                        <div className="form-group">
                            <label htmlFor="manual_lng" className="not_empty"> Longitude </label>
                            <input type="text" name="manual_lng" id="manual_lng" value={this.state.lng} onChange={(e) => this.setState({ lng: e.target.value })} className="form-control directory_field" placeholder={this.state.lng ? this.state.lng : "Enter Longitude eg. 91.87198"} />
                        </div>
                    </div>
                    {/* <ShowAlert buttonTitle='Save Location' alertText={this.state.alertText} triggerFunction={this.sendData} /> */}

                    <div className="row">
                        <button className="btn btn-primary mt-4"
                            onClick={() => {
                                this.sendData()
                            }}
                        >
                            Save Location
                </button>
                       
                    </div>
                </div>
                {this.state.alert}
                </div>
                                                                        {/* MAP PICKER LOCATION */}
            </Fragment>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: config.API_KEY_GMAPS
})(MapLocationPicker);