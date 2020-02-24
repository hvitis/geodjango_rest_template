import React from 'react';

const MainTabBar = () => {
    return (
        <div className="dashboard-nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="dashboard-nav-area">
                            <ul className="nav" id="dashboard-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">My Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="all-listings" data-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="false">My Print3rs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="prints-tab" data-toggle="tab" href="#prints" role="tab" aria-controls="prints" aria-selected="false">My Prints</a>
                                </li>
                            </ul>
                        </div>
                    </div>{/*<!-- ends: .col-lg-12 -->*/}
                </div>
            </div>
        </div>
    );
};

export default MainTabBar;
