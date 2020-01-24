import React, { Component, Fragment } from 'react';

const noAction = e => e.preventDefault();
class Clime extends Component {
   
    render() {                
        return (
            <Fragment>
                <div className="modal fade" id="moda_claim_listing" tabIndex="-1" role="dialog" aria-labelledby="claim_listing_label" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="claim_listing_label"><i className="la la-check-square"></i> Claim This Listing</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Your Name" className="form-control" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" className="form-control" placeholder="Email Address" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Phone Number" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="url" className="form-control" placeholder="Listing URL" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <textarea className="form-control" rows="6" placeholder="Provie Listing Information" required></textarea>
                                                <button onClick={noAction} type="submit" className="btn btn-secondary">Submit Query</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Clime;