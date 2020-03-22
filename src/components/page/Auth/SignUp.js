import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import * as actions from '../../../store/action/auth';
import { Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(
          values.email,
          values.password,
          values.email,
        ).then((res)=>{console.log(res)});        
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
    if (this.props.registered) {
      return <Redirect to='/login' />
    }
    if (this.props.isAuthenticated) {
      return <Redirect to='/dashboard' />
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
                    <h4><span className="la la-envelope"></span> Registrar</h4>
                  </div>
                  <div className="atbdp-widget-listing-contact contact-form">
                    <Form onSubmit={this.handleSubmit} id="atbdp-contact-form" className="form-vertical">
                      {/* <div className="form-group">
                        <FormItem>
                          {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                            <Input placeholder="Usuario (una palabra)" className="form-control" id="atbdp-contact-name" />

                          )}
                        </FormItem>
                      </div> */}

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
                            
                            <Input type="password" placeholder="Contraseña" className="form-control" id="atbdp-contact-name" />
                            
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
                            <Input type="password" placeholder="Repite Contraseña" onBlur={this.handleConfirmBlur} className="form-control" id="atbdp-contact-name" />
                          )}
                        </FormItem>
                      </div>
                      <FormItem>
                      {[
                          'info',
                        ].map((variant, idx) => (
                          <Alert key={idx} variant={variant}>
                          Contraseña debe tener al menos 8 caracteres.
                          </Alert>))}
                        <Button className="btn btn-outline-secondary btn-block" type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                          Registrar
                        </Button>
                        O
                      <NavLink
                          style={{ marginRight: '10px' }}
                          to='/login/'> Entrar
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
