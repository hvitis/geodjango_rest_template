import React, { Component, Fragment } from 'react';
import axios from 'axios'
import config from '../../../config'

const noAction = e => e.preventDefault();
export class Subscribe extends Component {
constructor(props){
    super(props);
    this.state = {value: '', sentOrder: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}


handleChange(event) {
    this.setState({value: event.target.value});
  }

handleSubmit(event) {
    // this.setState({sentOrder: true});
    // alert('Gracias! Enviaremos tu pedido a : ' + this.state.value);

    // TODO: Unblock after setting up PROD. Waiting for DEPLOY:
    axios.post('http://tobeprinted.es/api/orders', {
        email: this.state.value,
        order: JSON.stringify(this.props.order)
    })
    .then(res => {
        this.setState({sentOrder: true});
        alert('Gracias! Enviaremos tu pedido a : ' + this.state.value);
    })
    .catch(err => {
        console.log(err)
        alert('Error : ' + err.response.data['email']);
    })
    event.preventDefault();
  }

    render(props) {
        return (
            <Fragment>
                <section className="subscribe-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                               
                                { this.state.sentOrder ? ( 
                                 <div
                                 class="checkout-text"
                             >
                                 Pedido Finalizado
                             </div>) : (
                                 <div>
                                  <h1 style={this.props.style}>Introduce tu correo</h1>
                                  <p style={this.props.style}>Te enviaremos el pedido y su estado a tu correo.</p>
                                  <form onSubmit={this.handleSubmit} className="subscribe-form m-top-40">
                                  <div className="form-group">
                                      <span className="la la-envelope-o"></span>
                                      <input type="text" placeholder="Enter your email" required value={this.state.value} onChange={this.handleChange} />
                                  </div>
                                  <button className="btn btn-gradient btn-gradient-one">Pide</button>
                              </form>
                              </div>
                             ) }

                               
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

