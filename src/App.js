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

// import AllLocations from './components/page/AllLocations'
// import ListingDetails from './components/page/ListingDetails'
// import AllListingGrid from './components/page/AllListingGrid'
// import AllListingList from './components/page/AllListingList'


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
import { ProtectedRoute } from './protected.route';


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
      <Header { ...this.props } />
      <Switch>
          <Route path = '/' exact render={(props) => <Home {...this.props} title={`Props through render`} />} />
          <Route path = '/login/' exact component={(props) => <Login {...this.props} />} />
          <Route path = '/signup/' exact component={(props) => <Signup {...this.props} />} />
          <ProtectedRoute { ...this.props } path ='/add-printer' redirect='/login' component={(props) => <AddPrinter {...this.props} />}  />
          <Route path = '/dashboard' render={(props) => <AuthDeshbord {...this.props}  />} />
          <Route path = '/author-profile' component = { AuthProfile } />
         
          {/* <Route path = '/all-listings-grid' component = { AllListingGrid } />          
          <Route path = '/all-listings-list' component = { AllListingList } />     

          <Route path = '/listing-details:id' component = { ListingDetails } />   

          <Route path = '/all-locations' component = { AllLocations } />          
         */}
          {/* <Route path = '/about' component = { About } />          
          <Route path = '/contact' component = { Contact } />  

          <Route path = '/cards' component = { Cards } />          

          <Route path = '/advanced' component = { CheckoutAdvanced } />
          <Route path = '/enterprise' component = { Enterprise } />
          <Route path = '/faqs' component = { Faq } />           */}
         
          {/* <Route path = '/blog-right-sidebar' component = { BlogRightSide } />
          <Route path = '/blog-grid' component = { BlogGrid } />
          <Route path = '/blog-details:id' component = { BlogDetails } /> */}
         
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

