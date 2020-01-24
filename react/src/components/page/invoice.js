import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CheckoutBasic extends Component {
    state = {
        price : 45
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
                    <BreadcrumbWraper title="Payment Receipt" />
                </section>
                {/* Header section end */}    
                <section className="payment_receipt section-bg section-padding-strict">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="payment_receipt--wrapper">
                                    <div className="payment_receipt--contents">
                                        <h2 className="atbd_thank_you">Thank you for your order!</h2>
                                        <div className="atbd_payment_instructions">
                                            <p>Please make your payment directly to our bank account
                                                and use your ORDER ID (#499) as a Reference. Our bank account information is given
                                                below.</p>
                                            <h4>Account details:</h4>
                                            <ul className="list-unstyled">
                                                <li>Account Name: <span>Direo Inc.</span></li>
                                                <li>Account Number: <span>000-123-4567890</span></li>
                                                <li>Bank Name: <span>State Bank, Neverland</span></li>
                                            </ul>
                                            <p>Please remember that your order may be canceled if you do not make your payment within next 72 hours.</p>
                                        </div>{/*<!-- ends: .atbd_payment_instructions -->*/}
                                        <div className="row atbd_payment_summary_wrapper">
                                            <div className="col-md-12">
                                                <p className="atbd_payment_summary">Here is your order summery:</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>ORDER #</td>
                                                                <td>499</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total Amount</td>
                                                                <td>$ 45.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Date</td>
                                                                <td>March 9, 2019 12:17 pm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>Payment Method</td>
                                                                <td>Bank Transfer</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment Status</td>
                                                                <td>Created</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Transaction ID</td>
                                                                <td>#ABCD0123</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>{/*<!-- ends: .atbd_payment_summary_wrapper -->*/}
                                        <p className="atbd_payment_summary">Ordered Item(s)</p>
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
                                                        <td colSpan="2">
                                                            <h4>Basic Plan</h4>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
                                                                labore.</p>
                                                        </td>
                                                        <td>
                                                            $45.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" className="text-right">
                                                            <strong>Total amount</strong>
                                                        </td>
                                                        <td className="">
                                                            <div id="atbdp_checkout_total_amount">$45.00</div>
                                                            {/*<!--total amount will be populated by JS-->*/}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>{/*<!-- ends: .checkout-table -->*/}
                                        <div className="text-center m-top-30"><NavLink to="/all-listings" className="btn btn-primary">View your listings</NavLink></div>
                                    </div>{/*<!-- ends: .payment_receipt--contents -->*/}
                                </div>{/*<!-- ends: .payment_receipt--wrapper -->*/}
                            </div>{/*<!-- ends: .col-lg-10 -->*/}
                        </div>
                    </div>
                </section>{/*<!-- ends: .atbd_payment_recipt -->*/}
                
                                
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