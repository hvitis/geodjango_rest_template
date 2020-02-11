import React, {Fragment, Component} from 'react';
import Header from '../layout/Header';
import { Footer } from '../layout/Footer';
import { AdvSearch } from '../content/element/advance-search';
import { SectionTitle } from '../content/element/section-title';
import { NavLink } from 'react-router-dom';
import { ContentBlockHome } from '../content/element/content-block';
import { PlaceList } from '../content/element/place-list';
import { Subscribe } from '../content/element/subscribe';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../Store/action/auth';

const noAction = e => e.preventDefault();
class Index extends Component {
    
    render() {

        return (
            <Fragment>
            

                {/* Header section start */}
                <section className="intro-wrapper bgimage overlay overlay--dark">
                    <div className="bg_image_holder"><img src="./assets/img/intro.jpg" alt="" /></div>
                    <div className="mainmenu-wrapper">
                        <Header  class="menu--light" {...this.props}/>                    
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <AdvSearch />
                </section>
                {/* Header section end */}

             
                


         
    
                <Subscribe />
                <Footer />
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Index));

