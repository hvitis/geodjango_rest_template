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
                    3: 'https://www.renderhub.com/ivamargar/voldemorts-wand/voldemorts-wand-01.jpg'
                },
                name: 'wand'

            },
            dragon: {
                links: {
                    1: 'https://i.ibb.co/NVY667p/dragon.jpg',
                    2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlYcrmmw8zaM0XTFEbFEcWfz5S9YwqPhe9lFPlIlPJZ5brprAmA&s',
                    3: 'https://files.cults3d.com/uploaders/12510347/illustration-file/9dc9ed7e-7b97-4206-af0d-538e1862412c/flame-got-gif_large.gif'
                },
                name: 'dragon'
            },
            yoda: {
                links: {
                    1: 'https://cdn.myminifactory.com/assets/object-assets/5dd48df262fb8/images/720X720-fusion-render.jpg',
                   
                    2: 'https://cdn.thingiverse.com/assets/93/fb/97/70/c6/featured_preview_babyYoda3.jpg'
                },
                name: 'yoda'

            },
            falcon: {
                links: {
                    1: 'https://files.cults3d.com/uploaders/13326265/illustration-file/31225288-177f-4828-bda9-82a272c2d2d2/1_large.jpg',
                    2: 'https://files.cults3d.com/uploaders/13326265/illustration-file/f6b6a164-4ef2-4d8c-ae02-aee750a72266/5_large.jpg',
                    3: 'https://files.cults3d.com/uploaders/12510347/illustration-file/1475584572-6651-2551/deathtrooper_3d_printable_helmet_by_makerslab_3D_stl_obj_large.jpg',
                    4: 'https://files.cults3d.com/uploaders/12510347/illustration-file/1471355003-29067-9190/starkiller_helmet_detail_starwarsmakerslab_large.png'
                
                },
                name: 'falcon'

            },
            custom: {
                links: {
                    1: 'https://cdn.myminifactory.com/assets/object-assets/5a6a515748cbe/images/720X720-main-shapeways-devil-0001-layer-2.jpg',
                    2: 'https://i.all3dp.com/cdn-cgi/image/fit=cover,w=360,gravity=0.5x0.5,format=auto/wp-content/uploads/2017/06/27015817/mr-poopy-butthole.jpg',
                    3: 'https://img1.yeggi.com/images_q/2308813/drunk-tiny-rick---3d-files-by-3d-print-guy'
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
                                <Subscribe order={this.state} style={titleStyle}></Subscribe>
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
