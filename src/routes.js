import React from "react";
import {
    BrowserRouter,
    HashRouter,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import Home from './components/page/Home';
import Login from './components/page/Auth/Login';
import Signup from './components/page/Auth/Signup';

const BaseRouter = (props) => (
   
 
        <Switch>
          <Route path = '/' exact component = { Home }/>
          <Route path= '/login/' exact component = { Login } />
          {/* <Route path = '/login/' component = { Login } /> */}
          <Route path = '/signup/' component = { Signup } />
          {/* <Route path = '/all-listings-grid' component = { AllListingGrid } />          
          <Route path = '/all-listings-list' component = { AllListingList } />          
          <Route path = '/listing-details:id' component = { ListingDetails } />          
          <Route path = '/all-categories' component = { Category } />          
          <Route path = '/all-locations' component = { Location } />          
          <Route path = '/pricing-plans' component = { Pricing } />          
          <Route path = '/faqs' component = { Faq } />          
          <Route path = '/about' component = { About } />          
          <Route path = '/contact' component = { Contact } />          
          <Route path = '/cards' component = { Cards } />          
          <Route path = '/headers' component = { HeaderStyle } />
          <Route path = '/blog-right-sidebar' component = { BlogRightSide } />
          <Route path = '/blog-grid' component = { BlogGrid } />
          <Route path = '/blog-details:id' component = { BlogDetails } />
          <Route path = '/author-profile' component = { AuthProfile } />
          <Route path = '/dashboard-listings' component = { Profile } />
          <Route path = '/checkout' component = { CheckoutBasic } />
          <Route path = '/advanced' component = { CheckoutAdvanced } />
          <Route path = '/enterprise' component = { Enterprise } />
          <Route path = '/invoice' component = { Invoice } />
          <Route path = '/add-printer' component = { AddListing } /> */}
          <Redirect to="/" />
        </Switch>

   

);

export default BaseRouter;
