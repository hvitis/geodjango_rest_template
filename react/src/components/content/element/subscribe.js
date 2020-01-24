import React, { Component, Fragment } from 'react';
const noAction = e => e.preventDefault();
export class Subscribe extends Component {

    render() {
        return (
            <Fragment>
                <section className="subscribe-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>Subscribe to Newsletter</h1>
                                <p>Subscribe to get update and information. Don't worry, we won't send spam!</p>
                                <form action="/" className="subscribe-form m-top-40">
                                    <div className="form-group">
                                        <span className="la la-envelope-o"></span>
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>
                                    <button className="btn btn-gradient btn-gradient-one" onClick={noAction}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

