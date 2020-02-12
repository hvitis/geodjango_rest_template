import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListingCardGrid12 from '../content/element/card/card-listion-grid-12';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/slider.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/slider';
const noAction = e => e.preventDefault();
class ListingList extends Component {
    state = {
        list: this.props.list,
        cate: this.props.list,
        count: 0
    }

    componentDidMount () {
        $(document).ready(() => {
            //Range slider light
            var slider_range = $(".slider-range");
            slider_range.each(function () {
                $(this).slider({
                    range: true,
                    min: 0,
                    max: 500,
                    values: [0, 500],
                    slide: function (event, ui) {
                        $(".amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                    }
                });
            });
            $(".amount").text("$" + slider_range.slider("values", 0) + " - $" + slider_range.slider("values", 1));
        });
    }
    
    render() {
        // sorting here
        const sort = [];
        Object.values(this.state.list).map(item => {
            return sort.push(item)
        })

        const noAction = e => e.preventDefault();

        const sorting = (e) => {
            e.preventDefault();
            
            switch (e.target.getAttribute('href')) {
                case 'heigh':
                this.setState({
                    list: sort.sort(function(a, b) {
                        var textA = a.price;
                        var textB = b.price;

                        if (textA < textB) return 1;
                        if (textA > textB) return -1;
                        return 0;
                    })
                })

                break;
                case "low" :
                    this.setState({
                        list: sort.sort(function(a, b) {
                            var textA = a.price;
                            var textB = b.price;

                            if (textA < textB) return -1;
                            if (textA > textB) return 1;
                            return 0;
                        })
                    })
                    break;
                    case 'a-z':
                    this.setState({
                        list: sort.sort(function(a, b) {
                            var textA = a.title;
                            var textB = b.title;

                            if (textA < textB) return -1;
                            if (textA > textB) return 1;
                            return 0;
                        })
                    });
                    break;

                    case 'z-a':
                    this.setState({
                        list: sort.sort(function(a, b) {
                            var textA = a.title;
                            var textB = b.title;

                            if (textA < textB) return 1;
                            if (textA > textB) return -1;
                            return 0;
                        })
                    });
                    break;
                default :
                this.setState({
                    list: this.state.cate
                });

            }
        }
        // sorting end

        // filter by search
        const search = e => {
            e.preventDefault();
            const value = e.target.value.toLowerCase();
            this.setState({
                list: Object.values(this.props.list).filter(function (item) {
                    return item.title.toLowerCase().startsWith(value) || item.location.toLowerCase().startsWith(value) ?
                        item : ''

                })
            })
        }
        // filter by search

        // filter by category
        const category = e => {
            console.log(e.target)
            // e.preventDefault();
            const filter = Object.values(this.props.list).filter(item => {
                return item.category === e.target.value
            })
            if(e.target.value !== "All") {
                this.setState({
                    list : filter
                })
            } else {
                this.setState({
                    list : this.props.list
                })
            }
        }
        /*
        const catItem = [];
        Object.values(this.state.cate).map( value => {
            return catItem.push(value.category)
        })
        const catItemFilter = new Set(catItem);
        */
        // filter by category end

        // filter by price range
        const range = e => {
            e.preventDefault();
            const value = document.getElementById('amount1').innerHTML;
            const max   = value.split('-').pop().split('$').pop().trim();
            const min   = value.split('-').shift().split('$').pop().trim();
            
            this.setState({
                list: Object.values(this.props.list).filter(item1 => {
                    return item1.price >= min && item1.price <= max
                })
            })
        }
        // filter by price range end

        return (
            <Fragment>
                <section className="all-listing-wrapper section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="atbd_generic_header">
                                    <div className="atbd_generic_header_title">
                                        <h4>All Items</h4>
                                        <p>Total Listing Found: {Object.values(this.state.list).length}</p>
                                    </div>{/*<!-- ends: .atbd_generic_header_title -->*/}
                                    <div className="atbd_listing_action_btn btn-toolbar" role="toolbar">
                                        {/* <!-- Views dropdown --> */}
                                        <div className="view-mode">
                                            <NavLink className="action-btn" to="all-listings-grid"><span className="la la-th-large"></span></NavLink><NavLink className="action-btn active" to="all-listings-list"><span className="la la-list"></span></NavLink>
                                        </div>
                                        {/* <!-- Orderby dropdown --> */}
                                        <div className="dropdown">
                                            <a className="action-btn dropdown-toggle" href=" " role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by <span className="caret"></span></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                <a className="dropdown-item" onClick={sorting} href="a-z">A to Z ( title )</a>
                                                <a className="dropdown-item" onClick={sorting} href="z-a">Z to A ( title )</a>
                                                <a className="dropdown-item" onClick={sorting} href="new">Latest listings</a>
                                                <a className="dropdown-item" onClick={sorting} href="old">Oldest listings</a>                                            
                                                <a className="dropdown-item" onClick={sorting} href="low">Price ( low to high )</a>
                                                <a className="dropdown-item" onClick={sorting} href="heigh">Price ( high to low )</a>                                            
                                            </div>
                                        </div>
                                    </div>{/*<!-- ends: .atbd_listing_action_btn -->*/}
                                </div>{/*<!-- ends: .atbd_generic_header -->*/}
                            </div> {/*<!-- ends: .col-lg-12 -->*/}

                            <div className="col-lg-12 listing-items">
                                <div className="row">
                                    
                                    <div className="col-lg-4 order-lg-0 order-1 mt-5 mt-lg-0">
                                        <div className="listings-sidebar">
                                            <div className="search-area default-ad-search">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <input type="text" 
                                                            placeholder="What are you looking for?" 
                                                            className="form-control" 
                                                            onChange={search}
                                                        />
                                                    </div>{/*<!-- ends: .form-group -->*/}

                                                    <div className="form-group">
                                                        <div className="select-basic">
                                                            <select className="form-control" onChange={category}>
                                                                <option value="All">Select Category</option>
                                                                {
                                                                    Object.values(this.props.list).map((value, key) => {
                                                                        return (
                                                                            <option key={key} value={value.category}>{value.category}</option>                                                                
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="position-relative">
                                                            <input onChange={search} type="text" placeholder="City, state or zip code" className="form-control location-name" />
                                                            <button type="submit" className="locator"><span className="la la-crosshairs"></span></button>
                                                        </div>
                                                    </div>

                                                    <div className="form-group p-bottom-10">
                                                        <div className="price-range rs-primary">
                                                            <p className="d-flex justify-content-between">
                                                                <span>Price Range: </span>
                                                                <span className="amount" id="amount1"></span>
                                                            </p>
                                                            <div className="slider-range"></div>                                                                                                                    
                                                        </div>{/*<!-- ends: .price-range -->*/}
                                                    </div>{/*<!-- ends: .form-group -->*/}

                                                    <div className="check-btn">
                                                        <div className="btn-checkbox active-color-secondary">
                                                            <label>
                                                                <input type="checkbox" value="1" /><span className="color-success"><i className="la la-clock-o"></i> Open Now</span>
                                                            </label>
                                                        </div>
                                                        <div className="btn-checkbox active-color-secondary">
                                                            <label>
                                                                <input type="checkbox" value="1" onClick={range} /><span className="color-primary"><i className="la la-search"></i> Search</span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="filter-checklist">
                                                        <h5>Filter by Features</h5>
                                                        <div className="checklist-items feature-checklist hideContent">
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag9" checked onChange={noAction} />
                                                                <label className="custom-control-label" htmlFor="tag9">Accepts Cards</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag10" />
                                                                <label className="custom-control-label" htmlFor="tag10">Electronics</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag11" />
                                                                <label className="custom-control-label" htmlFor="tag11">Bike Parking</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag12" />
                                                                <label className="custom-control-label" htmlFor="tag12">Wheelchair</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag13" />
                                                                <label className="custom-control-label" htmlFor="tag13">Accessories</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag14" />
                                                                <label className="custom-control-label" htmlFor="tag14">WiFi Internet</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag15" />
                                                                <label className="custom-control-label" htmlFor="tag15">Parking Street</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag16" />
                                                                <label className="custom-control-label" htmlFor="tag16">Clothing</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag17" />
                                                                <label className="custom-control-label" htmlFor="tag17">Travel Booking</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag18" />
                                                                <label className="custom-control-label" htmlFor="tag18">Fast Support</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag19" />
                                                                <label className="custom-control-label" htmlFor="tag19">Parking Street</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag20" />
                                                                <label className="custom-control-label" htmlFor="tag20">Shopping</label>
                                                            </div>
                                                        </div>
                                                        <a href=" " className="show-link">Show More</a>
                                                    </div>{/*<!-- ends: .filter-checklist -->*/}
                                                    <div className="filter-checklist">
                                                        <h5>Filter by Tags</h5>
                                                        <div className="checklist-items tags-checklist">
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input onChange={noAction} type="checkbox" className="custom-control-input" id="tag1" checked />
                                                                <label className="custom-control-label" htmlFor="tag1">Restaurant</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag2" />
                                                                <label className="custom-control-label" htmlFor="tag2">Food</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag3" />
                                                                <label className="custom-control-label" htmlFor="tag3">Launch</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag4" />
                                                                <label className="custom-control-label" htmlFor="tag4">Breakfast</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag5" />
                                                                <label className="custom-control-label" htmlFor="tag5">Lifestyle</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag6" />
                                                                <label className="custom-control-label" htmlFor="tag6">Travel</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag7" />
                                                                <label className="custom-control-label" htmlFor="tag7">Drink</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag8_1" />
                                                                <label className="custom-control-label" htmlFor="tag8_1">Services</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag6_2" />
                                                                <label className="custom-control-label" htmlFor="tag6_2">Booking</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag7_3" />
                                                                <label className="custom-control-label" htmlFor="tag7_3">Rent</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="tag8_2" />
                                                                <label className="custom-control-label" htmlFor="tag8_2">Shopping</label>
                                                            </div>
                                                        </div>
                                                    </div>{/*<!-- ends: .filter-checklist -->*/}
                                                    <div className="filter-checklist">
                                                        <h5>Filter by Ratings</h5>
                                                        <div className="sort-rating">
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" onChange={noAction} className="custom-control-input" id="customCheck7" checked />
                                                                <label className="custom-control-label" htmlFor="customCheck7">
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                <label className="custom-control-label" htmlFor="customCheck8">
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                                <label className="custom-control-label" htmlFor="customCheck9">
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                                                <label className="custom-control-label" htmlFor="customCheck10">
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                                                <label className="custom-control-label" htmlFor="customCheck11">
                                                                    <span className="active"><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                                                <label className="custom-control-label" htmlFor="customCheck12">
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>{/*!-- ends: .filter-checklist -->*/}
                                                    <a href=" " onClick={noAction} className="btn btn-gradient btn-gradient-two btn-block btn-icon icon-right m-top-40">Search Filter <span className="la la-long-arrow-right"></span></a>
                                                </form>{/*<!-- ends: form -->*/}
                                            </div>
                                        </div>
                                    </div> {/* wiget */}

                                    <div className="col-lg-8 order-lg-1 order-0">
                                        <div className="row">
                                        {
                                            Object.values(this.state.list).length ? (
                                                <ListingCardGrid12 list={this.state.list} />
                                            ) : (<div className="col-lg-12"><div className="alert alert-warning" role="alert">Data Not found!</div></div>)
                                        }
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>               
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        list : state.list
    }
}
export default connect(mapStateToProps)(ListingList);