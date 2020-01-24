import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SignUp } from '../../../../Store/action/userActions';
import SimpleReactValidator from 'simple-react-validator';
import $ from 'jquery';

const noAction = e => e.preventDefault();
class Register extends Component {
    constructor (props) {
        super (props)
        this.state = {
            username: 'woadud akand',
            email: '',
            password: ''
        }
        this.validator = new SimpleReactValidator();
        this.setStateFromInput = this.setStateFromInput.bind(this);
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    render() {
        var data = this.props.users
        const addUser = (e) => {
            e.preventDefault();
            if (this.validator.allValid()) {
                const filter = data.filter(item => {
                    return item.email === this.state.email
                });

                if(filter.length){
                   alert("Email already exists");
                } else {
                    data.push(this.state)
                    this.props.userAdd([...data]).then(() => {
                        alert('You submitted the form and stuff!');
                        $("#signup_modal").click();
                    })
                    var success = true;
                    return success;
                }

            } else {
                this.validator.showMessages();
                this.forceUpdate();
                var success2 = false;
                return success2;
            }
        }

        return (
            <Fragment>
                <div className="modal fade" id="signup_modal" tabIndex={-1} role="dialog" aria-labelledby="signup_modal_label" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="signup_modal_label"><i className="la la-lock" /> Sign Up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/" id="signup-form">
                                    <input type="email" name="email" value={this.state.email} onChange={this.setStateFromInput} className="form-control" placeholder="Email" required />
                                    <div className="text-danger">{this.validator.message('Email', this.state.email, 'required|email')}</div>

                                    <input type="password" name="password" value={this.state.password} onChange={this.setStateFromInput} className="form-control" placeholder="Password" required />
                                    <div className="text-danger">{this.validator.message('Password', this.state.password, 'required|string')}</div>

                                    <button type="submit" onClick={addUser} className="btn btn-block btn-lg btn-gradient btn-gradient-two">Sign Up</button>
                                </form>
                                <div className="form-excerpts">
                                    <ul className="list-unstyled">
                                        <li>Already a member? <NavLink to="/at_demo" data-toggle="modal" data-target="#login_modal">Sign In</NavLink></li>
                                        <li><NavLink onClick={noAction} to="/at_fb_demo" onClick={noAction}>Recover Password</NavLink></li>
                                    </ul>
                                    <div className="social-login">
                                        <span>Or Signup with</span>
                                        <p><NavLink to="/at_fb_demo" onClick={noAction} className="btn btn-outline-secondary"><i className="fab fa-facebook-f" /> Facebook</NavLink><NavLink onClick={noAction} to="/at_demo" className="btn btn-outline-danger"><i className="fab fa-google-plus-g" /> Google</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}
const mapDispatchToProp = dispatch => {
    return {
        userAdd : (user) => dispatch(SignUp(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Register);