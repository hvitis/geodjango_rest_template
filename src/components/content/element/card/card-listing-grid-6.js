import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
class ListingCardGrid6 extends Component {
    render() {
    
        return (
            <Fragment>
            {
                Object.values(this.props.list[0].printers).map((value, key) => {
                    console.log("this.props", this.props.list)
                    const printer = value;
                    console.log("printers", printer)
                    return (
                    
                        <div className="col-lg-6 col-sm-6" key={printer.id}>
                            <div className="atbd_single_listing ">
                                <article className="atbd_single_listing_wrapper">
                                    <figure className="atbd_listing_thumbnail_area">
                                        <div className="atbd_listing_image">
                                            <a href="{printer.picture}">
                                                <img src={printer.picture} alt="listingimage" />
                                            </a>
                                        </div>{/*<!-- ends: .atbd_listing_image -->*/}
                                        <div className="atbd_author atbd_author--thumb">
                                            <a href=" ">
                                                <img src="./assets/img/author-thumb2.jpg" alt="AuthorImage" />
                                                <span className="custom-tooltip">Jeffery A, Owner</span>
                                            </a>
                                        </div>
                                        <div className="atbd_thumbnail_overlay_content">
                                            <ul className="atbd_upper_badge">
                                                
                                            </ul>{/*<!-- ends .atbd_upper_badge -->*/}
                                        </div>{/*<!-- ends: .atbd_thumbnail_overlay_content -->*/}
                                    </figure>{/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
                                    <div className="atbd_listing_info">
                                        <div className="atbd_content_upper">
                                            <h4 className="atbd_listing_title">
                                             
                                            </h4>
                                            
                                            
                                        </div>{/*<!-- end .atbd_content_upper -->*/}
                                        <div className="atbd_listing_bottom_content">
                                            <div className="atbd_content_left">
                                                <div className="atbd_listing_category">
                                                 
                                                </div>
                                            </div>
                                            <ul className="atbd_content_right">
                                                <li className="atbd_count"><span className="la la-eye"></span>900+</li>
                                                <li className="atbd_save">
                                                    <span className="la la-heart-o"></span>
                                                </li>
                                            </ul>
                                        </div>{/*<!-- end .atbd_listing_bottom_content -->*/}
                                    </div>{/*<!-- ends: .atbd_listing_info -->*/}
                                </article>{/*<!-- atbd_single_listing_wrapper -->*/}
                            </div>
                        </div>                        
                    )
                })
            }
            </Fragment>
        )
    }
}

export default ListingCardGrid6;