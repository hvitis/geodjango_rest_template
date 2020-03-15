import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const noAction = e => e.preventDefautl();
class CategoryCardGrid2 extends Component {
    render() {
        const { place } = this.props;
        return (
            <Fragment>
            {
                Object.values(place).slice(0, 4).map((value, key) => {
                    const { img, list, location } = value;
                    return (                       
                        <div className="category-place-single" key={key}>
                            <figure>
                                <NavLink onClick={noAction} to="/at_demo"><img src={img} alt="" /></NavLink>
                                <figcaption>
                                    <h3>{location}</h3>
                                    <p>{list} Listings</p>
                                </figcaption>
                            </figure>
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
        place : state.place
    }
}
export default connect(mapStateToProps)(CategoryCardGrid2)
