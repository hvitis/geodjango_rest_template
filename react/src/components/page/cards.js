import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';

import { connect } from 'react-redux';
import { SectionTitle } from '../content/element/section-title';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
import ListingCardGrid12 from '../content/element/card/card-listion-grid-12';

const Cards = (props) => {
    const light = props.logo[0].light;
    const logdIn = () => {
        return props.login
    }
    return (
        <Fragment>
            {/* Header section start */}
            <section className="header-breadcrumb bgimage overlay overlay--dark">
                <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />                    
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbWraper title="Post Cards" />
            </section>
            {/* Header section end */}

            
            <section className="cards-grid section-padding-two border-bottom">
                <div className="container">
                    <SectionTitle 
                        title="Product Card Grid"
                        content="The style of product cards shown as tiles."
                    />
                    <div className="listing-cards-wrapper col-lg-12">
                        <div className="row">
                            <CardListingGrid4 logdIn={logdIn()} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="cards-grid section-padding-two border-bottom">
                <div className="container">
                    <SectionTitle 
                        title="Product Card List"
                        content="The style of product cards shown as tiles."
                    />
                    <div className="listing-cards-wrapper col-lg-12">
                        <div className="row">
                            <ListingCardGrid12 list={props.list} />
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
export default connect(mapStateToProps)(Cards);