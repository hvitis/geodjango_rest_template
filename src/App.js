import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/page/Login'

import * as actions from './Store/action/auth';
import { connect } from 'react-redux';
import Home from './components/page/Home';
// import BaseRouter from './routes';
// import Index from './components/page/Home'
import Header from './components/layout/Header'
import Signup from './components/page/Signup'
import AuthProfile from './components/page/AuthProfile'
import AuthDeshbord from './components/page/AuthDeshbord'

import { Footer } from './components/layout/Footer'
// import Layout from './components/layout/Layout'
import  AddPrinter  from './components/page/AddPrinter'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    console.log("Rendering props on MAIN", this.props)

    return (
      <div>
        {/* TODO: protected Routes */}
      {/* <Router basename={process.env.PUBLIC_URL} > */}
      <Router >
      <Header { ...this.props } />
      <Switch>
          <Route path = '/' exact render={(props) => <Home {...this.props} title={`Props through render`} />} />
          <Route path = '/login/' exact component = { Login } />
          <Route path = '/signup/' exact component = { Signup } />
          <Route path = '/add-printer' render={(props) => <AddPrinter {...this.props} title={`Props through render`} />} />
          <Route path = '/author-profile' component = { AuthProfile } />
          <Route path = '/dashboard-listings' render={(props) => <AuthDeshbord {...this.props} title={`Props through render`} />} />
          <Redirect to="/" />
        </Switch>
      <Footer />
      </Router>  
      </div>
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

