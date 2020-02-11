import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../Store/action/auth';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
        this.props.history.push('/');
      }
    });
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

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
          <BreadcrumbWraper title="Login" />
        </section>
        {/* Header section end */}
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
        <Footer />
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