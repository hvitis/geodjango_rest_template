import React, {Fragment} from 'react';
import Header from '../layout/Header';
import { Footer } from '../layout/Footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import ListingList from '../container/all-listing-list';
import { connect } from 'react-redux';

const AllListingList = (props) => {
    return (
        <Fragment>
            {/* Header section start */}
            <section className="header-breadcrumb bgimage overlay overlay--dark">
                <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
                <div className="mainmenu-wrapper">
                    <Header  class="menu--light" />                    
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbWraper title="All Listing" />
            </section>
            {/* Header section end */}
            <ListingList />           
           <Footer />
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {        
        logo: state.logo
    }
}

export default connect(mapStateToProps)(AllListingList);