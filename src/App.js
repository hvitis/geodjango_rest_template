import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/page/Auth/Login'
import Signup from './components/page/Auth/Signup'

import * as actions from './Store/action/auth';
import { connect } from 'react-redux';
import Home from './components/page/Home';
// import BaseRouter from './routes';
// import Index from './components/page/Home'
import Header from './components/layout/Header'
import AuthProfile from './components/page/Profile/AuthProfile'
import AuthDeshbord from './components/page/Profile/AuthDeshbord'
import LandingPage from './components/page/Landing/LandingPage'

import { Footer } from './components/layout/Footer'
// import Layout from './components/layout/Layout'
import  AddPrinter  from './components/page/Printer/AddPrinter'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { ProtectedRoute } from './protected.route';
import { BreadcrumbAbout } from './components/content/element/breadcrumb';


class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    console.log("Rendering props on MAIN", this.props)

    return (
      <div>
      {/* <Router basename={process.env.PUBLIC_URL} > */}
      <Router >
      <section className="about-wrapper bg-gradient-ps">                
                <div className="mainmenu-wrapper">
                <Header { ...this.props } class="menu--light"/>
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbAbout />
            </section>
      <Switch>
          {/*   <Route path = '/' exact render={(props) => <Home {...this.props} title={`Props through render`} />} /> */}

          <Route path = '/' exact render={(props) => <LandingPage {...this.props} />} />
          <Route path = '/login/' exact component={(props) => <Login {...this.props} />} />
          <Route path = '/signup/' exact component={(props) => <Signup {...this.props} />} />
          <ProtectedRoute { ...this.props } path ='/add-printer' redirect='/login' component={(props) => <AddPrinter {...this.props} />}  />
          {/* <Route path = '/add-printer' render={(props) => <AddPrinter {...this.props} title={`Props through render`} />} /> */}
          <Route path = '/author-profile' component = { AuthProfile } />
          <Route path = '/dashboard' render={(props) => <AuthDeshbord {...this.props} title={`Props through render`} />} />
          
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

