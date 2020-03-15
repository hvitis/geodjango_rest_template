import React, { Component, Fragment } from 'react';

export class Video extends Component {

    render() {
        return (
            <Fragment>               
                <div className="atbdb_content_module_contents">
                    <div className="video-wrapper">
                        <figure>
                            <img src="./assets/img/video.jpg" alt="" />
                            <figcaption>
                                <a href="https://www.youtube.com/watch?v=0C4fX_x_Vsg" className="video-iframe play-btn">
                                    <span className="la la-youtube-play"></span>
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                </div>                
            </Fragment>
        )
    }
}

export class Video2 extends Component {
    render() {
        return (
            <Fragment>               
                 <div className="widget atbd_widget widget-card">
                    <div className="atbd_widget_title">
                        <h4><span className="la la-youtube"></span> Sidebar Video</h4>
                    </div>
                    <div className="widget-body atbdp-video">
                        <figure>
                            <img src="./assets/img/video-bg-sm.jpg" alt="" />
                            <figcaption>
                                <a href="https://www.youtube.com/watch?v=0C4fX_x_Vsg" className="video-iframe play-btn play-btn-sm"><span><i className="la la-play"></i></span></a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </Fragment>
        )
    }
}
