import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import BaseRouter from './routes';
import * as actions from './Store/action/auth';
import { connect } from 'react-redux';

import Index from './components/page/Home'
import Header from './components/layout/Header'
import Login from './components/page/Login'
import Signup from './components/page/Signup'

import { Footer } from './components/layout/Footer'
import Layout from './components/layout/Layout'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    console.log("Rendering props on MAIN", this.props)

    return (
      <Router basename={process.env.PUBLIC_URL} >
        <div {...this.props}>
        <BaseRouter />
        </div>

       {/* <Layout {...this.props}>
        <BaseRouter />
       </Layout> */}
         {/* <Login /> */}
         {/* <Signup /> */}
        {/* <Footer />  */}
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

