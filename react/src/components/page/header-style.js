import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { SectionTitle } from '../content/element/section-title';
import { connect } from 'react-redux';
const HeaderStyle = (props) => {
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
                <BreadcrumbWraper title="Header Style" />
            </section>
            {/* Header section end */}

            <section className="header-style p-top-100">
                <div className="container">
                    <SectionTitle 
                        title="Header Dark"
                        content="The Light Version of Header Navbar"
                    />
                </div>

                <div className="bg-dark">
                    <Header logo="./assets/img/logo-white.png" class="menu--light" />                    
                </div>
            </section>

            <section className="header-style section-padding-strict border-bottom">
                <div className="container">
                    <SectionTitle 
                        title="Header Light"
                        content="The Light Version of Header Navbar"
                    />
                </div>

                <div className="border-top">
                    <Header logo="./assets/img/logo.png" class="menu--dark" />                    
                </div>
            </section>

            
           <Footer />
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {        
        logo: state.logo
    }
}

export default connect(mapStateToProps)(HeaderStyle);