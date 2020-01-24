import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { connect } from 'react-redux';
import Map1 from '../content/element/map';
class AddListing extends Component {
    
    render () {
        const light = this.props.logo[0].light;
        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />                    
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Add Listing" />
                </section>
                {/* Header section end */}

                    <section className="add-listing-wrapper border-bottom section-bg section-padding-strict">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-user"></span>General Information</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <form action="/">
                                                <div className="form-group">
                                                    <label htmlFor="title" className="form-label">Title</label>
                                                    <input type="text" className="form-control" id="title" placeholder="Enter Title" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="desc" className="form-label">Long Description</label>
                                                    <textarea id="desc" rows="8" className="form-control" placeholder="Description"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="tagline" className="form-label">Tagline</label>
                                                    <input type="text" className="form-control" id="tagline" placeholder="Your Listing Motto or Tagline" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Pricing</label>
                                                    <div className="pricing-options">
                                                        <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                            <input type="checkbox" className="custom-control-input" id="price_one" value="one" />
                                                            <label className="custom-control-label" htmlFor="price_one">Price [USD]</label>
                                                        </div>
                                                        <span>Or</span>
                                                        <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                            <input type="checkbox" className="custom-control-input" id="price_two" value="two" />
                                                            <label className="custom-control-label" htmlFor="price_two">Price Range</label>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-option-inputs">
                                                        <input type="text" id="price-input" className="form-control" placeholder="Price of this listing Eg. 100" />
                                                        <div className="select-basic" id="price-input-range">
                                                            <select className="form-control">
                                                                <option>Select Price Range</option>
                                                                <option>Ultra High ($$$$)</option>
                                                                <option>Expensive ($$$)</option>
                                                                <option>Moderate ($$)</option>
                                                                <option>Cheap ($)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="short_desc" className="form-label">Short Description/Excerpt</label>
                                                    <textarea id="short_desc" rows="5" className="form-control" placeholder="Short Description"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="custom-field" className="form-label">Custom Select Option</label>
                                                    <div className="select-basic">
                                                        <select className="form-control" id="custom-field">
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="cf1" className="form-label">Custom Field 1</label>
                                                    <input type="text" className="form-control" id="cf1" placeholder="Enter Title" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="cdate" className="form-label">Custom Date</label>
                                                    <input type="date" className="form-control" id="cdate" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Custom Radio</label>
                                                    <div className="atbdp-radio-list">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="customRadioOne" name="customRadioInline1" className="custom-control-input" />
                                                            <label className="custom-control-label" htmlFor="customRadioOne">Male</label>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="customRadioTwo" name="customRadioInline1" className="custom-control-input" />
                                                            <label className="custom-control-label" htmlFor="customRadioTwo">Female</label>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="customRadioThree" name="customRadioInline1" className="custom-control-input" />
                                                            <label className="custom-control-label" htmlFor="customRadioThree">Other</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="location" className="form-label">Location</label>
                                                    <div className="select-basic">
                                                        <select className="form-control" id="location">
                                                            <option>Australia</option>
                                                            <option>Sydney</option>
                                                            <option>Newyork</option>
                                                            <option>Los Angels</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="select-basic2">
                                                        <label htmlFor="atbd_tags" className="form-label">Tags</label>
                                                        <select className="form-control" id="atbd_tags" multiple="multiple">
                                                            <option>orange</option>
                                                            <option>white</option>
                                                            <option>purple</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="ad_categroy" className="form-label">Select Category</label>
                                                    <div className="select-basic">
                                                        <select className="form-control ad_search_category" id="ad_categroy">
                                                            <option>Select Category</option>
                                                            <option>Restaurant</option>
                                                            <option>&nbsp;&nbsp; Food</option>
                                                            <option>&nbsp;&nbsp; Lunch Pack</option>
                                                            <option>Places</option>
                                                            <option>&nbsp;&nbsp; Travel</option>
                                                            <option>&nbsp;&nbsp; Booking</option>
                                                            <option>&nbsp;&nbsp; Hotel</option>
                                                            <option>&nbsp;&nbsp; Location</option>
                                                            <option>Shopping</option>
                                                            <option>&nbsp;&nbsp; Accessories</option>
                                                            <option>&nbsp;&nbsp; Clothing</option>
                                                            <option>&nbsp;&nbsp; Gadgets</option>
                                                        </select>
                                                    </div>
                                                </div>{/*<!-- ends: .form-group -->*/}
                                            </form>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1">
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
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-calendar-check-o"></span> Opening/Business Hour Information</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <div className="business-hour">
                                                <div className="row">
                                                    <div className="col-md-12 m-bottom-20">
                                                        <div className="enable247hour custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                            <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="enable247hour" />
                                                            <label htmlFor="enable247hour" className="not_empty custom-control-label"> Is this listing open 24 hours
                                                                7 days a week? </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="bdbh_saturday" className="atbd_day_label form-label">Saturday</label>
                                                            <div className="row atbd_row_bg">
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="bdbh_saturday" className="not_empty">Start time</label>
                                                                    <input type="time" id="bdbh_saturday" className="form-control directory_field" />
                                                                </div>
                                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                                    <label htmlFor="bdbh_saturday_cls" className="not_empty">Close time</label>
                                                                    <input type="time" id="bdbh_saturday_cls" className="form-control directory_field" />
                                                                </div>
                                                            </div>
                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="sat_cls" />
                                                                <label htmlFor="sat_cls" className="not_empty custom-control-label"> Mark as Closed </label>
                                                            </div>
                                                        </div>{/*<!-- ends: .form-group -->*/}
                                                        <div className="form-group">
                                                            <label htmlFor="bdbh_sunday" className="atbd_day_label form-label">Sunday</label>
                                                            <div className="row atbd_row_bg">
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="bdbh_sunday" className="not_empty">Start time</label>
                                                                    <input type="time" id="bdbh_sunday" className="form-control directory_field" />
                                                                </div>
                                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                                    <label htmlFor="bdbh_sunday_cls" className="not_empty">Close time</label>
                                                                    <input type="time" id="bdbh_sunday_cls" className="form-control directory_field" />
                                                                </div>
                                                            </div>
                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="sun_cls" />
                                                                <label htmlFor="sun_cls" className="not_empty custom-control-label"> Mark as Closed </label>
                                                            </div>
                                                        </div>{/*<!-- ends: .form-group -->*/}
                                                        <div className="form-group">
                                                            <label htmlFor="bdbh_monday" className="atbd_day_label form-label">Monday</label>
                                                            <div className="row atbd_row_bg">
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="bdbh_monday" className="not_empty">Start time</label>
                                                                    <input type="time" id="bdbh_monday" className="form-control directory_field" />
                                                                </div>
                                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                                    <label htmlFor="bdbh_monday_cls" className="not_empty">Close time</label>
                                                                    <input type="time" id="bdbh_monday_cls" className="form-control directory_field" />
                                                                </div>
                                                            </div>
                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="mon_cls" />
                                                                <label htmlFor="mon_cls" className="not_empty custom-control-label"> Mark as Closed </label>
                                                            </div>
                                                        </div>{/*<!-- ends: .form-group -->*/}
                                                        <div className="form-group">
                                                            <label htmlFor="bdbh_tuesday" className="atbd_day_label form-label">Tuesday</label>
                                                            <div className="row atbd_row_bg">
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="bdbh_tuesday" className="not_empty">Start time</label>
                                                                    <input type="time" id="bdbh_tuesday" className="form-control directory_field" />
                                                                </div>
                                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                                    <label htmlFor="bdbh_tuesday_cls" className="not_empty">Close time</label>
                                                                    <input type="time" id="bdbh_tuesday_cls" className="form-control directory_field" />
                                                                </div>
                                                            </div>
                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="tue_cls" />
                                                                <label htmlFor="tue_cls" className="not_empty custom-control-label"> Mark as Closed </label>
                                                            </div>
                                                        </div>{/*<!-- ends: .form-group -->*/}
                                                        <div className="form-group">
                                                            <label htmlFor="bdbh_wednesday" className="atbd_day_label form-label">Wednesday</label>
                                                            <div className="row atbd_row_bg">
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="bdbh_wednesday" className="not_empty">Start time</label>
                                                                    <input type="time" id="bdbh_wednesday" className="form-control directory_field" />
                                                                </div>
                                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                                    <label htmlFor="bdbh_wednesday_cls" className="not_empty">Close time</label>
                                                                    <input type="time" id="bdbh_wednesday_cls" className="form-control directory_field" />
                                                                </div>
                                                            </div>
                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="wed_cls" />
                                                                <label htmlFor="wed_cls" className="not_empty custom-control-label"> Mark as Closed </label>
                                                            </div>
                                                        </div>{/*<!-- ends: .form-group -->*/}
                                                        <div className="form-group">
                                                            <label htmlFor="bdbh_thursday" className="atbd_day_label form-label">Thursday</label>
                                                            <div className="row atbd_row_bg">
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="bdbh_thursday" className="not_empty">Start time</label>
                                                                    <input type="time" id="bdbh_thursday" className="form-control directory_field" />
                                                                </div>
                                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                                    <label htmlFor="bdbh_thursday_cls" className="not_empty">Close time</label>
                                                                    <input type="time" id="bdbh_thursday_cls" className="form-control directory_field" />
                                                                </div>
                                                            </div>
                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="thu_cls" />
                                                                <label htmlFor="thu_cls" className="not_empty custom-control-label"> Mark as Closed </label>
                                                            </div>
                                                        </div>{/*<!-- ends: .form-group -->*/}
                                                        <div className="form-group">
                                                            <label htmlFor="bdbh_friday" className="atbd_day_label form-label">Friday</label>
                                                            <div className="row atbd_row_bg">
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="bdbh_friday" className="not_empty">Start time</label>
                                                                    <input type="time" id="bdbh_friday" className="form-control directory_field" />
                                                                </div>
                                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                                    <label htmlFor="bdbh_friday_cls" className="not_empty">Close time</label>
                                                                    <input type="time" id="bdbh_friday_cls" className="form-control directory_field" />
                                                                </div>
                                                            </div>
                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" name="enable247hour" value="1" id="fri_cls" />
                                                                <label htmlFor="fri_cls" className="not_empty custom-control-label"> Mark as Closed </label>
                                                            </div>
                                                        </div>{/*<!-- ends: .form-group -->*/}
                                                    </div>
                                                    {/*<!--ends col-md-6 col-sm-12-->*/}
                                                </div>
                                                {/*<!--ends .row-->*/}
                                            </div>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-calendar-check-o"></span> Listing FAQs</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <div id="faqs_info_sortable_container" className="ui-sortable">
                                                <div className="directorist row atbdp_faqs_wrapper" id="faqsID-0">
                                                    <div className="col-md-3 col-sm-12">
                                                        <div className="form-group">
                                                            {/*<!-- <label></label>-->*/}
                                                            <input type="text" placeholder="Question" name="faqs[0][quez]" id="atbdp_social" className="form-control atbdp_faqs_quez" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            {/*<!--<label></label>-->*/}
                                                            <textarea rows="3" placeholder="Answer" name="faqs[0][ans]" className="form-control directory_field atbdp_faqs_input" required=""></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <span className="removeFAQSField btn-danger" id="removeFAQ" title="Remove this item"><i className="la la-times"></i></span>
                                                        <span className="adl-move-icon btn-secondary"><i className="la la-arrows"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-secondary btn-sm m-top-20" id="addNewFAQS">
                                                <span className="plus-sign">+</span>
                                                Add New
                                            </button>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1">
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
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-calendar-check-o"></span> Images & Video</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <div id="_listing_gallery">
                                                <div className="add_listing_form_wrapper" id="gallery_upload">
                                                    <div className="form-group text-center">
                                                        {/*<!--  add & remove image links -->*/}
                                                        <p className="hide-if-no-js">
                                                            <a href="# " className="upload-header btn btn-outline-secondary">Upload Preview Image</a>
                                                        </p>
                                                    </div>
                                                    <div className="form-group text-center">
                                                        {/*<!-- image container, which can be manipulated with js -->*/}
                                                        <div className="listing-img-container">
                                                            <img src="./assets/img/picture.png" alt="No_Image_Found" />
                                                            <p>No Images</p>
                                                        </div>
                                                        {/*<!--  add & remove image links -->*/}
                                                        <p className="hide-if-no-js">
                                                            <a href="# " id="listing_image_btn" className="btn btn-outline-primary m-right-10">
                                                                <span className="dashicons dashicons-format-image"></span> Upload Slider Images
                                                            </a><a id="delete-custom-img" className="btn btn-outline-danger hidden" href="# "> Remove Images</a><br />
                                                        </p>
                                                    </div>
                                                </div>
                                                {/*<!--ends add_listing_form_wrapper-->*/}
                                            </div>
                                            <div className="form-group m-top-30">
                                                <label htmlFor="videourl" className="not_empty form-label">Video Url</label>
                                                <input type="text" id="videourl" name="videourl" className="form-control directory_field" placeholder="Only YouTube & Vimeo URLs." />
                                            </div>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="atbd_term_and_condition_area custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                        <input type="checkbox" className="custom-control-input" name="listing_t" value="1" id="listing_t" />
                                        <label htmlFor="listing_t" className="not_empty custom-control-label">I Agree with all <a href=" " id="listing_t_c">Terms & Conditions</a></label>
                                    </div>
                                    <div className="btn_wrap list_submit m-top-25">
                                        <button type="submit" className="btn btn-primary btn-lg listing_submit_btn">Submit listing</button>
                                    </div>
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                            </div>
                        </div>
                    </section>{/*<!-- ends: .add-listing-wrapper -->*/}
                    

               <Footer />
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}

export default connect(mapStateToProps)(AddListing);