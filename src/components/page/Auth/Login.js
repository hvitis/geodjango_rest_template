import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../../Store/action/auth';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { BreadcrumbWraper } from '../../content/breadcrumb';
import { Form, Input, Icon, Button } from 'antd';
import { Redirect } from 'react-router-dom'
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
        if (this.props.isAuthenticated) {
          // return <Redirect to='/dashboard' />
        }
      }
    });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/dashboard' />
    }
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      );
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <section className="contact-area section-bg p-top-100 p-bottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="widget atbd_widget widget-card contact-block">
                  <div className="atbd_widget_title">
                    <h4><span className="la la-envelope"></span> Login Form</h4>
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


                      <FormItem>
                        <Button className="btn btn-outline-secondary btn-block" type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                          Log In
                        </Button>
                        Or
                      <NavLink
                          style={{ marginRight: '10px' }}
                          to='/signup/'> Sign Up
                      </NavLink>
                      </FormItem>

                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);