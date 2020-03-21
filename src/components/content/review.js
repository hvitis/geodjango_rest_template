import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class Review extends Component {

    render() {
        return (
            <Fragment>
                <div className="atbd_content_module atbd_review_module">
                    <div className="atbd_content_module__tittle_area">
                        <div className="atbd_area_title">
                            <h4><span className="la la-star-o"></span>4 Reviews</h4>
                            <label htmlFor="review_content" className="btn btn-secondary btn-icon-left btn-sm not_empty"><span className="la la-star-o"></span> Add a review</label>
                        </div>
                    </div>
                    <div className="atbdb_content_module_contents">
                        <div id="client_review_list">
                            <div className="atbd_single_review atbdp_static">
                                <div className="atbd_review_top">
                                    <div className="atbd_avatar_wrapper">
                                        <div className="atbd_review_avatar"><img alt="" src="./assets/img/review-author-thumb.jpg" className="avatar avatar-32 photo" /></div>
                                        <div className="atbd_name_time">
                                            <p>Mark Rose</p>
                                            <span className="review_time">6 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="atbd_rated_stars">
                                        <ul>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_disable"></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <p>Lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus</p>
                                    <a href="# " className="reply"><span className="la la-mail-reply-all"></span>Reply</a>
                                </div>
                                <div className="review_reply_form">
                                    <div className="atbd_review_avatar"><img alt="" src="./assets/img/review-author-thumb2.jpg" className="avatar avatar-32 photo" /></div>
                                    <form action="/">
                                        <textarea placeholder="Message" className="form-control"></textarea>
                                        <button className="btn btn-sm btn-secondary">Reply</button>
                                    </form>
                                </div>
                                {/* <!-- comment depth 2 --> */}
                                <div className="media-depth2">
                                    <div className="atbd_single_review">
                                        <div className="atbd_review_top">
                                            <div className="atbd_avatar_wrapper">
                                                <div className="atbd_review_avatar"><img alt="" src="./assets/img/review-author-thumb2.jpg" className="avatar avatar-32 photo" /></div>
                                                <div className="atbd_name_time">
                                                    <p>Conrad Jane</p>
                                                    <span className="review_time">6 hours ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review_content">
                                            <p>Lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus vestibulum ac diam sit amet</p>
                                            <a href="# " className="reply"><span className="la la-mail-reply-all"></span>Reply</a>
                                        </div>
                                        <div className="review_reply_form">
                                            <div className="atbd_review_avatar"><img alt="" src="./assets/img/review-author-thumb.jpg" className="avatar avatar-32 photo" /></div>
                                            <form action="/">
                                                <textarea placeholder="Message" className="form-control"></textarea>
                                                <button className="btn btn-sm btn-secondary">Reply</button>
                                            </form>
                                        </div>
                                    </div>{/*<!-- ends: .atbd_single_review -->*/}
                                </div>{/*<!-- ends: .media-depth2 -->*/}
                            </div>{/*<!-- ends:.atbd_single_review -->*/}
                            <div className="atbd_single_review atbdp_static">
                                <div className="atbd_review_top">
                                    <div className="atbd_avatar_wrapper">
                                        <div className="atbd_review_avatar"><img alt="" src="./assets/img/review-author-thumb3.jpg" className="avatar avatar-32 photo" /></div>
                                        <div className="atbd_name_time">
                                            <p>Conrad Jane</p>
                                            <span className="review_time">6 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="atbd_rated_stars">
                                        <ul>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_active"></span></li>
                                            <li><span className="rate_active"></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <p>Lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus</p>
                                    <a href="# " className="reply"><span className="la la-mail-reply-all"></span>Reply</a>
                                </div>
                                <div className="review_reply_form">
                                    <div className="atbd_review_avatar"><img alt="" src="./assets/img/review-author-thumb2.jpg" className="avatar avatar-32 photo" /></div>
                                    <form action="/">
                                        <textarea placeholder="Message" className="form-control"></textarea>
                                        <button className="btn btn-sm btn-secondary">Reply</button>
                                    </form>
                                </div>
                            </div>{/*<!-- ends: .atbd_single_review -->*/}
                        </div>{/*<!-- ends: .client_review_list -->*/}
                        <div className="review_pagination">
                            <ul className="pagination">
                                <li className="page-item"><NavLink onClick={noAction} className="page-link" to="/at_demo"><span className="la la-angle-left"></span></NavLink></li>
                                <li className="page-item"><NavLink onClick={noAction} className="page-link" to="/at_demo">1</NavLink></li>
                                <li className="page-item active"><NavLink onClick={noAction} className="page-link" to="/at_demo">2</NavLink></li>
                                <li className="page-item"><NavLink onClick={noAction} className="page-link" to="/at_demo">3</NavLink></li>
                                <li className="page-item"><NavLink onClick={noAction} className="page-link" to="/at_demo"><span className="la la-angle-right"></span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- ends: .atbd_content_module --> */}
            </Fragment>
        )
    }
}

export class AddReview extends Component {

    render() {
        return (
            <Fragment>

                <div className="atbd_content_module atbd_review_form">
                    <div className="atbd_content_module__tittle_area">
                        <div className="atbd_area_title">
                            <h4><span className="la la-star"></span>Add a Review</h4>
                        </div>
                    </div>
                    <div className="atbdb_content_module_contents atbd_give_review_area">
                        <div className="atbd_notice alert alert-info" role="alert">
                            <span className="la la-info" aria-hidden="true"></span>
                            You need to <NavLink to="login" data-toggle="modal" data-target="#login_modal">Login</NavLink> or <NavLink to="/register" data-toggle="modal" data-target="#signup_modal">Register</NavLink> to submit a review
                        </div>
                        {/* <!-- ends: .atbd_notice --> */}
                        <form action="/" id="atbdp_review_form" method="post">
                            <div className="atbd_review_rating_area">
                                {/* <!--It should be displayed on the left side --> */}
                                <div className="atbd_review_update_rating">
                                    <span>Rating: </span>
                                    <div className="atbd_rating_stars">
                                        <div className="br-wrapper br-theme-fontawesome-stars m-left-15">
                                            <select className="give_rating">
                                                {/* <!-- now hidden --> */}
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .atbd_review_update_rating -->*/}
                            </div>{/*<!-- ends: .atbd_review_rating_area -->*/}
                            <div className="form-group">
                                <textarea name="content" id="review_content" className="form-control" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-group">
                                <div id="atbd_up_preview"></div>
                                <div className="atbd_upload_btn_wrap">
                                    <label htmlFor="atbd_review_attachment">
                                        <input type="file" id="atbd_review_attachment" hidden multiple />
                                        <span className="btn btn-md atbd_upload_btn"><span className="la la-cloud-upload"></span>Upload Photo</span>
                                    </label>
                                    <span id="file_name"></span>
                                </div>
                            </div>
                            {/* <!--If current user has a review then show him update and delete button--> */}
                            <button className="btn btn-gradient btn-gradient-one" type="submit" id="atbdp_review_form_submit" onClick={noAction}>Submit Review</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}