
import React, { Component, Fragment } from 'react';
import { FaPlus } from 'react-icons/fa';

export const AddPhotoFigure = (props) => {
    return (

        <div class="container">
            <img
                className="main-picture"
                src={props.link}
                alt="Snow"
                style={ {border: '2px solid cornflowerblue'}}
            />
            <div class="centered" >
                Pido <FaPlus></FaPlus>
            </div>
        </div>
    );
}

export default AddPhotoFigure;