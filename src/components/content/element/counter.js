import React, { Component, Fragment } from 'react';

export class Counter extends Component {

    render() {
        return (
            <Fragment>               
                <section className="counters-wrapper bg-gradient-pw section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1>Millions of People</h1>
                                <p>turn to Directoria every day to make spending decisions</p>
                                <ul className="list-unstyled counter-items">
                                    <li>
                                        <p><span className="count_up">59</span>k+</p>
                                        <span>Listings</span>
                                    </li>
                                    <li>
                                        <p><span className="count_up">23</span>k+</p>
                                        <span>Verified Users</span>
                                    </li>
                                    <li>
                                        <p><span className="count_up">5</span>k+</p>
                                        <span>New users per month</span>
                                    </li>
                                    <li>
                                        <p><span className="count_up">42</span>k+</p>
                                        <span>Visitors per month</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
