import React, { Component, Fragment } from 'react';
const noAction = e => e.preventDefault();
export class Subscribe extends Component {
constructor(props){
    super(props);
    this.state = {value: '', sentOrder: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
console.log(props)

}


handleChange(event) {
    this.setState({value: event.target.value});
  }

handleSubmit(event) {
    alert('Gracias! Enviaremos tu pedido a : ' + this.state.value);
    this.setState({sentOrder: true});
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
                                  <p>Te enviaremos el pedido y su estado a tu correo.</p>
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

