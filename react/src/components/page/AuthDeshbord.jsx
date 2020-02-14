import React, {Fragment, Component} from 'react';
import Header from '../layout/Header';
import { Footer } from '../layout/Footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
// import { LogOut } from '../../Store/action/logoutAction';
import Map1 from '../content/element/map';
const noAction = e => e.preventDefault();

class AuthDeshbord extends Component {
    render () { 
        console.log("Props loaded on Dashboard",this.props)

        return (
            <Fragment>
                {
                    this.props.isAuthenticated ? (
                        <section className="dashboard-wrapper section-bg p-bottom-70">
                            <div className="dashboard-nav">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="dashboard-nav-area">
                                                <ul className="nav" id="dashboard-tabs" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Edit Profile</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="all-listings" data-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="false">My Print3rs</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="prints-tab" data-toggle="tab" href="#prints" role="tab" aria-controls="prints" aria-selected="false">My Prints</a>
                                                    </li>
                                                </ul>
                                              
                                            </div>
                                        </div>{/*<!-- ends: .col-lg-12 -->*/}
                                    </div>
                                </div>
                            </div>{/*<!-- ends: .dashboard-nav -->*/}
                            <div className="tab-content p-top-100" id="dashboard-tabs-content">
                            <div className="tab-pane fade" id="prints" role="tabpanel" aria-labelledby="prints-tab">
                                    <div className="container">
                                        <div className="row">
                                            <div className="alert alert-success" role="alert">
                                                     Prints
                                            </div>          
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                <div className="tab-pane fade" id="listings" role="tabpanel" aria-labelledby="all-listings">
                                    <div className="container">
                                        <div className="row">
                                            <div className="alert alert-success" role="alert">
                                                     all-listings
                                            </div>          
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                <div className="tab-pane fade p-bottom-30 show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
                                                <div className="user_pro_img_area">
                                                    <img src="./assets/img/author-profile.jpg" alt="" />
                                                    <div className="image-info">
                                                        <h6>Profile Image</h6>
                                                        <span>JPG or PNG 120x120 px</span>
                                                    </div>
                                                    <div className="custom-file-upload">
                                                        <input type="file" id="customFile" />
                                                        <label htmlFor="customFile" className="btn btn-sm btn-secondary">Upload New Image</label>
                                                    </div>
                                                    <button className="btn btn-sm btn-danger">Delete Image</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                <div className="atbd_author_module">
                                                    <div className="atbd_content_module">
                                                        
                                                        <div className="atbd_content_module__tittle_area">
                                                            <div className="atbd_area_title">
                                                                <h4><span className="la la-user"></span>My Profile</h4>
                                                            </div>
                                                        </div>
                                                        <div className="atbdb_content_module_contents">

                                                            {/* MAP PICKER LOCATION */}
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-calendar-check-o"></span> Location (Map)</h4>
                                            </div>
                                        </div> 
                                        <div className="atbdb_content_module_contents">
                                            <label className="not_empty form-label">Set the Marker by clicking anywhere on the Map</label>
                                            <div className="map" id="map-one" style={{position: 'relative'}}>
                                                <Map1 />
                                            </div>
                                                    
                                            <div className="cor-wrap form-group">
                                                <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                    <input type="checkbox" className="custom-control-input" name="manual_coordinate" value="1" id="manual_coordinate" />
                                                    <label htmlFor="manual_coordinate" className="not_empty custom-control-label">Or Enter Coordinates (latitude and longitude) Manually. </label>
                                                </div>
                                            </div>
                                            <div className="cor-form">
                                                <div id="hide_if_no_manual_cor" className="clearfix row m-bottom-30">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="manual_lat" className="not_empty"> Latitude </label>
                                                            <input type="text" name="manual_lat" id="manual_lat" className="form-control directory_field" placeholder="Enter Latitude eg. 24.89904" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 mt-3 mt-sm-0">
                                                        <div className="form-group">
                                                            <label htmlFor="manual_lng" className="not_empty"> Longitude </label>
                                                            <input type="text" name="manual_lng" id="manual_lng" className="form-control directory_field" placeholder="Enter Longitude eg. 91.87198" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="form-group lat_btn_wrap m-top-15">
                                                            <button className="btn btn-primary" id="generate_admin_map">Generate on Map
                                                            </button>
                                                        </div>
                                                    </div> {/*<!-- ends #hide_if_no_manual_cor-->*/}
                                                </div>
                                                <div className="form-group">
                                                    <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                        <input type="checkbox" className="custom-control-input" name="hide_map" value="1" id="hide_map" />
                                                        <label htmlFor="hide_map" className="not_empty custom-control-label">Hide map for this listing.</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                                            <div className="user_info_wrap">
                                                                {/*<!--Full name-->*/}
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="full_name" className="not_empty">Full Name</label>
                                                                            <input className="form-control" type="text" placeholder="Full name" id="full_name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="user_name" className="not_empty">Username</label>
                                                                            <input className="form-control" id="user_name" type="text" disabled="disabled" value="admin" />
                                                                            <p>(Username can not be changed)</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="first_name" className="not_empty">First Name</label>
                                                                            <input className="form-control" id="first_name" type="text" name="user[first_name]" placeholder="First Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="last_name" className="not_empty">Last Name</label>
                                                                            <input className="form-control" id="last_name" type="text" placeholder="Last Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="req_email" className="not_empty">Email (required)</label>
                                                                            <input className="form-control" id="req_email" type="text" placeholder="mail@example.com" required="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="phone" className="not_empty">Cell Number</label>
                                                                            <input className="form-control" type="tel" placeholder="Phone number" id="phone" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="website" className="not_empty">Website</label>
                                                                            <input className="form-control" id="website" type="text" placeholder="Website" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="address" className="not_empty">Address</label>
                                                                            <input className="form-control" id="address" type="text" placeholder="Address" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="new_pass" className="not_empty">New Password</label>
                                                                            <input id="new_pass" className="form-control" type="password" placeholder="Password" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="confirm_pass" className="not_empty">Confirm New Password</label>
                                                                            <input id="confirm_pass" className="form-control" type="password" placeholder="Re-enter Password" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="facebook" className="not_empty">Facebook</label>
                                                                            <input id="facebook" className="form-control" type="url" placeholder="Facebook URL" />
                                                                            <p>Leave it empty to hide</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="twitter" className="not_empty">Twitter</label>
                                                                            <input id="twitter" className="form-control" type="url" placeholder="Twitter URL" />
                                                                            <p>Leave it empty to hide</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="google" className="not_empty">Google+</label>
                                                                            <input id="google" className="form-control" type="url" placeholder="Google+ URL" />
                                                                            <p>Leave it empty to hide</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="linkedIn" className="not_empty">LinkedIn</label>
                                                                            <input id="linkedIn" className="form-control" type="url" placeholder="Linkedin URL" />
                                                                            <p>Leave it empty to hide</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="youtube" className="not_empty">Youtube</label>
                                                                            <input id="youtube" className="form-control" type="url" placeholder="Youtube URL" />
                                                                            <p>Leave it empty to hide</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="bio" className="not_empty">About Author</label>
                                                                            <textarea className="wp-editor-area form-control" rows="6" autoComplete="off" id="bio" placeholder="Describe yourself"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                    {/* CONTACT INFO */}
                                                            
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-user"></span>Contact Information</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <form action="/">
                                                <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary m-bottom-20">
                                                    <input type="checkbox" className="custom-control-input" id="hide_contace_info" />
                                                    <label className="custom-control-label" htmlFor="hide_contace_info">Check it to hide contact
                                                        information for this listing</label>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Address</label>
                                                    <input type="text" placeholder="Listing Address eg. Houghton Street London WC2A 2AE UK" id="address" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                                    <input type="text" placeholder="Phone Number" id="phone_number" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="contact_email" className="form-label">Email</label>
                                                    <input type="email" id="contact_email" className="form-control" placeholder="Enter Email" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="website_address" className="form-label">Website</label>
                                                    <input type="text" id="website_address" className="form-control" placeholder="Listing Website eg. http://example.com" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Social Information</label>
                                                    <div id="social_info_sortable_container">
                                                        <div className="directorist atbdp_social_field_wrapper">
                                                            <div className="row m-bottom-20" id="social-form-fields">
                                                                <div className="col-sm-4">
                                                                    <div className="form-group">
                                                                        <div className="select-basic">
                                                                            <select className="form-control">
                                                                                <option value="behance"> Behance</option>
                                                                                <option value="dribbble"> Dribbble</option>
                                                                                <option value="facebook"> Facebook</option>
                                                                                <option value="flickr"> Flickr</option>
                                                                                <option value="github"> Github</option>
                                                                                <option value="google-plus"> Google+</option>
                                                                                <option value="instagram"> Instagram</option>
                                                                                <option value="linkedin"> LinkedIn</option>
                                                                                <option value="pinterest"> Pinterest</option>
                                                                                <option value="reddit"> Reddit</option>
                                                                                <option value="snapchat-ghost"> Snapchat</option>
                                                                                <option value="soundcloud"> SoundCloud</option>
                                                                                <option value="stack-overflow"> StackOverFLow</option>
                                                                                <option value="tumblr"> Tumblr</option>
                                                                                <option value="twitter"> Twitter</option>
                                                                                <option value="vimeo"> Vimeo</option>
                                                                                <option value="vine"> Vine</option>
                                                                                <option value="youtube"> Youtube</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="form-group">
                                                                        <input type="url" className="form-control directory_field atbdp_social_input" placeholder="eg. http://example.com" required="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-2 d-flex align-items-center">
                                                                    <span className="removeSocialField btn-danger" id="removeSocial" title="Remove this item"><i className="la la-times"></i></span>
                                                                    <span className="adl-move-icon btn-secondary"><i className="la la-arrows"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="copy-btn btn btn-sm btn-secondary"><i className="la la-plus"></i> Add New</button>
                                                </div>
                                            </form>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                              
                               


                                
                                                               

                                                                {/*<!--ends social info .row-->*/}
                                                                <button type="submit" className="btn btn-primary" id="update_user_profile">Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{/*<!-- ends: .atbd_author_module -->*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                
                            </div>        
                        </section>
                  ) : (
                        <section className="dashboard-wrapper section-bg p-bottom-70 p-top-70">
                            <div className="container">
                                <div className="alert alert-danger" role="alert">
                                    Please login First!
                                </div>                                
                            </div>                        
                        </section>
                        )
                }

               <Footer />
            </Fragment>
        )
    }
}


export default connect(null, null)(AuthDeshbord);