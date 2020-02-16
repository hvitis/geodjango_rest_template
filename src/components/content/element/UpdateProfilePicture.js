import React, { Fragment } from 'react';
import config from '../../../config';

const UpdateProfilePicture = props => {
    console.log('UpdateProfilePicture props: ', props);
    return (
        <Fragment>
            <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
                <div className="user_pro_img_area">
                    <img src="./assets/img/author-profile.jpg" alt="" />
                    <div className="image-info">
                        <h6>Profile Image</h6>
                        <span>JPG or PNG 120x120 px</span>
                    </div>
                    <div className="custom-file-upload">
                        <input type="file" id="customFile" />
                        <label htmlFor="customFile" className="btn btn-sm btn-secondary">
                            Upload New Image
            </label>
                    </div>
                    <button className="btn btn-sm btn-danger">Delete Image</button>
                </div>
            </div>
        </Fragment>
    );
};
export default UpdateProfilePicture;
