
import React, { Component, Fragment } from 'react';
import { FaPlus, FaShoppingCart } from 'react-icons/fa';
import { Redirect, withRouter } from 'react-router-dom'

export class AddPhotoFigure extends Component {
    constructor(
        props

    ) {
        super(props);
        this.proceedToCheckout = this.proceedToCheckout.bind(this);

        console.log(props)
    }
    proceedToCheckout() {
        console.log('Click')
        return <Redirect to='/login' />
    };
    render(
        props
    ) {
        return (

            <div class="container m-2" onClick={this.props.onClick}>
                <img
                    className="main-picture"
                    src={this.props.link}
                    alt="Snow"
                    style={
                        this.props.ordered ?
                            ({ border: '5px solid #32cc6f' }) :
                            ({ border: '2px dashed cornflowerblue' })

                    }
                    width='300px'
                />
                {!this.props.ordered ? (
                    <div class="centered"
                        style={{ border: '5px solid #32cc6f' }}
                    >
                        Quiero <FaPlus></FaPlus>
                    </div>
                ) : (
                        <div class="centered-cart" onClick={() => this.proceedToCheckout()} style={{ border: '2px dashed cornflowerblue' }} >
                            Añadido <FaShoppingCart></FaShoppingCart>
                        </div>
                    )}

            </div>
        );


    }
}

export default withRouter(AddPhotoFigure);