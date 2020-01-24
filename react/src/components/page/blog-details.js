import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { connect } from "react-redux";
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { Category, PopularPost, RecentPost, PopularTags, StayUpdate, ConnentFollow } from '../content/element/widget';
import DetailsContent from '../container/blog-details';

const BlogDetails = (props) => {
    const id = props.match.params.id;
    const filter = Object.values(props.blog).filter((value) => {
        return value.id === id;
    });
    const light = props.logo[0].light;

    return (
        <Fragment>
            {/* Header section start */}
            <section className="header-breadcrumb bgimage overlay overlay--dark">
                <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />                    
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbWraper title={filter[0].title} />
            </section>
            {/* Header section end */}

            <section className="blog-area section-padding-strict border-bottom">
        
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                             <DetailsContent contents={filter[0]} />                          
                        </div>
                        <div className="col-md-4 mt-5 mt-md-0">
                            <div className="sidebar">
                                {/* <!-- search widget --> */}
                                <div className="widget-wrapper">
                                    <div className="search-widget">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="text" className="fc--rounded" placeholder="Search" />
                                                <button type="submit"><i className="la la-search"></i></button>
                                            </div>
                                        </form>
                                    </div>

                                    <Category />
                                    <PopularPost blog={props.blog} />
                                    <RecentPost blog={props.blog}/>
                                    <PopularTags />
                                    <StayUpdate />
                                    <ConnentFollow />
                                </div>{/*<!-- ends: .widget-wrapper -->*/}
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
           <Footer />
        </Fragment> 
    )
}
const mapStateToProps = (state) => {

    return {
        blog : state.blog,
        logo: state.logo
    }
}
export default connect(mapStateToProps)(BlogDetails);