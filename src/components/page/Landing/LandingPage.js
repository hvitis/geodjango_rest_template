import React, {Fragment} from 'react';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { ContentBlockAbout } from '../../content/element/content-block';
import { Counter } from '../../content/element/counter';
import { SectionTitle } from '../../content/element/section-title';
import { Subscribe } from '../../content/element/subscribe';
import {connect} from 'react-redux';
import { BreadcrumbAbout } from '../../content/element/breadcrumb';


const LandingPage = (props) => {
    return (
        <Fragment>
            {/* <BreadcrumbAbout /> */}

            {/* <ContentBlockAbout /> */}
            {/* <Counter /> */}

           

            {/* Client section start 
            <section className="clients-logo-wrapper border-top p-top-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        </div>
                    </div>
                </div>
            </section>
            client section end */}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {        
        logo:''
     }
}

export default connect(mapStateToProps)(LandingPage);