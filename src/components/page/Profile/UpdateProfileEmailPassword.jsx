

import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../../config'
import axios from 'axios';
import CustomAlert from '../../layout/Alerts/CustomAlert'

class UpdateProfileEmailPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: ''
        };

        // this.handleChange = this.handleChange.bind(this);
    }
    sendData() {
        let userId = localStorage.getItem('user_id');
        axios.put(config.API_URL + `/accounts/${userId}`, {
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
                <div className="row p-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="req_email" className="not_empty">Email</label>
                            <input className="form-control" id="user_name" type="text" readOnly disabled="disabled" value="mail@example.com" />
                            <p>(Email can not be changed)</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="user_name" className="not_empty">Username</label>
                            <input className="form-control" id="user_name" type="text" readOnly disabled="disabled" value="admin" />
                            <p>(Username can not be changed)</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="new_pass" className="not_empty">New Password</label>
                            <input id="new_pass" className="form-control" type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="confirm_pass" className="not_empty">Confirm New Password</label>
                            <input id="confirm_pass" className="form-control" type="password" placeholder="Re-enter Password" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary ml-3" id="update_user_profile">Save</button>
                </div>

            </Fragment>
        )
    }
}
export default UpdateProfileEmailPassword;