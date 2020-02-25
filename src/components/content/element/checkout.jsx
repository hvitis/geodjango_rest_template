
import React, { Component, Fragment } from 'react';
import { FaPlus, FaShoppingCart } from 'react-icons/fa';
import { Redirect } from 'react-router-dom'


export const CheckOut = (props) => {
    return (

        <div class="container m-2">
            <img
                className="main-picture"
                src={props.link}
                alt="Snow"
                style={ {border: '2px solid cornflowerblue'}}
                width='300px'
            />
            <div class="centered-cart" >
                Pido <FaShoppingCart></FaShoppingCart>
            </div>
        </div>
    );
}

export default CheckOut;