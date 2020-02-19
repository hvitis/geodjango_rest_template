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
import intro from '../../assets/img/intro.jpg'
const noAction = e => e.preventDefault();
class Home extends Component {

    render() {

        return (
            <Fragment>
                {/* Header section start */}
                <section className="intro-wrapper bgimage overlay overlay--dark">
                    <div className="bg_image_holder"><img src='https://images.unsplash.com/photo-1563520239648-a24e51d4b570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt="" /></div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <AdvSearch />
                </section>
                {/* Header section end */}
                <Subscribe />
               
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Home));

