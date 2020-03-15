import React, {Fragment} from 'react';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { ContentBlockAbout } from '../../content/content-block';
import { Counter } from '../../content/counter';
import { SectionTitle } from '../../content/section-title';
import { Subscribe } from '../../content/subscribe';
import {connect} from 'react-redux';
import { BreadcrumbAbout } from '../../content/breadcrumb';
import  Testimonial  from '../../content/carousel/testimonial'

const LandingPage = (props) => {
    return (
        <Fragment>
            {/* Header section start */}
            <section className="about-wrapper bg-gradient-ps">                
                <div className="mainmenu-wrapper">
                    <Header  class="menu--light" />                    
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
                        content="Here is what people say about ToBePrint3D"
                    />                    
                    <div className="row">
                        {/* <Testimonial /> */}
                    </div>
                </div>
            </section>
            {/* Testimonial section end */}

            {/* Client section start */}
            <section className="clients-logo-wrapper border-top p-top-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <ClientLogo /> */}
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
        logo:''
     }
}

export default connect(mapStateToProps)(LandingPage);