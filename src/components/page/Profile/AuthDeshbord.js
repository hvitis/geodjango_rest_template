import React, { Fragment, Component } from 'react';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { BreadcrumbWraper } from '../../content/element/breadcrumb';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../../content/element/card/card-listing-grid-4';
// import { LogOut } from '../../Store/action/logoutAction';
import MapLocationPicker from '../../content/element/MapLocationPicker';
import { GetPosition } from '../../content/element/getPosition'
import UpdateProfilePicture from '../../content/element/UpdateProfilePicture'
import config from '../../../config'
import { Spinner, Accordion, Card, Button } from 'react-bootstrap'
import FormData from 'form-data'
import ShowAlert from '../../layout/ShowAlert'

const noAction = e => e.preventDefault();

class AuthDeshbord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgIsLoaded: false,
            mapIsLoaded: false,
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {

        this.setState({
            mapIsLoaded: false,
            showConfidential: false
        });


    }
    componentDidMount() {
        let user_id = localStorage.getItem('user_id')

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
            console.log("Dashboard state did mount", this.state)
        };

        geo.watchPosition(onChange);
        // this.interval = setInterval(() => geo.watchPosition(onChange), 1000);

        fetch(`${config.API_URL}/accounts/${user_id}`)
            .then(response => response.json())
            .then(
                (result) => {
                    console.log('result afetr call update', result)
                    this.setState({
                        imgIsLoaded: true,
                        img: result[0].profileImage.file
                    });
                    console.log('state afetr call update', this.state)
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
        fetch(`${config.API_URL}/accounts/${user_id}/location`)
            .then(response => response.json())
            .then(
                (result) => {
                    if (result[0].latitude === null) {
                        return
                    }
                    this.setState({
                        mapIsLoaded: true,
                        latitude: result[0].latitude,
                        longitude: result[0].longitude
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
        //   clearInterval(this.interval);
    }

    showConfidential() {
        this.setState({ showConfidential: !this.state.showConfidential })
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
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">My Profile</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="all-listings" data-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="false">My Print3rs</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="prints-tab" data-toggle="tab" href="#prints" role="tab" aria-controls="prints" aria-selected="false">My Prints</a>
                                                    </li>
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
                                            {this.state.imgIsLoaded ? (<UpdateProfilePicture profilePicture={this.state.img} />) : (<Spinner />)}
                                            <div className="col-lg-9 col-md-8">
                                                <div className="atbd_author_module">
                                                    <div className="atbd_content_module">
                                                        <div className="atbd_content_module__tittle_area">
                                                            <div className="atbd_area_title">
                                                                <h4><span className="la la-user"></span>My Profile</h4>
                                                            </div>
                                                        </div>
                                                        <Accordion defaultActiveKey="0">
                                                            <Card>
                                                                <Card.Header>
                                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                                        Edit Location
                                                                    </Accordion.Toggle>
                                                                </Card.Header>
                                                                <Accordion.Collapse eventKey="0">
                                                                    <Card.Body>
                                                                        {/* MAP PICKER LOCATION */}
                                                                        <div className="atbdb_content_module_contents">
                                                                            <label className="not_empty form-label">Set the Marker by clicking anywhere on the Map</label>
                                                                            {this.state.mapIsLoaded ? <MapLocationPicker {...this.state} /> : <div className="alert">Loading....</div>}
                                                                        </div>
                                                                        {/* MAP PICKER LOCATION */}
                                                                    </Card.Body>

                                                                </Accordion.Collapse>
                                                            </Card>
                                                            <Card>
                                                                <Card.Header>
                                                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                                        Edit General Information
                                                                    </Accordion.Toggle>
                                                                </Card.Header>
                                                                <Accordion.Collapse eventKey="1">
                                                                    <Card.Body>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="user_name" className="not_empty">Nickname</label>
                                                                                <input className="form-control" id="" type="text" />
                                                                                <p>(Nickname will appear if no Name/Last name)</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="phone" className="not_empty">Cell Number </label>
                                                                                <input className="form-control" type="tel" placeholder="Phone number e.g. +34 666 999 888" id="phone" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="first_name" className="not_empty">First Name</label>
                                                                                <input className="form-control" id="first_name" type="text" placeholder="First Name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="last_name" className="not_empty">Last Name</label>
                                                                                <input className="form-control" id="last_name" type="text" placeholder="Last Name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label htmlFor="bio" className="not_empty">Description</label>
                                                                                <textarea className="wp-editor-area form-control" rows="6" autoComplete="off" id="bio" placeholder="Describe yourself"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <button type="submit" className="btn btn-primary ml-3" id="update_user_profile">Save</button>

                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                            <Card>
                                                                <Card.Header>
                                                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                                                        Edit Social Media
                                                                    </Accordion.Toggle>
                                                                </Card.Header>
                                                                <Accordion.Collapse eventKey="2">
                                                                    <Card.Body>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="website" className="not_empty">Website</label>
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
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="linkedIn" className="not_empty">LinkedIn</label>
                                                                                <input id="linkedIn" className="form-control" type="url" placeholder="Linkedin URL" />

                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="youtube" className="not_empty">Youtube</label>
                                                                                <input id="youtube" className="form-control" type="url" placeholder="Youtube URL" />

                                                                            </div>
                                                                        </div>
                                                                        <button type="submit" className="btn btn-primary ml-3" id="update_user_profile">Save</button>
                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                            <Card>
                                                                <Card.Header>
                                                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                                                        Edit Email and Password
                                                                    </Accordion.Toggle>
                                                                </Card.Header>
                                                                <Accordion.Collapse eventKey="3">
                                                                    <Card.Body>
                                                                        {/* // SHow confidential info */}
                                                                        <div className="col-md-12 cor-wrap form-group">
                                                                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                                <input type="checkbox" className="custom-control-input" name="manual_coordinate" onClick={() => { this.setState({ showConfidential: !this.state.showConfidential }) }} value={this.state.showConfidential} id="manual_coordinate" />
                                                                                <label htmlFor="manual_coordinate" className="not_empty custom-control-label">Show confidential information. </label>
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
                                                                                <button type="submit" className="btn btn-primary ml-3" id="update_user_profile">Save</button>
                                                                            </div>
                                                                        ) : (<hr />)
                                                                        }
                                                                        {/* // SHow confidential info */}
                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                        </Accordion>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section >
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