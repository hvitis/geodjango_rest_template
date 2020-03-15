import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class ListingCardGrid12 extends Component {
    render() {
        const { list } = this.props;
        return (
            <Fragment>
            {
                Object.values(list).map((value, key) => {
                    const { img, category, icon, rating, badge, title, location, price, phone, opCl, id } = value;
                    return (                        
                        <div className="col-lg-12" key={key}>
                            <div className="atbd_single_listing atbd_listing_list">
                                <article className="atbd_single_listing_wrapper">
                                    <figure className="atbd_listing_thumbnail_area">
                                        <div className="atbd_listing_image">
                                            <a href=" ">
                                                <img src={img} alt="listingimage" />
                                            </a>
                                        </div>{/*<!-- ends: .atbd_listing_image -->*/}                                               
                                        <div className="atbd_thumbnail_overlay_content">
                                            <ul className="atbd_upper_badge">
                                                <li><span className={"text-capitalize atbd_badge atbd_badge_"+badge}>{badge}</span></li>
                                            </ul>{/*<!-- ends .atbd_upper_badge -->*/}
                                        </div>{/*<!-- ends: .atbd_thumbnail_overlay_content -->*/}
                                    </figure>{/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
                                    <div className="atbd_listing_info">
                                        <div className="atbd_content_upper">
                                            <h4 className="atbd_listing_title">
                                                <NavLink to={"/listing-details"+id}>{title}</NavLink>
                                            </h4>
                                            <div className="atbd_listing_meta">
                                                <span className="atbd_meta atbd_listing_rating">{rating}<i className="la la-star"></i></span>
                                                <span className="atbd_meta atbd_listing_price">{"$ "+price}</span>
                                                <span className={"atbd_meta atbd_badge_"+opCl}>{opCl} Now</span>
                                            </div>{/*<!-- End atbd listing meta -->*/}
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
                                        </div>{/*<!-- end .atbd_content_upper -->*/}
                                        <div className="atbd_listing_bottom_content">
                                            <div className="atbd_content_left">
                                                <div className="atbd_listing_category">
                                                    <a href=" "><span className={"la "+icon}></span>{category}</a>
                                                </div>
                                            </div>
                                            <ul className="atbd_content_right">
                                                <li className="atbd_count"><span className="la la-eye"></span>900+</li>
                                                <li className="atbd_save">
                                                    <span className="la la-heart-o"></span>
                                                </li>
                                            </ul>
                                        </div>{/*<!-- end .atbd_listing_bottom_content -->*/}
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

export default ListingCardGrid12;