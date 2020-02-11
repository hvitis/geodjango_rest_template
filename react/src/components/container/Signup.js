import React, { Fragment } from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { connect } from 'react-redux';
import { Form, Input, Icon, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import * as actions from '../../Store/action/auth';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log("values", values)
      if (!err) {
        this.props.onAuth(
          values.userName,
          values.password,
          values.email,
        );

        this.props.history.push('/login/');
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        {/* Header section start */}
        <section className="header-breadcrumb bgimage overlay overlay--dark">
          <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
          <div className="mainmenu-wrapper">
            <Header class="menu--light" />
          </div>
          {/* <!-- ends: .mainmenu-wrapper --> */}
          <BreadcrumbWraper title="Sign Up" />
        </section>
        {/* Header section end */}
        <section className="contact-area section-bg p-top-100 p-bottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="widget atbd_widget widget-card contact-block">
                  <div className="atbd_widget_title">
                    <h4><span className="la la-envelope"></span> Sign Up Form</h4>
                  </div>
                  <div className="atbdp-widget-listing-contact contact-form">
                    <Form onSubmit={this.handleSubmit} id="atbdp-contact-form" className="form-vertical">
                      <div className="form-group">
                        <FormItem>
                          {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                            <Input placeholder="Username" className="form-control" id="atbdp-contact-name" />

                          )}
                        </FormItem>
                      </div>

                      <div className="form-group">
                        <FormItem>
                          {getFieldDecorator('email', {
                            rules: [{
                              type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                              required: true, message: 'Please input your E-mail!',
                            }],
                          })(
                            <Input placeholder="Email" className="form-control" id="atbdp-contact-name" />
                          )}
                        </FormItem>
                      </div>

                      <div className="form-group">
                        <FormItem>
                          {getFieldDecorator('password', {
                            rules: [{
                              required: true, message: 'Please input your password!',
                            }, {
                              validator: this.validateToNextPassword,
                            }],
                          })(
                            <Input type="password" placeholder="Password" className="form-control" id="atbdp-contact-name" />
                          )}
                        </FormItem>
                      </div>

                      <div className="form-group">
                        <FormItem>
                          {getFieldDecorator('password2', {
                            rules: [{
                              required: true, message: 'Please confirm your password!',
                            }, {
                              validator: this.compareToFirstPassword,
                            }],
                          })(
                            <Input type="password" placeholder="Repeat Password" onBlur={this.handleConfirmBlur} className="form-control" id="atbdp-contact-name" />
                          )}
                        </FormItem>
                      </div>
                      <FormItem>
                        <Button className="btn btn-outline-secondary btn-block" type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                          Sign Up
                        </Button>
                        Or
                      <NavLink
                          style={{ marginRight: '10px' }}
                          to='/login/'> login
                      </NavLink>
                      </FormItem>

                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password) => dispatch(actions.authSignup(username, password, email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
