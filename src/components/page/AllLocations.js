import React, {Fragment} from 'react';
import Header from '../layout/Header';
import { Footer } from '../layout/Footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { LocationList } from '../content/element/place-list';
import { connect } from 'react-redux';
const AllLocations = (props) => {
    return (
        <Fragment>
            {/* Header section start */}
            <section className="header-breadcrumb bgimage overlay overlay--dark">
                <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
                <div className="mainmenu-wrapper">
                    <Header class="menu--light" />                    
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbWraper title="All Locations" />
            </section>
            {/* Header section end */}
            <section className="section-padding-strict section-bg">
                <LocationList />                    
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

export default connect(mapStateToProps)(AllLocations);