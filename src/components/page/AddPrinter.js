import React, {Fragment, Component} from 'react';
import { Footer } from '../layout/Footer';
import { connect } from 'react-redux';

class AddPrinter extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    render () {
        return (
            <Fragment>

                    <section className="add-listing-wrapper border-bottom section-bg section-padding-strict">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-user"></span>Print3r Information</h4>
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

export default connect(mapStateToProps)(AddPrinter);