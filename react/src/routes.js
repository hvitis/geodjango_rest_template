import React from "react";
import { Route } from "react-router-dom";
import Index from './components/page/Index';
import AllListingGrid from './components/page/all-listing-grid';
import AllListingList from './components/page/all-listing-list';
import ListingDetails from './components/page/listing-details';
import Category from './components/page/all-categoris';
import Location from './components/page/all-location';
import Pricing from './components/page/pricing-plan';
import Faq from './components/page/faq';
import About from './components/page/about';
import Contact from './components/page/contact';
import Cards from './components/page/cards';
import HeaderStyle from './components/page/header-style';
import BlogRightSide from './components/page/blog-right-side';
import BlogGrid from './components/page/blog-grid';
import BlogDetails from './components/page/blog-details';
import AuthProfile from './components/page/auth-profile';
import AuthDeshbord from './components/page/auth-deshbord';
import CheckoutBasic from './components/page/checkout-basic';
import CheckoutAdvanced from './components/page/advanced';
import Enterprise from './components/page/enterprise';
import Invoice from './components/page/invoice';
import AddListing from './components/page/add-listing';
import Login from './components/page/Login';
import Signup from './components/page/Signup';


const BaseRouter = () => (

    <div>
          <Route exact path = '/' component = { Index } />          
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
          <Route path = '/dashboard-listings' component = { AuthDeshbord } />
          <Route path = '/checkout' component = { CheckoutBasic } />
          <Route path = '/advanced' component = { CheckoutAdvanced } />
          <Route path = '/enterprise' component = { Enterprise } />
          <Route path = '/invoice' component = { Invoice } />
          <Route path = '/add-listing' component = { AddListing } /> */}
          <Route path = '/login/' component = { Login } />
          <Route path = '/signup/' component = { Signup } />
    </div>
   

);

export default BaseRouter;
