import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { AddPhotoFigure } from './addPhotoFigure';
import { AddPhotoFigureSlider } from './addPhotoFigureSlider';

import { MdLibraryAdd } from 'react-icons/md';
import { FaPlus, FaHandPointRight } from 'react-icons/fa';
import { CheckOut } from './checkout.jsx';
import { Redirect } from 'react-router-dom';
import { Subscribe } from './subscribe';
export class BreadcrumbAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wand: false,
            dragon: false,
            yoda: false,
            falcon: false,
            checkout: false
        };
    }
    addItem(item) {
        this.setState({ [item]: !this.state[item] });
    };
    handleClick(itemName, changedStateFromChild) {
        this.setState({ [itemName]: changedStateFromChild });
    };
    render(props) {
        const links = {
            wand: {
                links: {
                    1: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/03/26/504993/190398/voldemort_wand_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2018382_o.jpg',
                    2: 'https://files.cults3d.com/uploaders/12510347/illustration-file/78178856-1add-4d83-a121-398bdfcd9ffd/Voldemort-bundle_3.982_large.jpg',
                    3: 'https://www.renderhub.com/ivamargar/voldemorts-wand/voldemorts-wand-01.jpg',
                    
                    5:'https://i.ibb.co/3p205Ph/Whats-App-Image-2020-03-02-at-14-57-23.jpg',
                    6:'https://i.ibb.co/xXbKzTv/Whats-App-Image-2020-03-02-at-14-57-24-1.jpg',
                    7:'https://i.ibb.co/bW6Cxz7/Whats-App-Image-2020-03-02-at-14-57-24-2.jpg'
                },
                name: 'wand'

            },
            dragon: {
                links: {
                    1: 'https://i.ibb.co/mDx2rTs/Whats-App-Image-2020-03-02-at-14-56-18-1.jpg',
                    2: 'https://i.ibb.co/T1MZGYw/Whats-App-Image-2020-03-02-at-14-56-18-2.jpg',
                    
                    4: 'https://i.ibb.co/Tk1Ff9P/Whats-App-Image-2020-03-02-at-14-56-19-1.jpg',
                    5: 'https://i.ibb.co/F5bh1Lq/Whats-App-Image-2020-03-02-at-14-56-19-2.jpg',
                    6: 'https://i.ibb.co/QX6p8kp/Whats-App-Image-2020-03-02-at-14-56-19-4.jpg',
                    7: 'https://i.ibb.co/8rGxfYX/Whats-App-Image-2020-03-02-at-14-56-19-5.jpg',
                    8: 'https://i.ibb.co/RbCjWb7/Whats-App-Image-2020-03-02-at-14-56-19.jpg'
                },
                name: 'dragon'
            },
            yoda: {
                links: {
                    1: 'https://i.ibb.co/WcJC5Dj/Whats-App-Image-2020-03-02-at-14-58-00-3.jpgg',
                    2: 'https://i.ibb.co/5TPqHyW/Whats-App-Image-2020-03-02-at-14-58-01.jpg',
                    3: 'https://i.ibb.co/P41j5B7/Whats-App-Image-2020-03-02-at-14-57-59-1.jpg',
                    4: 'https://i.ibb.co/QMfJbBb/Whats-App-Image-2020-03-02-at-14-57-59-2.jpg',
                    5: 'https://i.ibb.co/txcmz41/Whats-App-Image-2020-03-02-at-14-57-59-4.jpg',
                   
                    8: 'https://i.ibb.co/SJF3gNc/Whats-App-Image-2020-03-02-at-14-58-00-2.jpg',
                    9: 'https://i.ibb.co/WcJC5Dj/Whats-App-Image-2020-03-02-at-14-58-00-3.jpg',
                    10: 'https://i.ibb.co/5TPqHyW/Whats-App-Image-2020-03-02-at-14-58-01.jpg',
                },
                name: 'yoda'

            },
            falcon: {
                links: {
                    1: 'https://i.ibb.co/VwZZHB1/Whats-App-Image-2020-03-02-at-14-56-40-2.jpg',
                    2: 'https://i.ibb.co/s9ZFthq/Whats-App-Image-2020-03-02-at-14-56-40-3.jpg',
                    3:'https://i.ibb.co/X7VNfW2/Whats-App-Image-2020-03-02-at-14-56-40-10.jpg',
                    4:'https://i.ibb.co/KqFk8Sn/Whats-App-Image-2020-03-02-at-14-56-40.jpg',
                    5:'https://i.ibb.co/8NkNtWV/Whats-App-Image-2020-03-02-at-14-56-41-1.jpg',
                    6:'https://i.ibb.co/4JGGMkJ/Whats-App-Image-2020-03-02-at-14-56-41-3.jpg',
                    7:'https://i.ibb.co/Tw1BLkB/Whats-App-Image-2020-03-02-at-14-56-41.jpg',
                   
                },
                name: 'falcon'

            },
            custom: {
                links: {
                    1: 'https://i.ibb.co/m40DF8D/Screenshot-2020-03-07-at-02-04-31.png',
                    2:'https://i.ibb.co/gZ8qrrR/Imagen-3-large.jpg'
               
                },
                name: 'custom'
            },
        };


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
                <div className="about-intro content_above">
                    <div className="container">
                        <div className="row align-items-center">
                            <h1 style={titleStyle}>Imprime tus figuras favoritas en 3D!</h1>
                            {((this.state.wand || this.state.dragon || this.state.yoda || this.state.falcon || this.state.custom) && !this.state.checkout) ? (
                                <div className="col  d-flex justify-content-center">
                                    <div
                                        className="checkout-text"
                                        onClick={() => {
                                            this.setState({ checkout: !this.state.checkout });
                                        }}
                                    >
                                        <FaHandPointRight /> Finaliza Pedido
                             </div>
                                </div>
                            ) : (
                                    <></>
                                )}
                            {this.state.checkout ? (
                                <Subscribe order={this.state} ></Subscribe>
                            ) : (
                                    <div className="row d-flex justify-center align-content-center">
                                        <AddPhotoFigureSlider handleClick={this.handleClick.bind(this)} links={links.dragon} ordered={this.state.dragon} buttonName="Imprime en 3D"></AddPhotoFigureSlider>
                                        <AddPhotoFigureSlider handleClick={this.handleClick.bind(this)} links={links.wand} ordered={this.state.wand} buttonName="Imprime en 3D"></AddPhotoFigureSlider>
                                        <AddPhotoFigureSlider handleClick={this.handleClick.bind(this)} links={links.falcon} ordered={this.state.falcon} buttonName="Imprime en 3D"></AddPhotoFigureSlider>
                                        <AddPhotoFigureSlider handleClick={this.handleClick.bind(this)} links={links.yoda} ordered={this.state.yoda} buttonName="Imprime en 3D"></AddPhotoFigureSlider>
                                        <AddPhotoFigureSlider handleClick={this.handleClick.bind(this)} links={links.custom} ordered={this.state.custom} buttonName="Idea tuya"></AddPhotoFigureSlider>

                                    </div>
                                )
                            }
                            {((this.state.wand || this.state.dragon || this.state.yoda|| this.state.falcon || this.state.custom) && !this.state.checkout) ? (
                                <div className="col  d-flex justify-content-center">
                                    <div
                                        className="checkout-text"
                                        onClick={() => {
                                            this.setState({ checkout: !this.state.checkout });
                                        }}
                                    >
                                        <FaHandPointRight /> Finaliza Pedido
                             </div>
                                </div>
                            ) : (
                                    <></>
                                )}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const noAction = e => e.preventDefault();
export class BreadcrumbWraper extends Component {
    render() {
        return (
            <Fragment>
                <div className="breadcrumb-wrapper content_above">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1 className="page-title">{this.props.title}</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {this.props.title}
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export class BreadcrumbSingle extends Component {
    render() {
        const { category, rating, badge, title, price } = this.props.filter[0];
        return (
            <Fragment>
                <div className="col-lg-8 col-md-7">
                    <ul className="list-unstyled listing-info--badges">
                        <li>
                            <span className={'atbd_badge atbd_badge_' + badge}>{badge}</span>
                        </li>
                        <li>
                            <span className="atbd_badge atbd_badge_popular">Popular</span>
                        </li>
                    </ul>
                    <ul className="list-unstyled listing-info--meta">
                        <li>
                            {/**/}
                            <span
                                className="atbd_meta atbd_listing_average_pricing"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Average"
                            >
                                {'$ ' + price}
                            </span>
                        </li>
                        <li>
                            <div className="average-ratings">
                                <span className="atbd_meta atbd_listing_rating">
                                    {rating}
                                    <i className="la la-star"></i>
                                </span>
                                <span>
                                    <strong>26</strong> Reviews
                </span>
                            </div>
                        </li>
                        <li>
                            <div className="atbd_listing_category">
                                <a href=" ">
                                    <span className="la la-glass"></span>
                                    {category}
                                </a>
                            </div>
                        </li>
                    </ul>
                    {/*<!-- ends: .listing-info-meta -->*/}
                    <h1>Strawberry Basil Lemonade</h1>
                    <p className="subtitle">{title}</p>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-end justify-content-start justify-content-md-end">
                    <div className="atbd_listing_action_area">
                        <div className="atbd_action atbd_save">
                            <div className="action_button">
                                <a href=" " onClick={noAction} className="atbdp-favourites">
                                    <span className="la la-heart-o"></span> Save
                </a>
                            </div>
                        </div>
                        <div className="atbd_action atbd_share dropdown">
                            <span
                                className="dropdown-toggle"
                                id="social-links"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                role="menu"
                            >
                                <span className="la la-share"></span>Share
              </span>
                            <div
                                className="atbd_director_social_wrap dropdown-menu"
                                aria-labelledby="social-links"
                            >
                                <ul className="list-unstyled">
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank">
                                            <span className="fab fa-facebook-f color-facebook"></span>
                                            Facebook
                    </a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank">
                                            <span className="fab fa-twitter color-twitter"></span>
                                            Twitter
                    </a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank">
                                            <span className="fab fa-pinterest-p color-pinterest"></span>
                                            Pinterest
                    </a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank">
                                            <span className="fab fa-google-plus-g color-gplus"></span>
                                            Google Plus
                    </a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank">
                                            <span className="fab fa-linkedin-in color-linkedin"></span>
                                            LinkedIn
                    </a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank">
                                            <span className="fab fa-tumblr color-tumblr"></span>Tumblr
                    </a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank">
                                            <span className="fab fa-vk color-vk"></span>VKontakte
                    </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Ends social share--> */}
                        </div>
                        {/* <!-- Report Abuse--> */}
                        <div className="atbd_action atbd_report">
                            <div className="action_button">
                                <a
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#atbdp-report-abuse-modal"
                                >
                                    <span className="la la-flag-o"></span> Report
                </a>
                            </div>
                            {/* <!-- Modal (report abuse form) --> */}
                        </div>
                    </div>
                    {/* <!-- ends: .atbd_listing_action_area --> */}
                </div>
            </Fragment>
        );
    }
}
