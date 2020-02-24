import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../../config'
import axios from 'axios';
import CustomAlert from '../../layout/CustomAlert'

class UpdateProfileGeneralInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: ''
        };

        // this.handleChange = this.handleChange.bind(this);
    }
    sendData() {
        let userId = localStorage.getItem('user_id');
        axios.put(config.API_URL + `/accounts/${userId}/location`, {
        })
            .then(res => {
            })
            .catch(err => {
                console.log("Location response : ", err)
            })
    }
    render() {

        return (
            <Fragment>
                <div className="row p-2">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="user_name" className="not_empty">Nickname</label>
                        <input className="form-control" id="" type="text" />
                        <p>(Nickname will appear if no Name/Last name)</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="phone" className="not_empty">Cell Number </label>
                        <input className="form-control" type="tel" placeholder="Phone number e.g. +34 666 999 888" id="phone" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first_name" className="not_empty">First Name</label>
                        <input className="form-control" id="first_name" type="text" placeholder="First Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="last_name" className="not_empty">Last Name</label>
                        <input className="form-control" id="last_name" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="bio" className="not_empty">Description</label>
                        <textarea className="wp-editor-area form-control" rows="6" autoComplete="off" id="bio" placeholder="Describe yourself"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary ml-3" id="update_user_profile">Save</button>
            </div>
            </Fragment>
        )
    }
}
export default UpdateProfileGeneralInformation;