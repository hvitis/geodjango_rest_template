import React, { Fragment, Component } from 'react';
import Header from '../layout/Header';
import { Footer } from '../layout/Footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
// import { LogOut } from '../../Store/action/logoutAction';
import MapLocationPicker from '../content/element/MapLocationPicker';
import { GetPosition } from '../content/element/getPosition'
import UpdateProfilePicture from '../content/element/UpdateProfilePicture'
import config from '../../config'
import { Spinner } from 'react-bootstrap'
import FormData from 'form-data'
import axios from 'axios'
const noAction = e => e.preventDefault();

class AuthDeshbord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsLoaded: false,
            mapIsLoaded: false,
            needs: true,
            offers: false,
            prints: false,
            profileSaved: false,
        };
    }

    componentWillMount() {
        this.setState({
            mapIsLoaded: false,
            showConfidential: false
        });
    }

    componentDidMount() {
        let user_uuid = localStorage.getItem('user_uuid')

        const geo = navigator.geolocation;
        if (!geo) {
            console.log('Geolocation is not supported');
            return;
        }
        const onChange = ({ coords }) => {
            this.setState({
                latitude: coords.latitude,
                longitude: coords.longitude,
                mapIsLoaded: true,
            });
        };

        geo.watchPosition(onChange);
        // this.interval = setInterval(() => geo.watchPosition(onChange), 1000);

        fetch(`${config.API_URL}/accounts/${user_uuid}`)
            .then(response => response.json())
            .then(
                (result) => {
                    console.log('img', result)
                    this.setState({
                        imgIsLoaded: true,
                        img: result[0].profileImage.file
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        imgIsLoaded: true,
                        error
                    });
                }
            );
        fetch(`${config.API_URL}/accounts/${user_uuid}/location`)
            .then(response => response.json())
            .then(
                (result) => {
                    if (result.features[0].geometry === null) {
                        return
                    }
                    let lat = result.features[0].geometry.coordinates[1]
                    let lng = result.features[0].geometry.coordinates[0]
                    this.setState({
                        mapIsLoaded: true,
                        latitude: lat,
                        longitude: lng,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        mapIsLoaded: true,
                        error
                    });
                }
            );
    }

    componentWillUnmount() {
    }

    showConfidential() {
        this.setState({ showConfidential: !this.state.showConfidential })
    }

    getHelpType() {
        if (this.state.needs) {
            return 'NEEDS'
        }
        if (this.state.offers) {
            return 'OFFERS'
        }
        if (this.state.prints) {
            return 'PRINTS'
        }
    }

    updateProfile() {
        let user_uuid = localStorage.getItem('user_uuid')
        let dataToSend = {
            "firstName": this.state.name,
            "lastName": this.state.surname,
            "description": this.state.description,
            "phone_number": this.state.telephone,
            "help_type": this.getHelpType()
        }
        console.log('data to send', dataToSend)
        axios.put(`${config.API_URL}/accounts/${user_uuid}/basic-info`, dataToSend, {
            headers: {
                'accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `application/json`,
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.status == 200) {
                    //TODO: Alert when success saving Location
                    this.setState({ profileSaved: true })
                    // this.nextPath('nearby-accounts')
                }
            }).catch((error) => {
                console.log('Whole error response', error)
            });
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.isAuthenticated ? (
                        <section className="dashboard-wrapper section-bg p-bottom-70">
                            <div className="dashboard-nav">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="dashboard-nav-area">
                                                <ul className="nav" id="dashboard-tabs" role="tablist">
                                                    {/* <li className="nav-item">
                                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">My Profile</a>
                                                    </li> */}
                                                    {/* <li className="nav-item">
                                                        <a className="nav-link" id="all-listings" data-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="false">My Print3rs</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="prints-tab" data-toggle="tab" href="#prints" role="tab" aria-controls="prints" aria-selected="false">My Prints</a>
                                                    </li> */}
                                                </ul>

                                            </div>
                                        </div>{/*<!-- ends: .col-lg-12 -->*/}
                                    </div>
                                </div>
                            </div>{/*<!-- ends: .dashboard-nav -->*/}
                            <div className="tab-content p-top-100" id="dashboard-tabs-content">
                                <div className="tab-pane fade" id="prints" role="tabpanel" aria-labelledby="prints-tab">
                                    <div className="container">
                                        <div className="row">
                                            <div className="alert alert-success" role="alert">
                                                Prints
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                <div className="tab-pane fade" id="listings" role="tabpanel" aria-labelledby="all-listings">
                                    <div className="container">
                                        <div className="row">
                                            <div className="alert alert-success" role="alert">
                                                all-listings
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                <div className="tab-pane fade p-bottom-30 show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="container">
                                        <div className="row">

                                            {/* // Update profile  */}
                                            {/* {this.state.imgIsLoaded ? (<UpdateProfilePicture profilePicture={this.state.img    } />) : (<Spinner />)} */}
                                            <div className="col-lg-9 col-md-8">
                                                <div className="atbd_author_module">
                                                    <div className="atbd_content_module">
                                                        <div className="atbd_content_module__tittle_area">
                                                            <div className="atbd_area_title">
                                                                <h4><span className="la la-user"></span>Mi Perfil</h4>
                                                            </div>
                                                        </div>
                                                        {/* MAP PICKER LOCATION */}
                                                        <div className="atbdb_content_module_contents">
                                                            <label className="not_empty form-label">Establezca el marcador haciendo clic en cualquier lugar del mapa</label>
                                                            {this.state.mapIsLoaded ? <MapLocationPicker {...this.state} {...this.props} /> : <div className="alert">Cargando....</div>}
                                                            <div className="cor-form">
                                                                <div id="hide_if_no_manual_cor" className="clearfix row m-bottom-30">

                                                                </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                                            </div>{/*<!-- ends: .atbd_content_module -->*/}
                                                            <div className="user_info_wrap">
                                                                {/*<!--Full name-->*/}
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="phone" className="not_empty">Tus preferencias:</label>
                                                                            <div className="col-md-12 cor-wrap form-group">
                                                                                <div className="">
                                                                                    <input type="radio" className="m-2" name="manual_coordinate" onChange={() => { this.setState({ needs: true, offers: false, prints: false }) }} value={this.state.needs} id="manual_coordinate" />
                                                                                    <label htmlFor="manual_coordinate" className=""> Busco ayuda. </label>
                                                                                </div>
                                                                                <div className="">
                                                                                    <input type="radio" className="m-2" name="manual_coordinate" onChange={() => { this.setState({ needs: false, offers: true, prints: false }) }} value={this.state.offers} id="manual_coordinate" />
                                                                                    <label htmlFor="manual_coordinate" className=""> Ofrezco ayuda. </label>
                                                                                </div>
                                                                                <div className="">
                                                                                    <input type="radio" className="m-2" name="manual_coordinate" onChange={() => { this.setState({ needs: false, offers: false, prints: true }) }} value={this.state.prints} id="manual_coordinate" />
                                                                                    <label htmlFor="manual_coordinate" className=""> Imprimo 3D. </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>



                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="phone" className="not_empty">Telefono</label>
                                                                            <input className="form-control" type="tel" placeholder="p.ej. +34 666 999 888" onChange={() => { this.setState({ telephone: this.state.telephone }) }} value={this.state.telephone} id="phone" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="first_name" className="not_empty">Nombre</label>
                                                                            <input className="form-control" id="first_name" type="text" placeholder="Nombre" onChange={() => { this.setState({ name: this.state.name }) }} value={this.state.name} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="last_name" className="not_empty">Apellido</label>
                                                                            <input className="form-control" id="last_name" type="text" placeholder="Apellido" onChange={() => { this.setState({ surname: this.state.surname }) }} value={this.state.surname} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="bio" className="not_empty">Description</label>
                                                                            <textarea className="wp-editor-area form-control" rows="6" autoComplete="off" id="bio" placeholder="Como puedes ayudar etc" onChange={() => { this.setState({ description: this.state.description }) }} value={this.state.description}></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    {/* <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="website" className="not_empty">Pagina Web</label>
                                                                            <input className="form-control" id="website" type="text" placeholder="Website" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="facebook" className="not_empty">Facebook</label>
                                                                            <input id="facebook" className="form-control" type="url" placeholder="Facebook URL" />

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="twitter" className="not_empty">Twitter</label>
                                                                            <input id="twitter" className="form-control" type="url" placeholder="Twitter URL" />

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="google" className="not_empty">Telegram</label>
                                                                            <input id="google" className="form-control" type="url" placeholder="Telegram URL" />

                                                                        </div>
                                                                    </div> */}


                                                                    {!this.state.profileSaved ? <button className="btn btn-primary mt-4" id="generate_admin_map" onClick={() => this.updateProfile()}>Guarda Perfil</button> : <button className="btn btn-primary mt-4" id="generate_admin_map" disabled={true} >Perfil Guardado</button>}

                                                                    <div className="row"></div>
                                                                    {/* // SHow confidential info */}
                                                                    {/* <div className="col-md-12 cor-wrap form-group">
                                                                        <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                            <input type="checkbox" className="custom-control-input" name="manual_coordinate" onClick={() => { this.setState({ showConfidential: !this.state.showConfidential }) }} value={this.state.showConfidential} id="manual_coordinate" />
                                                                            <label htmlFor="manual_coordinate" className="not_empty custom-control-label">Enseña mi cuenta. </label>
                                                                        </div>
                                                                    </div>

                                                                    {this.state.showConfidential ? (
                                                                        <div className="row p-3">

                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="req_email" className="not_empty">Email</label>
                                                                                    <input className="form-control" id="user_name" type="text" readOnly disabled="disabled" value="mail@example.com" />
                                                                                    <p>(Email can not be changed)</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="user_name" className="not_empty">Username</label>
                                                                                    <input className="form-control" id="user_name" type="text" readOnly disabled="disabled" value="admin" />
                                                                                    <p>(Username can not be changed)</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="new_pass" className="not_empty">New Password</label>
                                                                                    <input id="new_pass" className="form-control" type="password" placeholder="Password" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="confirm_pass" className="not_empty">Confirm New Password</label>
                                                                                    <input id="confirm_pass" className="form-control" type="password" placeholder="Re-enter Password" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" className="btn btn-primary ml-3" id="update_user_profile">Guarda Contraceña</button>
                                                                            <div className="row"></div>
                                                                        </div>

                                                                    ) : (<hr />) 
                                                                    }*/}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{/*<!-- ends: .atbd_author_module -->*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}

                            </div>
                        </section>
                    ) : (
                            <section className="dashboard-wrapper section-bg p-bottom-70 p-top-70">
                                <div className="container">
                                    <div className="alert alert-danger" role="alert">
                                        Please login First!
                                </div>
                                </div>
                            </section>
                        )
                }
            </Fragment>
        )
    }
}


export default connect(null, null)(AuthDeshbord);