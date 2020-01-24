import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import CardCategoryGrid4 from '../content/element/card/card-category-grid-4';
import { connect } from 'react-redux';

const AllCategoris = (props) => {
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
                <BreadcrumbWraper title="All Categoris" />
            </section>
            {/* Header section end */}
            <section className="section-padding-1_7 border-bottom">
                <div className="container">
                    <div className="row">
                        <CardCategoryGrid4 /> 
                    </div>
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

export default connect(mapStateToProps)(AllCategoris);