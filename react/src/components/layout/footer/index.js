import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import LogIn from '../../content/element/modal/signIn';
import Register from '../../content/element/modal/signUp';
const noAction = e => e.preventDefault();

export class Footer extends Component {

    render() {
        return (
            <Fragment>
                <div className="modal fade show" id="modal-item-remove" tabIndex="-1" role="dialog" style={{display: 'none', paddingRight: '17px'}} aria-modal="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center p-top-40 p-bottom-50">
                                <span className="la la-exclamation-circle color-warning"></span>
                                <h1 className="display-3 m-bottom-10">Are you sure?</h1>
                                <p className="m-bottom-30">Do you really want to delete this item?</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary m-right-15" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-danger">Yes, Delete it!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-three footer-grey p-top-95">
                    <div className="footer-top p-bottom-25">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-6">
                                    <div className="widget widget_pages">
                                        <h2 className="widget-title">Company Info</h2>
                                        <ul className="list-unstyled">
                                            <li className="page-item"><NavLink to="/about">About Us</NavLink></li>
                                            <li className="page-item"><NavLink to="/contact">Conact Us</NavLink></li>
                                            <li className="page-item"><NavLink to="/all-listings-grid">Our Listings</NavLink></li>
                                            <li className="page-item"><NavLink to="/pricing-plans">Our Pricings</NavLink></li>
                                            <li className="page-item"><NavLink onClick={noAction} to="/support">Support</NavLink></li>
                                            <li className="page-item"><NavLink onClick={noAction} to="/policy">Privacy Policy</NavLink></li>
                                        </ul>
                                    </div>
                                </div>{/* ends: .col-lg-3 */}
                                <div className="col-lg-3 d-flex justify-content-lg-center  col-sm-6">
                                    <div className="widget widget_pages">
                                        <h2 className="widget-title">Helpful Links</h2>
                                        <ul className="list-unstyled">
                                            <li className="page-item"><NavLink to="/about" onClick={noAction}>Join Direo</NavLink></li>
                                            <li className="page-item"><NavLink to="/about" onClick={noAction}>Sign In</NavLink></li>
                                            <li className="page-item"><NavLink to="/about" onClick={noAction}>How it Work</NavLink></li>
                                            <li className="page-item"><NavLink to="/about" onClick={noAction}>Advantages</NavLink></li>
                                            <li className="page-item"><NavLink to="/about" onClick={noAction}>Direo App</NavLink></li>
                                            <li className="page-item"><NavLink to="/about" onClick={noAction}>Packages</NavLink></li>
                                        </ul>
                                    </div>
                                </div>{/* ends: .col-lg-3 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget widget_social">
                                        <h2 className="widget-title">Connect with Us</h2>
                                        <ul className="list-unstyled social-list">
                                            <li><NavLink onClick={noAction} to="/mail"><span className="mail"><i className="la la-envelope" /></span> Contact Support</NavLink></li>
                                            <li><NavLink onClick={noAction} to="/twitter"><span className="twitter"><i className="fab fa-twitter" /></span> Twitter</NavLink></li>
                                            <li><NavLink onClick={noAction} to="/facebook"><span className="facebook"><i className="fab fa-facebook-f" /></span> Facebook</NavLink></li>
                                            <li><NavLink onClick={noAction} to="/instagram"><span className="instagram"><i className="fab fa-instagram" /></span> Instagram</NavLink></li>
                                            <li><NavLink onClick={noAction} to="/gplus"><span className="gplus"><i className="fab fa-google-plus-g" /></span> Google+</NavLink></li>
                                        </ul>
                                    </div>{/* ends: .widget */}
                                </div>{/* ends: .col-lg-3 */}
                                <div className="col-lg-4 col-sm-6">
                                    <div className="widget widget_text">
                                        <h2 className="widget-title">Direo on Mobile</h2>
                                        <div className="textwidget">
                                            <p>Download the Direo app today so you can find your events anytime, anywhere.</p>
                                            <ul className="list-unstyled store-btns">
                                            <li><NavLink onClick={noAction} to="/app-store" className="btn-gradient btn-gradient-two btn btn-md btn-icon icon-left"><span className="fab fa-apple" /> App Store</NavLink></li>
                                            <li><NavLink onClick={noAction} to="/google-play" className="btn btn-dark btn-md btn-icon btn-icon"><span className="fab fa-android" /> Google Play</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>{/* ends: .widget */}
                                </div>{/* ends: .col-lg-3 */}
                            </div>
                        </div>
                    </div>{/* ends: .footer-top */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="footer-bottom--content">
                                        <NavLink to="/" className="footer-logo"><img src="./assets/img/logo.png" alt="" /></NavLink>
                                        <p className="m-0 copy-text">©2019 Direo. Made with <span className="la la-heart-o" /> by <NavLink onClick={noAction} to="www.aazztech.com">Aazztech</NavLink></p>
                                        <ul className="list-unstyled lng-list">
                                            <li><NavLink onClick={noAction} to="/english">English</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* ends: .footer-bottom */}
                </footer>{/* ends: .footer */}
                <Register />
                <LogIn />
            </Fragment>
        )
    }
}

