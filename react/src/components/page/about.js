import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbAbout } from '../content/element/breadcrumb';
import { ContentBlockAbout } from '../content/element/content-block';
import { Counter } from '../content/element/counter';
import Testimonial from '../content/element/carousel/testimonial';
import { SectionTitle } from '../content/element/section-title';
import ClientLogo from '../content/element/carousel/client-logo';
import { Subscribe } from '../content/element/subscribe';
import {connect} from 'react-redux';

const About = (props) => {
    const light = props.logo[0].light;
    return (
        <Fragment>
            {/* Header section start */}
            <section className="about-wrapper bg-gradient-ps">                
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />                    
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbAbout />
            </section>
            {/* Header section end */}
            <ContentBlockAbout />
            <Counter />

            {/* Testimonial section start */}
            <section className="testimonial-wrapper section-padding-strict">
                <div className="container">
                    <SectionTitle 
                        title="Trusted By Over 4000+ Users" 
                        content="Here is what people say about Direo"
                    />                    
                    <div className="row">
                        <Testimonial />
                    </div>
                </div>
            </section>
            {/* Testimonial section end */}

            {/* Client section start */}
            <section className="clients-logo-wrapper border-top p-top-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ClientLogo />
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

const mapStateToProps = state => {
    return {        
        logo: state.logo
    }
}

export default connect(mapStateToProps)(About);