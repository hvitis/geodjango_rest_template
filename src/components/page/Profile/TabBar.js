import React from 'react';

const TabBar = () => {
    return (
        <div>
            <div className="tab-pane fade" id="prints" role="tabpanel" aria-labelledby="prints-tab">
                <div className="container">
                    <div className="row">
                        <div className="alert alert-success" role="alert">
                            Prints
                                            </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="listings" role="tabpanel" aria-labelledby="all-listings">
                <div className="container">
                    <div className="row">
                        <div className="alert alert-success" role="alert">
                            all-listings
                                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabBar;

