import React, { Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import config from '../../../config'

const mapStyle = {
    width: '100%',
    height: '400px'
  };


const MapLocationPicker = (props) => {

    console.log("Coordinates from browser", props)
    return (
        <Fragment>            
            <Map
                google={props.google}
                zoom={13}  
                style={mapStyle}
                initialCenter={{ lat: parseFloat(props.latitude) , lng: parseFloat(props.longitude) }}
                // TODO: Change Marker when clicking on map and update location
                onClick={ (t, map, c) => {console.log(t, map, c, c.latLng.lat, c.latLng.lng )} }
            >
                <Marker position={{ lat: parseFloat(props.latitude), lng: parseFloat(props.longitude)}} />
            </Map>                
        </Fragment>
    )
}
export default GoogleApiWrapper({
    apiKey: config.API_KEY_GMAPS
  })(MapLocationPicker);