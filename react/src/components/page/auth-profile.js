import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';

const noAction = e => e.preventDefault();

class AuthProfile extends Component {
    render () {
        const light = this.props.logo[0].light;
        const logdIn = () => {
            return this.props.login
        }
        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />                    
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Author Profile" />
                </section>
                {/* Header section end */}
    
                <section className="author-info-area section-padding-strict section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="atbd_auhor_profile_area">
                                    <div className="atbd_author_avatar">
                                        <img src="./assets/img/author-profile.jpg" alt="AuthorImage" />
                                        <div className="atbd_auth_nd">
                                            <h2>Kenneth Frazier</h2>
                                            <p>Joined in March 2019</p>
                                        </div>
                                    </div>{/*<!-- ends: .atbd_author_avatar -->*/}
                                    <div className="atbd_author_meta">
                                        <div className="atbd_listing_meta">
                                            <span className="atbd_meta atbd_listing_rating">4.5 <i className="la la-star"></i></span>
                                            <p className="meta-info"><span>22</span>Reviews</p>
                                        </div>
                                        <p className="meta-info"><span>15</span>Listings</p>
                                    </div>{/*<!-- ends: .atbd_author_meta -->*/}
                                </div>{/*<!-- ends: .atbd_auhor_profile_area -->*/}
                            </div>

                            {/* <!-- ends: .col-lg-12 --> */}
                            <div className="col-lg-8 col-md-7 m-bottom-30">
                                <div className="atbd_author_module">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-user"></span>About Seller</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Nemo ucxqui officia voluptatem accusantium doloremque laudan tium, totam rem ape dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                                                <br /> <br />
                                                Nemo enim ipsam voluptatem quia voluptas cupidatat non proident, sunt culpa qui officia dese runt mollit anim id est laborum. Sedu perspi sunt explicabo. Nemo ucxqui officia voluptatem hscia unde omnis proident.</p>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .atbd_author_module -->*/}                                
                            </div>{/*<!-- ends: .col-md-8 -->*/}
                            <div className="col-lg-4 col-md-5 m-bottom-30">
                                <div className="widget atbd_widget widget-card">
                                    <div className="atbd_widget_title">
                                        <h4><span className="la la-phone"></span>Contact Info</h4>
                                    </div>{/*<!-- ends: .atbd_widget_title -->*/}
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
                                            <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-facebook-f"></span></NavLink></p>
                                            <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-twitter"></span></NavLink></p>
                                            <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-google-plus-g"></span></NavLink></p>
                                            <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-linkedin-in"></span></NavLink></p>
                                            <p><NavLink to="/at_demo" onClick={noAction}><span className="fab fa-dribbble"></span></NavLink></p>
                                        </div>{/*<!-- ends: .atbd_social_wrap -->*/}
                                    </div>{/*<!-- ends: .widget-body -->*/}
                                </div>{/*<!-- ends: .widget -->*/}
                            </div>{/*<!-- ends: .col-lg-4 -->*/}

                            <div className="col-lg-12">
                                <div className="atbd_author_listings_area m-bottom-30">
                                    <h1>Author Listings</h1>
                                    <div className="atbd_author_filter_area">
                                        <div className="dropdown">
                                            <a className="btn btn-outline-primary dropdown-toggle" href="# " role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Filter by Category <span className="caret"></span>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href=" ">Restaurant</a>
                                                <a className="dropdown-item" href=" ">Education</a>
                                                <a className="dropdown-item" href=" ">Event</a>
                                                <a className="dropdown-item" href=" ">Food</a>
                                                <a className="dropdown-item" href=" ">Service</a>
                                                <a className="dropdown-item" href=" ">Travel</a>
                                                <a className="dropdown-item" href=" ">Others</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .atbd_author_listings_area -->*/}
                                
                                <div className="row">
                                    <CardListingGrid4 logdIn={logdIn()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
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
export default connect(mapStateToProps)(AuthProfile);