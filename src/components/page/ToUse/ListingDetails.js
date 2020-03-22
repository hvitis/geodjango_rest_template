import React, {Fragment} from 'react';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { connect } from "react-redux";
import { BreadcrumbSingle } from '../../content/breadcrumb';
import { ContentStory } from '../../content/listing-details-story';
import Gallery from '../content/carousel/gallery';
import { ListingFetures } from '../../content/listing-fetures';
import { Video, Video2 } from '../../content/video';
import { ContactInfo } from '../../content/contact-info';
import { Accordion } from '../../content/accordion';
import { Review, AddReview } from '../../content/review';
import { SellerInfo, BusinessInfo, CategoryWithIcon, TagStyle, SimilarListing, PopularListing } from '../content/widget';

import { NavLink } from 'react-router-dom';
import { ContactForm } from '../../content/contact-form';
import Report from '../content/modal/report';
import Clime from '../content/modal/clime-list';
const noAction = e => e.preventDefault();

const ListingDetails = (props) => {
    const light = props.logo[0].light;
    const id = props.match.params.id;
    const filter = Object.values(props.list).filter((value) => {
        return value.id === id;
    })
    

    return (
        <Fragment>
            {/* Header section start */}
            <section className="listing-details-wrapper bgimage">
                <div className="bg_image_holder"><img src="./assets/img/details-img.jpg" alt="" />
                
                </div>
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />                    
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <div className="listing-info content_above">
                    <div className="container">
                        <div className="row">
                            <BreadcrumbSingle filter={filter} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Header section end */}
            <section className="directory_listiing_detail_area single_area section-bg section-padding-strict">
        
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ContentStory />  
                            <div className="atbd_content_module atbd_listing_gallery">
                                <div className="atbd_content_module__tittle_area">
                                    <div className="atbd_area_title">
                                        <h4><span className="la la-image"></span>Gallery</h4>
                                    </div>
                                </div>
                                <Gallery />
                            </div> 
                            {/* Gallery end */}

                            <ListingFetures />

                            <div className="atbd_content_module atbd_custom_fields_contents">
                                <div className="atbd_content_module__tittle_area">
                                    <div className="atbd_area_title">
                                        <h4><span className="la la-youtube-play"></span>Video</h4>
                                    </div>
                                </div>
                                <Video />
                            </div>
                            {/* video end */}

                            <div className="atbd_content_module">
                                <div className="atbd_content_module__tittle_area">
                                    <div className="atbd_area_title">
                                        <h4><span className="la la-map-o"></span>Location</h4>
                                    </div>
                                </div>
                                <div className="atbdb_content_module_contents">
                                    <div className="map" id="map-one" style={{position: 'relative'}}>
                                        {/* <Map1 /> */}
                                    </div>
                                </div>
                            </div>
                            {/* Map end */}

                            <div className="atbd_content_module atbd_contact_information_module">
                                <div className="atbd_content_module__tittle_area">
                                    <div className="atbd_area_title">
                                        <h4><span className="la la-headphones"></span>Contact Information</h4>
                                    </div>
                                </div>
                                <ContactInfo />
                            </div>
                            {/* Contact Info end */}

                            <div className="atbd_content_module atbd_faqs_module">
                                <div className="atbd_content_module__tittle_area">
                                    <div className="atbd_area_title">
                                        <h4><span className="la la-question-circle"></span>Lisiitng FAQ's</h4>
                                    </div>
                                </div>                               
                                <Accordion />
                            </div>
                            {/* <!-- ends: .atbd_content_module --> */}
                            <Review />
                            <AddReview />                            
                        </div>
                        <div className="col-lg-4">
                            <div className="widget atbd_widget widget-card">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-user"></span>Seller Info</h4>
                                </div>
                                {/* <!-- ends: .atbd_widget_title --> */}
                                <SellerInfo />
                            </div>
                            {/* end seller info */}

                            <div className="widget atbd_widget widget_claim_listing">
                                <NavLink onClick={noAction} to="/at_demo" className="btn btn-block btn-gradient btn-gradient-two btn-lg claim-btn" data-toggle="modal" data-target="#moda_claim_listing">Claim This Business</NavLink>
                            </div>{/*<!-- ends: .widget -->*/}
                            <BusinessInfo />
                            <CategoryWithIcon />
                            <TagStyle />

                            <div className="widget atbd_widget widget-card">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-map-marker"></span> Sidebar Map</h4>
                                </div>{/*<!-- ends: .atbd_widget_title -->*/}
                                <div className="widget-body atbdb_content_module_contents">
                                    <div className="map" id="map-two" style={{position: 'relative'}}>
                                        {/* <Map1 styles="true" /> */}
                                    </div>
                                </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                            </div>{/*<!-- ends: widget -->*/}
                            <Video2 />

                            <div className="widget atbd_widget widget-card">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-envelope"></span> Sidebar Form</h4>
                                </div>{/*<!-- ends: .atbd_widget_title -->*/}
                                <div className="atbdp-widget-listing-contact">
                                    <ContactForm />
                                </div>
                            </div>
                            {/* end sidebar contact */}

                            <div className="widget atbd_widget widget-card">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-list-alt"></span> Similar Listings</h4>
                                    <NavLink to="/all-listings-grid">View All</NavLink>
                                </div>{/*<!-- ends: .atbd_widget_title -->*/}
                                <div className="atbd_categorized_listings atbd_similar_listings">
                                    <SimilarListing list={props.list} />
                                </div>
                            </div>
                            {/* end similar listing */}

                            <div className="widget atbd_widget widget-card">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-list-alt"></span> Popular Listings</h4>
                                    <NavLink to="/all-listings-grid">View All</NavLink>
                                </div>{/*<!-- ends: .atbd_widget_title -->*/}
                                <div className="atbd_categorized_listings atbd_popular_listings">
                                    <PopularListing list={props.list} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <Report />
           <Clime />
           <Footer />
        </Fragment> 
    )
}
const mapStateToProps = (state) => {

    return {
        list : state.list,
        logo: state.logo
    }
}
export default connect(mapStateToProps)(ListingDetails);