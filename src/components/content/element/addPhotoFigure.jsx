
import React, { Component, Fragment } from 'react';
import { FaPlus, FaShoppingCart, FaCheck } from 'react-icons/fa';
import { Redirect, withRouter } from 'react-router-dom'

export class AddPhotoFigure extends Component {
    constructor(
        props
    ) {
        super(props);
    }
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
                {this.props.ordered ? (
                    <div class="centered"
                        style={{ border: '5px solid #32cc6f' }}
                    >
                        Añadido  <FaCheck></FaCheck>
                    </div>
                ) : (
                        <div class="centered-cart"  style={{ border: '2px dashed cornflowerblue' }} >
                            {this.props.buttonName}<FaShoppingCart></FaShoppingCart>
                        </div>
                    )}
            </div>
        );
    }
}

export default withRouter(AddPhotoFigure);