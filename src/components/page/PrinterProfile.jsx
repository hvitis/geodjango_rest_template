import React, { Fragment, Component } from 'react';
import Header from '../layout/Header';
import { Footer } from '../layout/Footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
import axios from 'axios';
import config from '../../config'

const noAction = e => e.preventDefault();

class PrinterProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: {
                user: "",
                unique_id: "",
                nickname: "",
                firstName: "",
                lastName: "",
                description: "",
                socialMedia: { websiteUrl: "", facebookUrl: "", twitterUrl: "", telegramUrl: "", linkedinUrl: "", youtubeUrl: "" },
                profileImage: { id: null, file: "", profile: null },
                date_joined: "",
                phone_number: "",
            }
        }
    }

    componentDidMount() {
        let UUID = this.props.match.params.userUUID
        console.log('UUID on entering profile', UUID)
        // this.handleChange = this.handleChange.bind(this);
        axios.get(`${config.API_URL}/accounts/${UUID}`, {
            headers: {
                'accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `application/json`,
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.status == 200) {
                    this.setState({ userProfile: response.data[0] })
                }
                //handle success
                console.log('Whole success profile', this.state.userProfile)
            }).catch((error) => {
                //handle error
                console.log('Whole error response', error)
            });

    }
    render() {
        console.log('Whole success profile', this.state.userProfile)

        const { user, unique_id, nickname, firstName, lastName, description, socialMedia, profileImage, phone_number, date_joined } = this.state.userProfile;
        return (
            <Fragment>

                <section className="author-info-area section-padding-strict section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="atbd_auhor_profile_area">
                                    <div className="atbd_author_avatar">
                                        {/* <img src={`${profileImage.file}`} alt="AuthorImage" width={80}/> */}
                                        <div className="atbd_auth_nd">
                                            <h2>{user  + firstName + ' ' + lastName}</h2>
                                            <p>Ha conectado {`${date_joined}`}</p>
                                        </div>
                                    </div>{/*<!-- ends: .atbd_author_avatar -->*/}
                                    <div className="atbd_author_meta">
                                        {/* <div className="atbd_listing_meta">
                                            <span className="atbd_meta atbd_listing_rating">4.5 <i className="la la-star"></i></span>
                                            <p className="meta-info"><span>22</span>Reviews</p>
                                        </div>
                                        <p className="meta-info"><span>15</span>Listings</p> */}
                                    </div>{/*<!-- ends: .atbd_author_meta -->*/}
                                </div>{/*<!-- ends: .atbd_auhor_profile_area -->*/}
                            </div>

                            {/* <!-- ends: .col-lg-12 --> */}
                            <div className="col-lg-8 col-md-7 m-bottom-30">
                                <div className="atbd_author_module">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-user"></span>Descripcion</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            {description}
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .atbd_author_module -->*/}
                            </div>{/*<!-- ends: .col-md-8 -->*/}
                            <div className="col-lg-4 col-md-5 m-bottom-30">
                                <div className="widget atbd_widget widget-card">
                                    <div className="atbd_widget_title">
                                        <h4><span className="la la-phone"></span>Contacto</h4>
                                    </div>{/*<!-- ends: .atbd_widget_title -->*/}
                                    <div className="widget-body atbd_author_info_widget">
                                        <div className="atbd_widget_contact_info">
                                            <ul>
                                                {/* <li>
                                                    <span className="la la-map-marker"></span>
                                                    <span className="atbd_info">25 East Valley Road, Michigan</span>
                                                </li> */}
                                                {phone_number ? <li>
                                                    <span className="la la-phone"></span>
                                                    <span className="atbd_info">{phone_number}</span>
                                                </li> : <></>}
                                                {socialMedia.websiteUrl != '' ?  <li>
                                                    <span className="la la-envelope"></span>
                                                    <span className="atbd_info">{socialMedia.websiteUrl}</span>
                                                </li>: <></>}
                                               
                                            </ul>
                                        </div>{/*<!-- ends: .atbd_widget_contact_info -->*/}
                                        <div className="atbd_social_wrap">
                                            <p><NavLink to={`/${socialMedia.facebookUrl}`} onClick={noAction}><span className="fab fa-facebook-f"></span></NavLink></p>
                                            <p><NavLink to={`/${socialMedia.twitterUrl}`} onClick={noAction}><span className="fab fa-twitter"></span></NavLink></p>
                                            <p><NavLink to={`/${socialMedia.linkedinUrl}`} onClick={noAction}><span className="fab fa-linkedin-in"></span></NavLink></p>
                                            <p><NavLink to={`/${socialMedia.telegramUrl}`} onClick={noAction}><span className="fab fa-telegram"></span></NavLink></p>
                                        </div>{/*<!-- ends: .atbd_social_wrap -->*/}
                                    </div>{/*<!-- ends: .widget-body -->*/}
                                </div>{/*<!-- ends: .widget -->*/}
                            </div>{/*<!-- ends: .col-lg-4 -->*/}

                            <div className="col-lg-12">
                                <div className="atbd_author_listings_area m-bottom-30">
                                    {/* <h1>Author Listings</h1> */}
                                    {/* <div className="atbd_author_filter_area">
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
                                    </div> */}
                                </div>{/*<!-- ends: .atbd_author_listings_area -->*/}

                                <div className="row">
                                    {/* <CardListingGrid4  /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login: state.login,
        logo: state.logo
    }
}
export default connect(mapStateToProps)(PrinterProfile);