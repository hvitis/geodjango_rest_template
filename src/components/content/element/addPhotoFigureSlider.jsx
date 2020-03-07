
import React, { Component, Fragment } from 'react';
import { FaPlus, FaShoppingCart, FaCheck } from 'react-icons/fa';
import { Redirect, withRouter } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

export class AddPhotoFigureSlider extends Component {
    constructor(
        props
    ) {
        super(props);
        console.log(this.props)
    }
    render(props) {
        const objectProp = this.props
        return (
            <div className="container m-2" >
                <Carousel indicators={false} id="carousel-zoom">

                    {/* {
    Object.keys(objectProp.links).forEach(function(key) {
        // console.log(key, objectProp[key]);

        return (<Carousel.Item key={key}>
            <img
                className="d-block w-90 main-picture "
                src={objectProp[key]}
                alt="Slide"
                style={
                    objectProp.ordered ?
                        ({ border: '5px solid #32cc6f' }) :
                        ({ border: '2px dashed cornflowerblue' })
                }
                width='300px'
            />
            <Carousel.Caption>
                <div className="centered-cart"
                    style={objectProp.ordered ? ({ border: '4px solid #32cc6f' }) : ({ border: '5px dashed cornflowerblue' })}
                    onClick={() => { objectProp.handleClick(objectProp.name, !objectProp.ordered) }}
                >
                    {objectProp.ordered ? <>Añadido <FaCheck /></> : <>Imprime 3D <FaShoppingCart />></>}
                </div>
            </Carousel.Caption>
        </Carousel.Item>)
    })
} */}
                    {/* {
          (()=> {
            for (let index = 0; index < array.length; index++) {
                const element = this.props['links'][index];
                
            }
          })  
} */}

                    {Object.entries(this.props.links.links).map(
                        ([key, value]) => {
                            return (<Carousel.Item key={key}>
                                <img
                                    className="d-block w-90 main-picture "
                                    src={value}
                                    alt="Slide"
                                    style={
                                        this.props.ordered ?
                                            ({ border: '5px solid #32cc6f' }) :
                                            ({ border: '2px dashed cornflowerblue' })
                                    }
                                    width='300px'
                                />
                                {console.log(this.props['links'])}
                                <Carousel.Caption>
                                    <div className="centered-cart"
                                        style={this.props.ordered ? ({ border: '4px solid #32cc6f' }) : ({ border: '5px dashed cornflowerblue' })}
                                        onClick={() => { this.props.handleClick(this.props.links.name, !this.props.ordered) }}
                                    >
                                        {this.props.ordered ? <>Añadido <FaCheck /></> : <>7€ Imprime 3D <FaShoppingCart /></>}
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>)
                        }
                    )}

                </Carousel>
            </div>
            // <div class="container m-2" onClick={this.props.onClick}>
            //     <img
            //         className="main-picture"
            //         src={this.props.link}
            //         alt="Snow"
            //         style={
            //             this.props.ordered ?
            //                 ({ border: '5px solid #32cc6f' }) :
            //                 ({ border: '2px dashed cornflowerblue' })
            //         }
            //         width='300px'
            //     />
            //     {this.props.ordered ? (
            //         <div class="centered"
            //             style={{ border: '5px solid #32cc6f' }}
            //         >
            //             Añadido  <FaCheck></FaCheck>
            //         </div>
            //     ) : (
            //             <div class="centered-cart"  style={{ border: '2px dashed cornflowerblue' }} >
            //                 {this.props.buttonName}<FaShoppingCart></FaShoppingCart>
            //             </div>
            //         )}
            // </div>
        );
    }
}

export default withRouter(AddPhotoFigureSlider);