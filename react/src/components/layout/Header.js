import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from './Navbar';
import { connect } from 'react-redux';
import * as actions from '../../Store/action/auth';
import {  withRouter } from 'react-router-dom';

const noAction = e => e.preventDefault();
class Header extends Component {    
    render() {
        console.log("Rendering props on HEADER", this.props)

        return (
  
            
                <div className={"menu-area menu1 "+this.props.class}>
                    <div className="top-menu-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-fullwidth">
                                        <div className="logo-wrapper order-lg-0 order-sm-1">
                                            <div className="logo logo-top">
                                                <NavLink to="/"><img src={this.props.logo} alt="logoImage" className="img-fluid" /></NavLink>
                                            </div>
                                        </div>{/*<!-- ends: .logo-wrapper -->*/}
                                        <div className="menu-container order-lg-1 order-sm-0">
                                            <div className="d_menu">
                                                <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#direo-navbar-collapse" aria-controls="direo-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                                        <span className="navbar-toggler-icon icon-menu"><i className="la la-reorder"></i></span>
                                                    </button>
                                                    {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                                                    <div className="collapse navbar-collapse" id="direo-navbar-collapse">
                                                        <NavItem />
                                                    </div>
                                                    {/*<!-- /.navbar-collapse -->*/}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="menu-right order-lg-2 order-sm-2">
                                            <div className="search-wrapper">
                                                <div className="nav_right_module search_module">
                                                    <span className="icon-left" id="basic-addon9"><i className="la la-search"></i></span>
                                                    <div className="search_area">
                                                        <form action="/">
                                                            <div className="input-group input-group-light">
                                                                <input type="text" className="form-control search_field top-search-field" placeholder="What are you looking for?" autoComplete="off" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="search-categories">
                                                    <ul className="list-unstyled">
                                                        <li><a href=" " onClick={noAction}><span className="la la-glass bg-danger"></span> Food & Drinks</a></li>
                                                        <li><a href=" " onClick={noAction}><span className="la la-cutlery bg-primary"></span> Restaurants</a></li>
                                                        <li><a href=" " onClick={noAction}><span className="la la-map-marker bg-success"></span> Places</a></li>
                                                        <li><a href=" " onClick={noAction}><span className="la la-shopping-cart bg-secondary"></span> Shopping & Store</a></li>
                                                        <li><a href=" " onClick={noAction}><span className="la la-bed bg-info"></span> Hotels</a></li>
                                                        <li><a href=" " onClick={noAction}><span className="la la-bank bg-warning"></span> Art & History</a></li>
                                                    </ul>
                                                </div>
                                            </div>{/*<!-- ends: .search-wrapper -->*/}
                                            {/*<!-- start .author-area -->*/}
                                            <div className="author-area">
                                                <div className="author__access_area">
                                                {
                                                    !this.props.isAuthenticated ? (
                                                        <ul className="d-flex list-unstyled align-items-center">
                                                            <li>
                                                                <NavLink to="/add-listing" className="btn btn-xs btn-gradient btn-gradient-two">
                                                                    <span className="la la-plus"></span> Add Listing
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/signup/" className="btn btn-xs btn-gradient btn-gradient-three">
                                                                    <span className="la la-user"></span> SignUp
                                                                </NavLink>
                                                                <span>or</span>
                                                                <NavLink to="/login/" className="btn btn-xs btn-gradient btn-gradient-one">
                                                                    <span className="la la-user"></span> Login
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    ) : (
                                                        <ul className="d-flex list-unstyled align-items-center">
                                                            <li>
                                                                <NavLink to="/add-listing" className="btn btn-xs btn-gradient btn-gradient-two">
                                                                    <span className="la la-plus"></span> Add Listing
                                                                </NavLink>
                                                            </li>
                                                            <li>					
                                                                <div className="author-info">
                                                                    <a href=" " className="author-avatar"><img src="./assets/img/author-avatar.png" alt="" className="rounded-circle" /></a>
                                                                    <ul className="list-unstyled">
                                                                        <li><NavLink to="/author-profile">My Profile</NavLink></li>
                                                                        <li><NavLink to="/dashboard-listings">Deshboard</NavLink></li>
                                                                        <li><NavLink to="/at_demo">Favorite Listing</NavLink></li>
                                                                        <li><a href=" " onClick={this.props.logout}><span className="la la-bank bg-warning"></span>Logout</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    )
                                                }

                                                </div>
                                            </div>
                                            
                                            
                                        </div>{/*<!-- ends: .menu-right -->*/}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end /.row --> */}
                        </div>
                        {/* <!-- end /.container --> */}
                    </div>
                    {/* <!-- end  --> */}
                </div>
          
        )
    }
}
const mapStateToProps = state => {
    return {
        login : state.login
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}
export default withRouter(connect(null, mapDispatchToProps)(Header));