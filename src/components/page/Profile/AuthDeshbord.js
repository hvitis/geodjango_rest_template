import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import config from '../../../config'

import { Spinner, Accordion, Card, Button } from 'react-bootstrap'
import UpdateProfilePicture from '../../content/element/UpdateProfilePicture'
import MapLocationPicker from './MapLocationPicker.jsx';
import UpdateProfileGeneralInformations from './UpdateProfileGeneralInformations.jsx'
import UpdateProfileSocialMedia from './UpdateProfileSocialMedia'
import UpdateProfileEmailPassword from './UpdateProfileEmailPassword'
import { MdKeyboardArrowRight } from 'react-icons/md';
import TabBar from './TabBar'
import MainTabBar from './MainTabBar'

import FormData from 'form-data'
import ShowAlert from '../../layout/ShowAlert'
import { GetPosition } from '../../content/element/getPosition'
// import { LogOut } from '../../Store/action/logoutAction';
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
                            {MainTabBar}
                            <div className="tab-content p-top-100" id="dashboard-tabs-content">
                                {TabBar}
                                {/*<!-- ends: .tab-pane -->*/}
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
                                                                        <MdKeyboardArrowRight />  Edit Location
                                                                    </Accordion.Toggle>
                                                                </Card.Header>
                                                                <Accordion.Collapse eventKey="0">
                                                                    <Card.Body>
                                                                        {this.state.mapIsLoaded ? <MapLocationPicker {...this.state} /> : <div className="alert">Loading....</div>}
                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                            <Card>
                                                                <Card.Header>
                                                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                                        <MdKeyboardArrowRight />  Edit General Information
                                                                    </Accordion.Toggle>
                                                                </Card.Header>
                                                                <Accordion.Collapse eventKey="1">
                                                                    <Card.Body>
                                                                        <UpdateProfileGeneralInformations />
                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                            <Card>
                                                                <Card.Header>
                                                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                                                        <MdKeyboardArrowRight />  Edit Social Media
                                                                    </Accordion.Toggle>
                                                                </Card.Header>
                                                                <Accordion.Collapse eventKey="2">
                                                                    <Card.Body>
                                                                        <UpdateProfileSocialMedia />
                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                            <Card>
                                                                <Card.Header>
                                                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                                                        <MdKeyboardArrowRight />  Edit Email and Password
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
                                                                            <UpdateProfileEmailPassword />
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