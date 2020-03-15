import React, { Fragment, Component } from 'react';
import config from '../../../config';
import axios from 'axios';

class UpdateProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePicture : props.profilePicture
        };

        this.updateProfilePicture = this.updateProfilePicture.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() { }

    updateProfilePicture(file) {
        console.log(file)
        let data = new FormData();
        data.append('file', file, file.fileName);
        let user_id = localStorage.getItem('user_id')

        axios.put(`${config.API_URL}/accounts/profile-image/${user_id}`, data, {
            headers: {
                'accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
        })
            .then((response) => {
                this.setState({profilePicture: `${config.API_URL}/${response.data.profilePicture}` })
                //handle success
                console.log('Whole success response', response)
            }).catch((error) => {
                //handle error
                console.log('Whole error response', error)
            });
        
    }



    render() {
        return (
            <Fragment>
                <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
                    <div className="user_pro_img_area">
                        <img src={this.state.profilePicture} alt="Profile Picture" height="200" width="200"/>
                        <div className="image-info">
                            <h6>Profile Image</h6>
                            <span>JPG or PNG 1:1 scale</span>
                        </div>
                        <div className="custom-file-upload">
                            <input type="file" id="customFile" onChange={(e) => { this.updateProfilePicture(e.target.files[0]) }} />
                            <label htmlFor="customFile" className="btn btn-sm btn-secondary">
                                Upload New Image
            </label>
                        </div>
                        {/* <button className="btn btn-sm btn-danger">Delete Image</button> */}
                    </div>
                </div>
            </Fragment>
        );
    }
};
export default UpdateProfilePicture;
