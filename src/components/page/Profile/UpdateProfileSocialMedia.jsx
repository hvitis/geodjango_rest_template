


import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../../config'
import axios from 'axios';
import CustomAlert from '../../layout/Alerts/CustomAlert'

class UpdateProfileSocialMedia extends Component {
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
                            <label htmlFor="website" className="not_empty">Website</label>
                            <input className="form-control" id="website" type="text" placeholder="Website" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="facebook" className="not_empty">Facebook</label>
                            <input id="facebook" className="form-control" type="url" placeholder="Facebook URL" />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="twitter" className="not_empty">Twitter</label>
                            <input id="twitter" className="form-control" type="url" placeholder="Twitter URL" />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="google" className="not_empty">Telegram</label>
                            <input id="google" className="form-control" type="url" placeholder="Telegram URL" />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="linkedIn" className="not_empty">LinkedIn</label>
                            <input id="linkedIn" className="form-control" type="url" placeholder="Linkedin URL" />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="youtube" className="not_empty">Youtube</label>
                            <input id="youtube" className="form-control" type="url" placeholder="Youtube URL" />

                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary ml-3" id="update_user_profile">Save</button>
                </div>

            </Fragment>
        )
    }
}
export default UpdateProfileSocialMedia;