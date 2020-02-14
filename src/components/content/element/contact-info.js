import React, { Component, Fragment } from 'react';
const noAction = e => e.preventDefault();
export class ContactInfo extends Component {

    render() {
        return (
            <Fragment>

                <div className="atbdb_content_module_contents">
                    <div className="atbd_contact_info">
                        <ul>
                            <li>
                                <div className="atbd_info_title"><span className="la la-map-marker"></span>Address:</div>
                                <div className="atbd_info">25 East Valley Road, New York</div>
                            </li>
                            <li>
                                <div className="atbd_info_title"><span className="la la-phone"></span>Phone Number:</div>
                                <div className="atbd_info">(213) 995-7799</div>
                            </li>
                            <li>
                                <div className="atbd_info_title"><span className="la la-envelope"></span>Email:</div>
                                <span className="atbd_info">support@aazztech.com</span>
                            </li>
                            <li>
                                <div className="atbd_info_title"><span className="la la-globe"></span>Website:</div>
                                <a onClick={noAction} href="http://aazztech.com" className="atbd_info">www.aazztech.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="atbd_director_social_wrap">
                        <a onClick={noAction} target="_blank" href="/at_demo"><span className="fab fa-behance"></span></a>
                        <a onClick={noAction} target="_blank" href="/at_demo"><span className="fab fa-facebook-f"></span></a>
                        <a onClick={noAction} target="_blank" href="/at_demo"><span className="fab fa-twitter"></span></a>
                        <a onClick={noAction} target="_blank" href="/at_demo"><span className="fab fa-youtube"></span></a>
                    </div>
                </div>

            </Fragment>
        )
    }
}