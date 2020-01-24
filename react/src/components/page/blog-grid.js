import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import {connect} from 'react-redux';
import BlogGrid4 from '../content/element/card/card-blog-grid4';

const BlogGrid = (props) => {
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
                <BreadcrumbWraper title="Blog Grid" />
            </section>
            {/* Header section end */}
            <section className="blog-area blog-grid section-padding-strict section-bg">
                <div className="container">
                    <div className="row">
                        <BlogGrid4 blog={props.blog} />                        
                    </div>
                </div>
            </section>
           <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {

    return {
        blog : state.blog,
        logo: state.logo
    }
}
export default connect(mapStateToProps)(BlogGrid);