import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/Footer';
import { AdvSearch } from '../content/element/advance-search';
import { SectionTitle } from '../content/element/section-title';
import { NavLink } from 'react-router-dom';
import { ContentBlockHome } from '../content/element/content-block';
import { PlaceList } from '../content/element/place-list';
import { Subscribe } from '../content/element/subscribe';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../Store/action/auth';

const noAction = e => e.preventDefault();
class Index extends Component {
    
    render() {

        return (
            <Fragment>
            

                {/* Header section start */}
                <section className="intro-wrapper bgimage overlay overlay--dark">
                    <div className="bg_image_holder"><img src="./assets/img/intro.jpg" alt="" /></div>
                    <div className="mainmenu-wrapper">
                        <Header  class="menu--light" {...this.props}/>                    
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <AdvSearch />
                </section>
                {/* Header section end */}

    
                {/* Category section start */}            
                <section className="categories-cards section-padding-two">
                    <div className="container">
                        <SectionTitle 
                            title="What Kind of Activity do you Want to try?" 
                            content="Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories."
                        />
                        <div className="row">
                            {/* <CardCategoryGrid4 /> */}
                        </div>
                    </div>
                </section>
                {/* Category section end */}
    
                {/* Listing section start */}
                <section className="listing-cards section-bg section-padding">
                    <div className="container">
                        <SectionTitle 
                            title="Best Listings Around the World" 
                            content="Explore the popular listings around the world"
                        />
                        <div className="row">                        
                            <div className="listing-cards-wrapper col-lg-12">
                                <div className="row">
                                  
                                    <div className="col-lg-12 text-center m-top-20">
                                        <NavLink onClick={noAction} to="/at_demo" className="btn btn-gradient btn-gradient-two">Explore All 200+</NavLink>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </section>
                {/* Listing section end */}
                
                <ContentBlockHome />
    
                {/* Place section start */}
                <section className="places section-padding">
                    <div className="container">
                        <SectionTitle 
                            title="Destination We Love" 
                            content="Explore best listings around the world by city"
                        />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cat-places-wrapper">
                                    {/* <CardCategoryGrid2 /> */}
                                </div>
                            </div>
                            <PlaceList />
                        </div>
                    </div>
                </section>
                {/* Place section end */}
    
                {/* Testimonial section start */}
                <section className="testimonial-wrapper section-padding--bottom">
                    <div className="container">
                        <SectionTitle 
                            title="Trusted By Over 4000+ Users" 
                            content="Here is what people say about Direo"
                        />
                        <div className="row">
                        </div>
                    </div>
                </section>
                {/* Testimonial section end */}
    
                {/* Client section start */}
                <section className="clients-logo-wrapper border-top p-top-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div>
                    </div>
                </section>
                {/* client section end */}
                
                <Subscribe />
               <Footer />
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Index));

