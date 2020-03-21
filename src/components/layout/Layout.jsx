import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/action/auth';
import Header from './Header'
import { Footer } from './Footer'


class Layout extends React.Component {
    render() {
        return (
          <div>
                <Header > </ Header>
              

                <Footer> </Footer>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Layout));