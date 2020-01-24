import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { ContactForm2 } from '../content/element/contact-form';
import { WidgetContactInfo } from '../content/element/widget';
import { connect } from 'react-redux';
const Contact = (props) => {
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
                <BreadcrumbWraper title="Contact Us" />
            </section>
            {/* Header section end */}
            <section className="contact-area section-bg p-top-100 p-bottom-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="widget atbd_widget widget-card contact-block">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-envelope"></span> Contact Form</h4>
                                </div>
                                <div className="atbdp-widget-listing-contact contact-form">
                                    <ContactForm2 />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="widget atbd_widget widget-card">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-phone"></span>Contact Info</h4>
                                </div>
                                <WidgetContactInfo />                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <Footer />
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}

export default connect(mapStateToProps)(Contact);