import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../navbar/navItem';
import { connect } from 'react-redux';
import { LogOut } from '../../../Store/action/logoutAction';
const noAction = e => e.preventDefault();
class Header extends Component {    
    render() {
                      
        const logdIn = () => {
            return this.props.login
        }
       const logOut = (e) => {
            e.preventDefault();
            this.props.logOutdata(null);
       }
        return (
            <Fragment>
            
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
                                                    logdIn() == null ? (
                                                        <ul className="d-flex list-unstyled align-items-center">
                                                            <li>
                                                                <NavLink to="/add-listing" className="btn btn-xs btn-gradient btn-gradient-two">
                                                                    <span className="la la-plus"></span> Add Listing
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <a href=" " className="access-link" data-toggle="modal" data-target="#login_modal">Login</a>
                                                                <span>or</span>
                                                                <a href=" " className="access-link" data-toggle="modal" data-target="#signup_modal">Register</a>
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
                                                                        <li><NavLink to="/at_demo" onClick={logOut}>Logout</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    )
                                                }

                                                </div>
                                            </div>
                                            
                                            {/*<!-- end .author-area -->*/}
                                            <div className={"offcanvas-menu d-none"}>
                                                <a href=" " className="offcanvas-menu__user"><i className="la la-user"></i></a>
                                                <div className="offcanvas-menu__contents">
                                                    <a href=" " className="offcanvas-menu__close"><i className="la la-times-circle"></i></a>
                                                    <div className="author-avatar">
                                                        <img src="./assets/img/author-avatar.png" alt="" className="rounded-circle" />
                                                    </div>
                                                    <ul className="list-unstyled">
                                                        <li><a href="dashboard-listings.html">My Profile</a></li>
                                                        <li><a href="dashboard-listings.html">My Listing</a></li>
                                                        <li><a href="dashboard-listings.html">Favorite Listing</a></li>
                                                        <li><a href="add-listing.html">Add Listing</a></li>                                                        
                                                        <li><a href=" ">Logout</a></li>
                                                    </ul>
                                                    <div className="search_area">
                                                        <form action="/">
                                                            <div className="input-group input-group-light">
                                                                <input type="text" className="form-control search_field" placeholder="Search here..." autoComplete="off" />
                                                            </div>
                                                            <button type="submit" className="btn btn-sm btn-secondary">Search</button>
                                                        </form>
                                                    </div>{/*<!-- ends: .search_area -->*/}
                                                </div>{/*<!-- ends: .author-info -->*/}
                                            </div>{/*<!-- ends: .offcanvas-menu -->*/}
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
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        login : state.login
    }
}
const mapDispatchToProp = dispatch => {
    return {
        logOutdata : (login) => dispatch(LogOut(login))
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Header)