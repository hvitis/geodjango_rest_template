import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class PlaceList extends Component {

    render() {
        return (
            <Fragment>
                <div className="col-lg-12">
                    <div className="place-list-wrapper">
                        <ul className="list-unstyled">
                            <li><NavLink to="/at_demo" onClick={noAction} >Dubai (45)</NavLink></li>
                           
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class LocationList extends Component {

    render() {
        return (
            <Fragment>
               <div className="atbd_location_grid_wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">London (1)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">UK (2)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Portsmouth (1)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Los Angels (0)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">CA (0)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">USA (1)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Sydney (17)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Durban (11)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Perth (13)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Newyork (21)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Bangkok (17)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Australia (15)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Calgary (45)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Mosco (35)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Paris (23)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Canada (47)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Washington (78)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Neverland (46)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Scotland (53)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NavLink to="/at_demo" onClick={noAction} className="atbd_location_grid">Newzealand (39)</NavLink>
                            </div>{/*<!-- ends: .col-lg-3 -->*/}
                        </div>
                    </div>{/*<!-- ends: .atbd_location_grid_wrap -->*/}
                </div>
                   
            </Fragment>
        )
    }
}
