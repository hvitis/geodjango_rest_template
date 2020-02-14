import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const noAction = e => e.preventDefault();

export class SellerInfo extends Component {
    render() {
        return (
            <Fragment>
                <div className="widget-body atbd_author_info_widget">
                    <div className="atbd_avatar_wrapper">
                        <div className="atbd_review_avatar">
                            <img src="./assets/img/avatar-60x60.jpg" alt="AvatarImage" />
                        </div>
                        <div className="atbd_name_time">
                            <h4>Zephy Real Estate <span className="verified" data-toggle="tooltip" data-placement="top" title="Verified"></span></h4>
                            <span className="review_time">Posted 6 days ago</span>
                        </div>
                    </div>
                    {/* <!-- ends: .atbd_avatar_wrapper --> */}
                    <div className="atbd_widget_contact_info">
                        <ul>
                            <li>
                                <span className="la la-map-marker"></span>
                                <span className="atbd_info">25 East Valley Road, Michigan</span>
                            </li>
                            <li>
                                <span className="la la-phone"></span>
                                <span className="atbd_info">(213) 995-7799</span>
                            </li>
                            <li>
                                <span className="la la-envelope"></span>
                                <span className="atbd_info">support@aazztech.com</span>
                            </li>
                            <li>
                                <span className="la la-globe"></span>
                                <NavLink to="/at_demo" className="atbd_info" onClick={noAction}>www.aazztech.com</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- ends: .atbd_widget_contact_info --> */}
                    <div className="atbd_social_wrap">
                        <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-facebook-f"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-twitter"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-google-plus-g"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-linkedin-in"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-dribbble"></span></NavLink></p>
                    </div>
                    {/* <!-- ends: .atbd_social_wrap --> */}
                    <NavLink onClick={noAction} to="/profile" className="btn btn-outline-primary btn-block">View Profile</NavLink>
                </div>
            </Fragment>
        )
    }
}

