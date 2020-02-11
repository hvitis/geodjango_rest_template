import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import BaseRouter from './routes';
import * as actions from './Store/action/auth';
import { connect } from 'react-redux';

import Index from './components/page/Index'
import Header from './components/layout/Header'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    console.log("Rendering props on INDEX", this.props)

    return (
      <Router basename={process.env.PUBLIC_URL} >
        <Header {...this.props}>
        <BaseRouter />
       </Header>
         {/* <Login />

        <Footer /> */}
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

