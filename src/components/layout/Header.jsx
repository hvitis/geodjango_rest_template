import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from './Navbar';
import { connect } from 'react-redux';
import * as actions from '../../store/action/auth';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { sideBarIsOpen: false }
    }

    openSidebar() {
        this.setState({ sideBarIsOpen: !this.state.sideBarIsOpen })
    }
    render() {

        return (


            <div className="menu-area menu1">
                <div className="top-menu-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-fullwidth">
                                    <div className="logo-wrapper order-lg-0 order-sm-1">
                                        <div className="logo logo-top">
                                            {/* <NavLink to="/"><img alt="logoImage" className="img-fluid" /></NavLink> */}
                                            <NavLink to="/"><h2>AyudaCerca</h2></NavLink>
                                        </div>
                                    </div>{/*<!-- ends: .logo-wrapper -->*/}
                                    <div className="menu-container order-lg-1 order-sm-0">
                                        <div className="d_menu">
                                            <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                                                <div className="collapse navbar-collapse" id="ToBePrint3D-navbar-collapse">
                                                    <NavItem />
                                                </div>
                                                {/*<!-- /.navbar-collapse -->*/}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="menu-right order-lg-2 order-sm-2">

                                        <div className="author-area">
                                            <div className="author__access_area">
                                                <ul className="d-flex list-unstyled align-items-center">
                                                  <li>
                                                        <NavLink to="/nearby-accounts" className="btn btn-xs btn-gradient btn-gradient-one">
                                                            <span className="la la-plus"></span> Encuentra cerca
                                                                </NavLink>
                                                    </li>
                                                      {/* <li>
                                                        <NavLink to="/add-printer" className="btn btn-xs btn-gradient btn-gradient-two">
                                                            <span className="la la-plus"></span> Añade impresora
                                                                </NavLink>
                                                    </li> */}
                                                    {
                                                        !this.props.isAuthenticated ? (


                                                            <li>
                                                                <NavLink to="/signup/" className="btn btn-xs btn-gradient btn-gradient-three">
                                                                    <span className="la la-user"></span> Registrar
                                                                </NavLink>
                                                                <span>or</span>
                                                                <NavLink to="/login/" className="btn btn-xs btn-gradient btn-gradient-one">
                                                                    <span className="la la-user"></span> Entrar
                                                                </NavLink>
                                                            </li>

                                                        ) : (

                                                                <li>
                                                                    <div className="author-info">
                                                                        <Button variant="secondary">Perfil</Button>
                                                                        <ul className="list-unstyled">
                                                                            {/* <li><NavLink to="/author-profile">My Profile</NavLink></li> */}
                                                                            <li><NavLink to="/dashboard">Mi Perfil</NavLink></li>
                                                                            {/* <li><NavLink to="/at_demo">Favourite Listing</NavLink></li> */}
                                                                            <li><a href=" " onClick={this.props.logout}><span className="la la-bank bg-warning"></span>Logout</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            )
                                                    }
                                                </ul>

                                            </div>
                                        </div>
                                        {/*<!-- emd .author-area -->*/}
                                        <div className="offcanvas-menu d-none">
                                            {/* <Button >X</Button> */}
                                            <button className="btn btn-xs btn-gradient btn-gradient-one" onClick={() => { this.openSidebar() }} >
                                                <FontAwesomeIcon icon={faBars} />
                                            </button>
                                            {/* <div className="offcanvas-menu__contents active"> */}
                                            {this.state.sideBarIsOpen ?
                                                (<div className="offcanvas-menu__contents active">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <NavLink to="/nearby-accounts" className="">
                                                                <span className="la la-plus"></span> Encuentra cerca
                                                                </NavLink>
                                                        </li>
                                                        {/* <li>
                                                            <NavLink to="/add-printer" className="">
                                                                <span className="la la-plus"></span> Añade impresora
                                                                </NavLink>
                                                        </li> */}
                                                        {
                                                            !this.props.isAuthenticated ? (


                                                                <li>
                                                                    <NavLink to="/signup/" className="">
                                                                        <span className="la la-user"></span> Registrar
                                                                </NavLink>
                                                                    <NavLink to="/login/" className="">
                                                                        <span className="la la-user"></span> Entrar
                                                                </NavLink>
                                                                </li>

                                                            ) : (
                                                                    <>
                                                                        <li><NavLink to="/dashboard">Mi Perfil</NavLink></li>
                                                                        <li><a href=" " onClick={this.props.logout}><span className="la la-bank bg-warning"></span>Logout</a></li>
                                                                    </>
                                                                )
                                                        }
                                                        <button className="btn btn-xs btn-gradient btn-gradient-one" onClick={() => { this.openSidebar() }} >X</button>

                                                    </ul>
                                                </div>) :
                                                (<div className="offcanvas-menu__contents">  </div>)
                                            }
                                        </div>
                                    </div>
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
        login: state.login
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));