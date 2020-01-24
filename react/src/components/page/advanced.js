import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';

import { connect } from 'react-redux';
import { Transection } from '../content/element/transection';
const noAction = e => e.preventDefault();

class CheckoutBasic extends Component {
    state = {
        price : 99
    }
    render () {
        const light = this.props.logo[0].light;
        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="bg_image_holder"><img src="./assets/img/breadcrumb1.jpg" alt="" /></div>
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />                    
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Checkout" />
                </section>
                {/* Header section end */}    
               
                <section className="checkout-wrapper section-padding-strict section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="checkout-form">
                                    <form action="/">
                                        <div className="checkout-table table-responsive">
                                            <table id="directorist-checkout-table" className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th colSpan="2">Details</th>
                                                        <th><strong>Price</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary custom-control-inline">
                                                                <input type="checkbox" className="custom-control-input" id="select_one" value="one" checked
                                                                onChange={noAction}
                                                                />
                                                                <label className="custom-control-label" htmlFor="select_one"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h4>Advanced Plan</h4>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
                                                                labore.</p>
                                                        </td>
                                                        <td>
                                                            {"$"+this.state.price}
                                                        </td>
                                                    </tr>                
                                                    <tr>
                                                        <td colSpan="2" className="text-right vertical-middle">
                                                            <strong>Total amount</strong>
                                                        </td>
                                                        <td className="vertical-middle">
                                                            <div id="atbdp_checkout_total_amount">{"$"+this.state.price}</div>
                                                            {/* <!--total amount will be populated by JS--> */}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>{/*<!-- ends: .checkout-table -->*/}
                                    </form>
                                    <Transection price={this.state.price} />
                                </div>{/*<!-- ends: .checkout-form -->*/}
                            </div>{/*<!-- ends: .col-lg-12 -->*/}
                        </div>
                    </div>
                </section>{/*<!-- ends: .checkout-wrapper -->*/}
                
               <Footer />
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}

export default connect(mapStateToProps)(CheckoutBasic);