export class BusinessInfo extends Component {
    render() {
        return (
            <Fragment>

                <div className="widget atbd_widget widget-card">
                    <div className="atbd_widget_title">
                        <h4><span className="la la-clock-o"></span> Business Hours</h4>
                        <span className="badge badge-success">Open Now</span>
                    </div>
                    {/* <!-- ends: .atbd_widget_title --> */}
                    <div className="directory_open_hours">
                        <ul>
                            <li className="atbd_open">
                                <span className="day">Monday</span>
                                <div className="atbd_open_close_time">
                                    <span className="time">10:00 am</span> - <span className="time">06:00 pm</span>
                                </div>
                            </li>
                            <li className="atbd_open atbd_today">
                                <span className="day">Tuesday</span>
                                <div className="atbd_open_close_time">
                                    <span className="time">10:00 am</span> - <span className="time">06:30 pm</span>
                                </div>
                            </li>
                            <li className="atbd_open">
                                <span className="day">Wednesday</span>
                                <div className="atbd_open_close_time">
                                    <span className="time">09:00 am</span> - <span className="time">05:00 pm</span>
                                </div>
                            </li>
                            <li className="atbd_open">
                                <span className="day">Thursday</span>
                                <div className="atbd_open_close_time">
                                    <span className="time">10:00 am</span> - <span className="time">07:00 pm</span>
                                </div>
                            </li>
                            <li className="atbd_open">
                                <span className="day">Friday</span>
                                <div className="atbd_open_close_time">
                                    <span className="time">11:00 am</span> - <span className="time">06:00 pm</span>
                                </div>
                            </li>
                            <li className="atbd_closed">
                                <span className="day">Saturday</span>
                                <span>Closed</span>
                            </li>
                            <li className="atbd_closed">
                                <span className="day">Sunday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class CategoryWithIcon extends Component {
    render() {
        return (
            <Fragment>

                <div className="widget atbd_widget widget-card">
                    <div className="atbd_widget_title">
                        <h4><span className="la la-bookmark"></span> Category with Icon</h4>
                    </div>{/*<!-- ends: /.atbd_widget_title -->*/}
                    <div className="widget-body atbdp-widget-categories">
                        <ul className="atbdp_parent_category">
                            <li>
                                <NavLink onClick={noAction} to="/at_demo"><span className="la la-money"></span>Business</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={noAction} to="/at_demo"><span className="la la-heartbeat"></span>Health Care</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={noAction} to="/at_demo"><span className="la la-laptop"></span>Technology</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={noAction} to="/at_demo"><span className="la la-eject"></span>Conference</NavLink>
                                <span className="cat-trigger"></span>
                                <ul className="atbdp_child_category">
                                    <li><NavLink to="/at_demo">Event</NavLink></li>
                                    <li><NavLink to="/at_demo">Meeting</NavLink></li>
                                    <li><NavLink to="/at_demo">Sports</NavLink></li>
                                    <li><NavLink to="/at_demo">Business</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/at_demo"><span className="la la-leaf" onClick={noAction}></span>Agriculture</NavLink>
                            </li>
                            <li>
                                <NavLink to="/at_demo"><span className="la la-calculator" onClick={noAction}></span>Food and Fitness</NavLink>
                            </li>
                        </ul>
                    </div>{/*<!-- ends: .atbdp -->*/}
                </div>{/*<!-- ends: .widget -->                */}
            </Fragment>
        )
    }
}

export class TagStyle extends Component {
    render() {
        return (
            <Fragment>
                 <div className="widget atbd_widget widget-card">
                    <div className="atbd_widget_title">
                        <h4><span className="la la-tags"></span> Tag Style</h4>
                    </div>
                    <div className="widget-body atbdp-widget-tags">
                        <ul className="list-unstyled">
                            <li><NavLink onClick={noAction} to="/at_demo">New York</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Car Parking</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Food</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Travelling</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Home</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Restaurant</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Place</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Office</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo">Bike Parking</NavLink></li>
                        </ul>
                    </div>{/*<!-- ends: .widget-body -->*/}
                </div>{/*<!-- ends: .widget -->                */}
            </Fragment>
        )
    }
}

export class SimilarListing extends Component {
    render() {
        return (
            <Fragment>
                <ul className="listings">
                {
                    Object.values(this.props.list).slice(0, 4).map((value, key) => {
                         return (
                            <li key={key}>
                                <div className="atbd_left_img">
                                    <NavLink to={"listing-details"+value.id}><img src={value.img} style={{width: "90px"}} alt="listingimage" /></NavLink>
                                </div>
                                <div className="atbd_right_content">
                                    <div className="cate_title">
                                        <h4><NavLink to={"listing-details"+value.id}>{value.title}</NavLink></h4>
                                    </div>
                                    <p className="listing_value">
                                        <span>$25,800</span>
                                    </p>
                                    <p className="directory_tag">
                                        <span className="la la-cutlery" aria-hidden="true"></span>
                                        <span>
                                            <NavLink to="/at_demo" onClick={noAction}>Food & Drink</NavLink>
                                            <span className="atbd_cat_popup">+3
                                                <span className="atbd_cat_popup_wrapper">
                                                    <span>
                                                        <NavLink to="/at_demo" onClick={noAction}>Food<span>,</span></NavLink>
                                                        <NavLink to="/at_demo" onClick={noAction}>Others<span>,</span></NavLink>
                                                        <NavLink to="/at_demo" onClick={noAction}>Service<span>,</span></NavLink>
                                                    </span>
                                                </span>
                                            </span>{/*<!-- ends: .atbd_cat_popup -->*/}
                                        </span>
                                    </p>
                                </div>
                            </li>
                         )
                     })
                }
                </ul>
            </Fragment>
        )
    }
}

export class PopularListing extends Component {
    render() {
        return (
            <Fragment>
                <ul className="listings">
                {
                    Object.values(this.props.list).slice(0, 4).map((value, key) => {
                         return (
                            <li key={key}>
                                <div className="atbd_left_img">
                                    <NavLink to={"listing-details"+value.id}><img src={value.img} style={{width: "90px"}} alt="listingimage" /></NavLink>
                                </div>
                                <div className="atbd_right_content">
                                    <div className="cate_title">
                                        <h4><NavLink to={"listing-details"+value.id}>{value.title}</NavLink></h4>
                                    </div>
                                    <p className="listing_value">
                                        <span>$25,800</span>
                                    </p>
                                    <p className="directory_tag">
                                        <span className="la la-cutlery" aria-hidden="true"></span>
                                        <span>
                                            <NavLink to="/at_demo" onClick={noAction}>Food & Drink</NavLink>
                                            <span className="atbd_cat_popup">+3
                                                <span className="atbd_cat_popup_wrapper">
                                                    <span>
                                                        <NavLink to="/at_demo" onClick={noAction}>Food<span>,</span></NavLink>
                                                        <NavLink to="/at_demo" onClick={noAction}>Others<span>,</span></NavLink>
                                                        <NavLink to="/at_demo" onClick={noAction}>Service<span>,</span></NavLink>
                                                    </span>
                                                </span>
                                            </span>{/*<!-- ends: .atbd_cat_popup -->*/}
                                        </span>
                                    </p>
                                </div>
                            </li>
                         )
                     })
                }
                </ul>
            </Fragment>
        )
    }
}

export class WidgetContactInfo extends Component {
    render() {
        return (
            <Fragment>
                <div className="widget-body atbd_author_info_widget">
                    <div className="atbd_widget_contact_info">
                        <ul>
                            <li>
                                <span className="la la-map-marker"></span>
                                <span className="atbd_info">25 East Valley Road, Michigan</span>
                            </li>
                            <li>
                                <span className="la la-phone"></span>
                                <span className="atbd_info">(213) 995-7799</span>
                            </li>
                            <li>
                                <span className="la la-envelope"></span>
                                <span className="atbd_info">support@aazztech.com</span>
                            </li>
                            <li>
                                <span className="la la-globe"></span>
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_info">www.aazztech.com</NavLink>
                            </li>
                        </ul>
                    </div>{/*<!-- ends: .atbd_widget_contact_info -->*/}
                    <div className="atbd_social_wrap">
                        <p><NavLink to="/at_demo" onClick={noAction} ><span className="fab fa-facebook-f"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction} ><span className="fab fa-twitter"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction} ><span className="fab fa-google-plus-g"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction} ><span className="fab fa-linkedin-in"></span></NavLink></p>
                        <p><NavLink to="/at_demo" onClick={noAction} ><span className="fab fa-dribbble"></span></NavLink></p>
                    </div>{/*<!-- ends: .atbd_social_wrap -->*/}
                </div>{/*<!-- ends: .widget-body --> */}
            </Fragment>
        )
    }
}

