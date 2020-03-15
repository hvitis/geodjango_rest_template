import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import StripeCheckout from 'react-stripe-checkout';
import Modal from 'react-responsive-modal';
const noAction = e => e.preventDefault();

const style = {
    maxWidth: '400px',
    Width: '100%',
    padding: '15px'
}

export class Transection extends Component {
    state = {
        type : '',
        open: false
    }

    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
            alert(`We are in business, ${data.email}`);
            });
        });
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    

    render() {
        const changeType = e => {
            this.setState({
                type : e.target.value
            })
        }
        const { open } = this.state;

        //Paypal API
        const client = {
            sandbox:    'Ad_9pOoVSbUIysIDjdiJHFmDgO4YDOS45eARlcw3SavXbZzWVgXihbdXB9KsNQcd_V6e2-rvUymN_Xlo',
            production: 'paypal_production_key',
        }
        return (
            <Fragment>
                <form>                
                    <div className="atbd_content_module" id="directorist_payment_gateways">
                        <div className="atbd_content_module__tittle_area">
                            <div className="atbd_area_title">
                                <h4>Choose a payment method</h4>
                            </div>
                        </div>
                        <div className="atbdb_content_module_contents">
                            <ul className="list-unstyled">
                                <li>
                                    <div className="gateway_list">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input onChange={changeType} type="radio" id="bank_transfer" value="bank" name="payment_gateway" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="bank_transfer">Bank Transfer</label>
                                        </div>
                                    </div>
                                    <p className="text-muted">You can make your payment directly to our bank account
                                        using this gateway. Please use your <strong>ORDER ID</strong> as a reference when making
                                        the payment. We will complete your order as soon as your deposit is
                                        cleared in our bank.</p>
                                </li>
                                <li>
                                    <div className="gateway_list">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input onChange={changeType} type="radio" id="paypal_gateway" value="paypal" name="payment_gateway" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="paypal_gateway">Paypal</label>
                                        </div>
                                    </div>
                                    <p className="text-muted">You can make payment using paypal if you choose this
                                        payment gateway.</p>
                                </li>
                                <li>
                                    <div className="gateway_list">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input onChange={changeType} type="radio" id="stripe_gateway" name="payment_gateway" value="stripe" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="stripe_gateway">Stripe</label>
                                        </div>
                                    </div>
                                    <p className="text-muted">You can make payment using your credit card using
                                        stripe if you choose this payment gateway.</p>
                                </li>
                            </ul>
                        </div>
                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                    <div className="text-right">
                        <NavLink to="/pricing-plans" className="btn btn-outline-danger m-right-10">Not Now</NavLink>
                        <NavLink to="/at_demo" onClick={noAction} type="submit" id="atbdp_checkout_submit_btn" style={{position: 'relative'}} className="btn btn-secondary" >Pay Now
                    {
                    this.state.type === 'stripe' ? (
                        <div style={{position: 'absolute', right: 0, visibility: 'hidden', top: 0, opacity: 0}}>
                            <StripeCheckout
                                token={this.onToken}
                                stripeKey="pk_test_1llLXi1jGBLQFKoFgSlBJYiv" //Change this API key
                                amount={ this.props.price * 100 } // cents
                                currency="USD"
                            />
                        </div>
                    ) : this.state.type === 'paypal' ? (
                        
                        <div style={{position: 'absolute', right: 0, top: 0, opacity: 0.01}}>
                            <PaypalExpressBtn
                            client={client}
                            currency={'USD'}
                            style={{height: 50}}
                            total={ this.props.price } />
                        </div>
                    ) : (                       
                        <div onClick={this.onOpenModal} style={{position: 'absolute', right: 0, top: 0, opacity: 0.01}}>
                            <button onClick={this.onOpenModal} >button</button>
                        </div>                       
                    )

                    }
                        </NavLink>
                    </div>
                </form>

                <Modal open={open} onClose={this.onCloseModal} center>
                    <article style={style}>
                        <p>
                            Please make your payment directly to our bank account.
                            Our bank account information is given below.
                        </p>
                        <h4>Account details:</h4>
                        <p>
                            Account Name: e.g. Devid Warnar <br />
                            Account Number:  e.g. 12345678 <br />
                            Bank Name: e.g. Bank of UK
                        </p>
                    </article>
                </Modal>

               
                
            </Fragment>
        )
    }
}

