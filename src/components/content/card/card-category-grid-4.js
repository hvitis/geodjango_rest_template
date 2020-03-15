import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const noAction = e => e.preventDefault();
class CategoryCardGrid4 extends Component {
    render() {
        const { category } = this.props;
        return (
            <Fragment>
            {
                Object.values(category).slice(0, 6).map((value, key) => {
                    const { img, list, category, icon } = value;
                    return (
                        <div className="col-lg-4 col-sm-6" key={key}>
                            <div className="category-single category--img">
                                <figure className="category--img4">
                                    <img src={img} alt="" />
                                    <figcaption className="overlay-bg">
                                        <NavLink onClick={noAction} to="/at_demo" className="cat-box">
                                            <div>
                                                <div className="icon">
                                                    <span className={"la "+icon}></span>
                                                </div>
                                                <h4 className="cat-name">{category}</h4>
                                                <span className="badge badge-pill badge-success">{list} Listings</span>
                                            </div>
                                        </NavLink>
                                    </figcaption>
                                </figure>
                            </div>{/*<!-- ends: .category-single -->*/}
                        </div>
                    )
                })
            }
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        category : state.category
    }
}
export default connect(mapStateToProps)(CategoryCardGrid4)
