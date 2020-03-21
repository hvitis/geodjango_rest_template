import React, { Component } from 'react';
import Login from './components/page/Login'
import * as actions from './store/action/auth';
import { connect } from 'react-redux';
import Home from './components/page/Home';
import Header from './components/layout/Header'
import Signup from './components/page/SignUp'
import UserProfile from './components/page/UserProfile.jsx'
import AuthDeshbord from './components/page/AuthDeshbord';
import AddPrinter from './components/page/AddPrinter'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ProtectedRoute } from './protected.route';
import MapListing from './components/page/MapListing';


class App extends Component {
  
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    console.log("Rendering props on MAIN", this.props)

    return (
      <div>
        {/* <Router basename={process.env.PUBLIC_URL} > */}
        <Header {...this.props} />
        <Switch >
          <Route path='/' exact render={(props) => <Home {...this.props} title={`Props through render`} />} />
          <Route path='/login/' exact component={(props) => <Login {...this.props} />} />
          <Route path='/signup/' exact component={(props) => <Signup {...this.props} />} />

          <ProtectedRoute {...this.props} redirect='/login' path='/nearby-accounts' component={(props) => <MapListing {...this.props} {...props} />} />
          <ProtectedRoute {...this.props} redirect='/login' path='/dashboard' component={(props) => <AuthDeshbord {...this.props} {...props} />} />
          <ProtectedRoute {...this.props} redirect='/login' path='/printer-profile/:userUUID' component={(props) => <UserProfile {...this.props} {...props} />} />
          <ProtectedRoute {...this.props} redirect='/login' path='/add-printer' component={(props) => <AddPrinter {...this.props} {...props} />} />
          <Redirect to="/" />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    registered: state.registered
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

