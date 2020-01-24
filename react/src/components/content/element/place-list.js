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
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Dubai (45)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Melbourne (95)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Sydney (90)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Brisbane (73)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Perth (97)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Toronto (960)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Vancouver (46)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Montreal (46)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Calgary (16)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Edmonton (6)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Ottawa (53)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Atlantic Canada (83)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Berlin (71)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Munich (46)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Hamburg Area (727)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Frankfurt Area (655)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Stuttgart Area (9)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Barcelona (46)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Madrid (790)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Spain (52)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Dublin (657)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Galway (12)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Limerick (6)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Tokyo, JP (24)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Kanagawa (276)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Osaka (146)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Kyoto (70)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Nagoya (64)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Mexico City (195)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Cancun (328)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Monterrey (27)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Baja California Sur (42)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Amsterdam (446)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Maastricht (3)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >London (25)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Yorkshire (967)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Edinburgh (923)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Kent (80)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Manchester (60)</NavLink></li>
                            <li><NavLink onClick={noAction} to="/at_demo" onClick={noAction} >Glasgow (52)</NavLink></li>
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
