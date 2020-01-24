import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
const noAction = (e) => {
    e.preventDefault()
}
const DetailsContent = (props) => {
    const {contents, blog} = props;

    const {imgSrc, title, content, date} = contents;
    
    return (
        <Fragment>
            <div className="post-details">
                <div className="post-head">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="post-content">
                    <div className="post-header">
                        <h3>{title}</h3>
                        <ul className="list-unstyled">
                            <li>{date}</li>
                            <li>By <NavLink to='/at_demo' onClick={noAction}>Aazztech</NavLink></li>
                            <li>In <NavLink to='/at_demo' onClick={noAction}>Finance</NavLink></li>
                            <li><NavLink to='/at_demo' onClick={noAction}>5 Comments</NavLink></li>
                        </ul>
                    </div>
                    <div className="post-body">
                        <p>{content}</p>
                        <p>
                            Business and Finance Sequitur mutatin onem consuetudium. Investiga tiones demonstr aver unt lectores legere me lius quod ii qua legunt saepius. Claritas est etiam pro cessus.</p>
                        <div className="m-top-45 m-bottom-50">
                            <blockquote className="blockquote blockquote1">
                                <p>My focus areas are on global standardization and harmonization of business processes lorem dolor is reorganization of marketing and customer.</p>
                                <div className="quote-author">
                                    <p><span>Jeff Collins,</span> Founder of Tejarat Inc.</p>
                                </div>
                            </blockquote>{/*<!-- end: blockquote -->*/}
                        </div>
                        <h4>Financial Analysis Overview</h4>
                        <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas investig. Investiga tiones demonstr averun d lectores legere melius.</p>
                        <div className="m-bottom-40">
                            <ul className="list-unstyled bullet-list">
                                <li>Build next-generation web applications with a focus on the client</li>
                                <li>Redesign UI’s, implement new UI’s, and pick up Java as necessary.</li>
                                <li>Explore and design dynamic compelling consumer experiences.</li>
                                <li>Design and build scalable framework for web applications.</li>
                            </ul>{/*<!-- ends: .bullet--list2 -->*/}
                        </div>
                        <h5>Elementum Tortorvel Pretium</h5>
                        <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam hasellus verra cursus.</p>
                        <div className="row m-bottom-45">
                            <div className="col-lg-5">
                                <img src="./assets/img/c2.jpg" alt="" />
                            </div>
                            <div className="col-lg-7">
                                <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones haretra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas legere melius tones haretra.</p>
                            </div>
                        </div>
                        <h5>Financial Analysis Overview</h5>
                        <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Phasellus verrade monstr averun dlectores legere melius verrade monstr averun dlectores.</p>
                        <div className="m-bottom-45">
                            <ol className="list-unstyled">
                                <li>Professional delivers solutions</li>
                                <li>Business human capital research</li>
                                <li>Services complex problems bringing</li>
                                <li>Strategy works with senior executives</li>
                            </ol>{/*<!-- ends .number-list-->*/}
                        </div>
                        <img src="./assets/img/b3.jpg" alt="" />
                        <p className="m-top-30">Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas investig. Investiga tiones.</p>
                    </div>
                </div>
            </div>{/*<!-- ends: .post-details -->*/}
            <div className="post-bottom d-flex justify-content-between">
                <div className="tags">
                    <ul className="d-flex list-unstyled">
                        <li><NavLink to='/at_demo' onClick={noAction}>Business</NavLink></li>
                        <li><NavLink to='/at_demo' onClick={noAction}>Finance</NavLink></li>
                        <li><NavLink to='/at_demo' onClick={noAction}>Marketing</NavLink></li>
                    </ul>
                </div>
                <div className="social-share d-flex align-items-center">
                    <span className="m-right-15">Share Post: </span>                    
                    <ul className="social-share list-unstyled">
                        <li><NavLink to='/at_demo' onClick={noAction} className="facebook"><span className="fab fa-facebook-f"></span></NavLink></li>
                        <li><NavLink to='/at_demo' onClick={noAction} className="twitter"><span className="fab fa-twitter"></span></NavLink></li>
                        <li><NavLink to='/at_demo' onClick={noAction} className="linkedin"><span className="fab fa-linkedin-in"></span></NavLink></li>
                        <li><NavLink to='/at_demo' onClick={noAction} className="gplus"><span className="fab fa-google-plus-g"></span></NavLink></li>
                    </ul>                    
                </div>
            </div>{/*<!-- ends: .post-bottom -->*/}
            <div className="post-author cardify border">
                <div className="author-thumb">
                    <img src="./assets/img/auth1.png" alt="" className="rounded-circle" />
                </div>
                <div className="author-info">
                    <h5>About <span>Aazztech</span></h5>
                    <p>Business and Finance Sequitur mutatin onem consuetudium. Investiga tiones demonstr aver unt lectores legere me lius quod kqua legunt saepius. Claritas est etiam pro cessus averus.</p>
                    <div className="social-basic ">
                        <ul className="list-unstyled social-basic">
                            <li><NavLink to='/at_demo' onClick={noAction}><span className="fab fa-facebook-f"></span></NavLink></li>
                            <li><NavLink to='/at_demo' onClick={noAction}><span className="fab fa-twitter"></span></NavLink></li>
                            <li><NavLink to='/at_demo' onClick={noAction}><span className="fab fa-linkedin-in"></span></NavLink></li>
                            <li><NavLink to='/at_demo' onClick={noAction}><span className="fab fa-google-plus-g"></span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>{/*<!-- ends: .post-author -->*/}
            <div className="post-pagination">
                <div className="prev-post">
                    <span>Previous Post:</span>
                    <NavLink to='/at_demo' onClick={noAction} className="title">How to Run a Successful Business Meeting</NavLink>
                    <p><span>Aug 12, 2019</span> - In <NavLink to='/at_demo' onClick={noAction}>Industry</NavLink></p>
                </div>
                <div className="next-post">
                    <span>Next Post:</span>
                    <NavLink to='/at_demo' onClick={noAction} className="title">Exciting New Technologies Business Communication</NavLink>
                    <p><span>Aug 12, 2019</span> - In <NavLink to='/at_demo' onClick={noAction}>Industry</NavLink></p>
                </div>
            </div>{/*<!-- ends: .post-pagination -->*/}
            <div className="related-post m-top-60">
                <div className="related-post--title">
                    <h4>Related Post</h4>
                </div>
                <div className="row">
                {
                    Object.values(blog).slice(6, 9).map((value, key) => {
                        return (
                        <div className="col-lg-4 col-sm-6" key={value.id}>
                            <div className="single-post">
                                <img src={value.imgSrc} alt="" />
                                <h6><NavLink to={`/news-details${value.id}`} >Tejarat Starts Solutions Alliance Program</NavLink></h6>
                                <p><span>{value.date}</span> - In <NavLink to='/at_demo' onClick={noAction}>{value.industry}</NavLink></p>
                            </div>
                        </div>
                        )
                    })
                }
                   
                </div>
            </div>{/*<!-- ends: .related-post -->*/}
            <div className="comments-area m-top-60">
                <div className="comment-title">
                    <h4>5 Comments</h4>
                </div>
                <div className="comment-lists">
                    <ul className="media-list list-unstyled">
                        <li className="depth-1">
                            <div className="media">
                                <div>
                                    <NavLink to='/at_demo' onClick={noAction} className="cmnt_avatar">
                                        <img src="./assets/img/auth2.png" alt="" className="media-object rounded-circle" />
                                    </NavLink>
                                </div>
                                <div className="media-body">
                                    <div className="media_top">
                                        <div className="heading_left">
                                            <NavLink to='/at_demo' onClick={noAction}>
                                                <h6 className="media-heading">Thesera Minton</h6>
                                            </NavLink>
                                            <span>April 29, 2019</span>
                                        </div>
                                        <NavLink to='/at_demo' onClick={noAction} className="reply"><i className="la la-reply"></i> Reply</NavLink>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod
                                        tempor unt ut labore et dolore magna aliquat enim ad minim.</p>
                                </div>
                            </div>{/*<!-- ends: .media -->*/}
                            <ul className="children list-unstyled">
                                {/* <!-- Nested media object --> */}
                                <li className="depth-2">
                                    <div className="media">
                                        <div>
                                            <NavLink to='/at_demo' onClick={noAction} className="cmnt_avatar">
                                                <img src="./assets/img/auth3.png" className="media-object rounded-circle" alt="Sample Photos" />
                                            </NavLink>
                                        </div>
                                        <div className="media-body">
                                            <div className="media_top">
                                                <div className="heading_left">
                                                    <NavLink to='/at_demo' onClick={noAction}>
                                                        <h6 className="media-heading">Toriesta PingPong</h6>
                                                    </NavLink>
                                                    <span>April 29, 2019</span>
                                                </div>
                                                <NavLink to='/at_demo' onClick={noAction} className="reply"><i className="la la-reply"></i> Reply</NavLink>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they
                                                eiusmod tempor unt ut labore et dolore magna aliquat enim ad minim.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>{/*<!-- ends: .children -->*/}
                        </li>{/*<!-- ends: .depth-1 -->*/}
                        <li className="depth-1">
                            <div className="media">
                                <div>
                                    <NavLink to='/at_demo' onClick={noAction} className="cmnt_avatar">
                                        <img src="./assets/img/auth4.png" alt="" className="media-object rounded-circle" />
                                    </NavLink>
                                </div>
                                <div className="media-body">
                                    <div className="media_top">
                                        <div className="heading_left">
                                            <NavLink to='/at_demo' onClick={noAction}>
                                                <h6 className="media-heading">Jupiter Jhones</h6>
                                            </NavLink>
                                            <span>April 29, 2019</span>
                                        </div>
                                        <NavLink to='/at_demo' onClick={noAction} className="reply"><i className="la la-reply"></i> Reply</NavLink>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod
                                        tempor unt ut labore et dolore magna aliquat enim ad minim.</p>
                                </div>
                            </div>{/*<!-- ends: .media -->*/}
                        </li>{/*<!-- ends: .depth-1 -->*/}
                    </ul>{/*<!-- ends: .media-list -->*/}
                </div>{/*<!-- ends: .comment-lists -->*/}
                <div className="text-center m-top-50">
                    <NavLink to='/at_demo' onClick={noAction} className="btn btn-outline-secondary btn-icon icon-left"><i className="la la-refresh"></i> Load More</NavLink>
                </div>
            </div>{/*<!-- ends: .comment-area -->*/}
            <div className="comment-form cardify m-top-60 margin-md-60 border">
                <div className="comment-title">
                    <h5>Leave a Reply</h5>
                    <span>Your email address will not be published. Required fields are marked <span className="color-primary">*</span></span>
                </div>

                <div className="comment_form_wrapper m-top-40">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" placeholder="Name*" className="form-control m-bottom-30" required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" placeholder="Email*" className="form-control m-bottom-30" required />
                            </div>
                            <div className="col-md-12">
                                <textarea placeholder="Your Text" className="form-control m-bottom-30"></textarea>
                                <button className="btn btn-primary">Post Comment</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>{/*<!-- ends: .comment-form -->*/}
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        blog : state.blog
    }
}
export default connect(mapStateToProps)(DetailsContent);