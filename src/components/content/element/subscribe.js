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
    axios.post('https://tobeprinted.es/api/orders', {
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
        const titleStyle = {
            color: 'ghostwhite',
            fontSize: '30px',
            fontWeight: 'bold',
            textShadow: '#060103 1px 2px',
        };
        const subTitleStyle = {
            color: 'ghostwhite',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '#060103 1px 2px',
        };
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
                                  <h1 style={titleStyle}>Introduce tu correo</h1>
                                  <p style={subTitleStyle}>Recibirás detalles de tu pedido y tu contacto de la impresora 3D más cercana.</p>
                                  <form onSubmit={this.handleSubmit} className="subscribe-form m-top-40">
                                  <div className="form-group">
                                      <span className="la la-envelope-o"></span>
                                      <input type="text" placeholder="Enter your email" required value={this.state.value} onChange={this.handleChange} />
                                  </div>
                                  <button className="btn btn-gradient btn-gradient-one">Pide</button>
                              </form>
                              <p style={subTitleStyle} className="mt-5">Únete a la comunidad 3D Printing.</p>

                              
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

