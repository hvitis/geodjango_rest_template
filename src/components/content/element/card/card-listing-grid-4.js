import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const noAction = e => e.preventDefault();
class ListingCardGrid4 extends Component {
    render() {
        const { list, logdIn } = this.props;        
        return (
            <Fragment>
            {
                Object.values(list).slice(0, 6).map((value, key) => {
                    const { img, rating, badge, title, location, price, phone, opCl, id } = value;
                    return (
                        <div className="col-lg-4 col-sm-6" key={key}>
                            <div className="atbd_single_listing ">
                                <article className="atbd_single_listing_wrapper">
                                    <figure className="atbd_listing_thumbnail_area">
                                        <div className="atbd_listing_image">
                                            <a href=" ">
                                                <img src={img} alt="listingimage" />
                                            </a>
                                        </div>{/*<!-- ends: .atbd_listing_image -->*/}
                                        <div className="atbd_author atbd_author--thumb">
                                            <a href=" ">
                                                <img src="./assets/img/author-thumb2.jpg" alt="AuthorImage" />
                                                <span className="custom-tooltip">Jeffery A, Owner</span>
                                            </a>
                                        </div>
                                        <div className="atbd_thumbnail_overlay_content">
                                            <ul className="atbd_upper_badge">
                                                <li><span className={"text-capitalize atbd_badge atbd_badge_"+badge}>{badge}</span></li>
                                            </ul>{/*<!-- ends .atbd_upper_badge -->*/}
                                        </div>{/*<!-- ends: .atbd_thumbnail_overlay_content -->*/}
                                    </figure>{/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
                                    <div className="atbd_listing_info">
                                    {
                                        logdIn === null ? (
                                            <Fragment>
                                    
                                                <div className="atbd_content_upper">
                                                    <h4 className="atbd_listing_title">
                                                        <NavLink to={"/listing-details"+id}>{title}</NavLink>
                                                    </h4>
                                                    <div className="atbd_listing_meta">
                                                        <span className="atbd_meta atbd_listing_rating">{rating}<i className="la la-star"></i></span>
                                                        <span className="atbd_meta atbd_listing_price">{"$ "+price}</span>
                                                        <span className={"atbd_meta atbd_badge_"+opCl}>{opCl} Now</span>
                                                    </div>
                                                    <div className="atbd_listing_data_list">
                                                        <ul>
                                                            <li>
                                                                <p><span className="la la-map-marker"></span>{location}</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="la la-phone"></span>{phone}</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="la la-calendar-check-o"></span>Posted 2 months ago</p>
                                                            </li>
                                                        </ul>
                                                    </div>{/*<!-- End atbd listing meta -->*/}
                                                </div>
                                                <div className="atbd_listing_bottom_content">
                                                    <div className="atbd_content_left">
                                                        <div className="atbd_listing_category">
                                                            <a href=" "><span className="la la-map-marker"></span>Places &amp; Destination</a>
                                                        </div>
                                                    </div>
                                                    <span className="atbd_content_right">
                                                        <li className="atbd_count"><span className="la la-eye"></span>900+</li>
                                                        <li className="atbd_save"><span className="la la-heart-o"></span></li>
                                                    </span>
                                                </div>
                                            </Fragment>
                                        ) : (
                                            <Fragment>
                                                <div className="atbd_content_upper">
                                                    <h4 className="atbd_listing_title">
                                                        <NavLink to={"/listing-details"+id}>{title}</NavLink>
                                                    </h4>
                                                    <div className="atbd_card_action">
                                                        <div className="atbd_listing_meta">
                                                            <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star"></i></span>
                                                        </div>{/*<!-- ends: .atbd listing meta -->*/}
                                                        <div className="db_btn_area">
                                                            <div className="dropup edit_listing">
                                                                <NavLink onClick={noAction} to="/at_demo" role="button" className="btn btn-sm btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</NavLink>
                                                                <div className="dropdown-menu">
                                                                    <NavLink onClick={noAction} className="dropdown-item" to="/at_demo"><span className="la la-edit color-primary"></span> Edit Your Listing</NavLink>
                                                                    <NavLink onClick={noAction} className="dropdown-item" to="/at_demo"><span className="la la-money color-secondary"></span> Change Your Plan</NavLink>
                                                                </div>
                                                            </div>
                                                            <NavLink onClick={noAction} to="/at_demo" className="directory_remove_btn btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#modal-item-remove">Delete</NavLink>
                                                        </div> {/*<!--ends .db_btn_area-->*/}
                                                    </div>
                                                </div>{/*<!-- end .atbd_content_upper -->*/}
                                                <div className="atbd_listing_bottom_content">
                                                    <div className="listing-meta">
                                                        <p><span>Plan Name:</span> Basic Plan</p>
                                                        <p><span>Expiration:</span> February 13, 2020</p>
                                                        <p><span>Listing Status:</span> Published</p>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    }                                        
                                    </div>{/*<!-- ends: .atbd_listing_info -->*/}
                                </article>{/*<!-- atbd_single_listing_wrapper -->*/}
                            </div>
                        </div>                        
                    )
                })
            }
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        list : state.list
    }
}
export default connect(mapStateToProps)(ListingCardGrid4);