import React, { Component, Fragment } from 'react';

const noAction = e => e.preventDefault();
class Report extends Component {
   
    render() {                
        return (
            <Fragment>
                <div className="modal fade" id="atbdp-report-abuse-modal" tabIndex="-1" role="dialog" aria-hidden="true" aria-labelledby="atbdp-report-abuse-modal-label">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <form action="/" id="atbdp-report-abuse-form" className="form-vertical">
                                <div className="modal-header">
                                    <h3 className="modal-title" id="atbdp-report-abuse-modal-label">Report Abuse</h3>
                                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="atbdp-report-abuse-message" className="not_empty">Your Complaint<span className="atbdp-star">*</span></label>
                                        <textarea className="form-control" id="atbdp-report-abuse-message" rows="4" placeholder="Message..." required=""></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={noAction} className="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                                    <button type="submit" onClick={noAction} className="btn btn-secondary btn-sm">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                
            </Fragment>
        )
    }
}

export default Report;