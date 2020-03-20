import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
// import intro from '../../assets/img/intro.jpg'
// import config from '../../config'


export class AdvSearch extends Component {

    render() {
        // let img = require('../../assets/img/intro.jpg');
        // console.log("Props on HOME", config.API_URL + intro)
        return (
            <Fragment>
                <div className="directory_content_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="search_title_area">
                                    <h1 className="title">Ayuda Cerca</h1>
                                    <p className="sub_title"></p>
                                </div>{/* ends: .search_title_area */}
                                <div className="search_form">
                                    <div className="atbd_seach_fields_wrapper d-flex justify-content-around">
                                        <NavLink to="/nearby-accounts">
                                            <div class="m-2 card shadow-lg btn-gradient btn-gradient-one">
                                                <div class="card-body ">
                                                    <h3 className="text-white">
                                                        Busca ayuda
                                                </h3>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>

                                        <NavLink to="/nearby-accounts">
                                            <div class="m-2 card shadow-lg btn-gradient btn-gradient-two">
                                                <div class="card-body ">
                                                    <h3 className="text-white">
                                                        Ofrece ayuda
                                                </h3>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>

                                        <NavLink to="/nearby-accounts">
                                            <div class="m-2 card shadow-lg btn-gradient btn-gradient-three">
                                                <div class="card-body ">
                                                    <h3 className="text-white">
                                                        Imprime 3D
                                                </h3>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>

                                        {/* <div className="single_search_field search_query">
                                            <input className="form-control search_fields" type="text" placeholder="What are you located at?" />
                                        </div> */}
                                        {/* <div className="single_search_field search_category">
                                            <select className="search_fields" id="at_biz_dir-category">
                                            <option value>Select a category</option>
                                            <option value="automobile">Automobile</option>
                                            <option value="education">Education</option>
                                            <option value="event">Event</option>
                                            </select>
                                        </div>
                                        <div className="single_search_field search_location">
                                            <select className="search_fields" id="at_biz_dir-location">
                                            <option value>Select a location</option>
                                            <option value="ab">AB Simple</option>
                                            <option value="australia">Australia</option>
                                            <option value="australia-australia">Australia</option>
                                            </select>
                                        </div> */}
                                        {/* <div className="atbd_submit_btn">
                                            <button type="submit" onClick={noAction} className="btn btn-block btn-gradient btn-gradient-one btn-md btn_search">Search</button>
                                        </div> */}
                                    </div>
                                    {/* ends: .search_form */}
                                    {/* <div className="directory_home_category_area">
                                    <ul className="categories">
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-primary"><i className="la la-cutlery" /></span>
                                                Restaurants
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-success"><i className="la la-map-marker" /></span>
                                                Places
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-warning"><i className="la la-shopping-cart" /></span>
                                                Shopping
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-danger"><i className="la la-bed" /></span>
                                                Hotels
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div> */}
                                    {/* ends: .directory_home_category_area */}
                                </div>{/* ends: .col-lg-10 */}
                            </div>
                        </div>
                    </div>
                </div>{/* ends: .directory_search_area */}
            </Fragment>
        )
    }
}