export class Category extends Component {
    render() {
        return (
            <Fragment>
                 <div className="widget-wrapper">
                    <div className="widget-default">
                        <div className="widget-header">
                            <h6 className="widget-title">Categories</h6>
                        </div>
                        <div className="widget-content">
                            <div className="category-widget">
                                <ul>
                                    <li className="arrow-list4"><NavLink onClick={noAction} to="/at_demo">Business</NavLink></li>
                                    <li className="arrow-list4"><NavLink onClick={noAction} to="/at_demo">Finance</NavLink></li>
                                    <li className="arrow-list4"><NavLink onClick={noAction} to="/at_demo">Industry Reports</NavLink></li>
                                    <li className="arrow-list4"><NavLink onClick={noAction} to="/at_demo">Strategy</NavLink></li>
                                    <li className="arrow-list4"><NavLink onClick={noAction} to="/at_demo">Technology</NavLink></li>
                                    <li className="arrow-list4"><NavLink onClick={noAction} to="/at_demo">Marketing</NavLink></li>
                                    <li className="arrow-list4"><NavLink onClick={noAction} to="/at_demo">Strategy</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export class PopularPost extends Component {
    render() {
        return (
            <Fragment>
               <div className="widget-wrapper">
                    <div className="widget-default">
                        <div className="widget-header">
                            <h6 className="widget-title">Popular Post</h6>
                        </div>
                        <div className="widget-content">
                            <div className="sidebar-post">
                                {
                                    Object.values(this.props.blog).slice(0, 4).map((value, key) => {
                                        return (
                                            <div className="post-single" key={key}>
                                                <div className="d-flex align-items-center">
                                                    <NavLink to={'blog-details'+value.id}><img src={value.imgSrc} alt="" style={{width: "90px"}} /></NavLink>
                                                    <p><span>{value.date}</span> <span>by <a href="http://aazztech.com">Aazztech</a></span></p>
                                                </div>
                                                <NavLink to={'blog-details'+value.id} className="post-title">{value.title.split("").slice(0, 30)}</NavLink>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class RecentPost extends Component {
    render() {
        return (
            <Fragment>
               <div className="widget-wrapper">
                    <div className="widget-default">
                        <div className="widget-header">
                            <h6 className="widget-title">Recent Post</h6>
                        </div>
                        <div className="widget-content">
                            <div className="sidebar-post">
                                {
                                    Object.values(this.props.blog).slice(0, 4).map((value, key) => {
                                        return (
                                            <div className="post-single" key={key}>
                                                <div className="d-flex align-items-center">
                                                    <NavLink to={'blog-details'+value.id}><img src={value.imgSrc} alt="" style={{width: "90px"}} /></NavLink>
                                                    <p><span>{value.date}</span> <span>by <a href="http://aazztech.com">Aazztech</a></span></p>
                                                </div>
                                                <NavLink to={'blog-details'+value.id} className="post-title">{value.title.split("").slice(0, 30)}</NavLink>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class PopularTags extends Component {
    render() {
        return (
            <Fragment>
               <div className="widget-wrapper">
                    <div className="widget-default">
                        <div className="widget-header">
                            <h6 className="widget-title">Popular Tags</h6>
                        </div>
                        <div className="widget-content">
                            <div className="tags-widget">
                                <ul>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Business</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Finance</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Strategy</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Global</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Marketing</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Technology</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Wordpress</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Solution</NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction}>Bizillion</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class StayUpdate extends Component {
    render() {
        return (
            <Fragment>
              <div className="widget-wrapper">
                    <div className="widget-default">
                        <div className="widget-header">
                            <h6 className="widget-title">Stay Updated</h6>
                        </div>
                        <div className="widget-content">
                            <div className="subscribe-widget">
                                <form action="#">
                                    <input type="email" className="form-control m-bottom-20" placeholder="Enter email" required />
                                    <button className="btn btn-sm btn-primary shadow-none" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class ConnentFollow extends Component {
    render() {
        return (
            <Fragment>
              <div className="widget-wrapper">
                    <div className="widget-default">
                        <div className="widget-header">
                            <h6 className="widget-title">Connect &amp; Follow</h6>
                        </div>
                        <div className="widget-content">
                            <div className="social social--small">
                                <ul className="d-flex flex-wrap">
                                    <li><NavLink to="/at_demo" onClick={noAction} className="facebook"><span className="fab fa-facebook-f"></span></NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction} className="twitter"><span className="fab fa-twitter"></span></NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction} className="linkedin"><span className="fab fa-linkedin-in"></span></NavLink></li>
                                    <li><NavLink to="/at_demo" onClick={noAction} className="gplus"><span className="fab fa-google-plus-g"></span></NavLink></li>
                                </ul>
                            </div>{/*<!-- ends: .social -->*/}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
