import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Gallery extends Component {
    render() {
        const { gallery, gallery2 } = this.props;
        return (
            <Fragment>
                <div className="atbdb_content_module_contents">
                    <div className="gallery-wrapper">
                        <div className="gallery-images">
                        {
                            Object.values(gallery).map((value, key) => {
                                const { img } = value;
                                return (                       
                                    <div className="single-image" key={key}>
                                        <img src={img} alt="" />                                        
                                    </div>                  
                                )
                            })
                        }
                        </div>
                        <div className="gallery-thumbs">
                        {
                            Object.values(gallery2).map((value, key) => {
                                const { img } = value;
                                return (                       
                                    <div className="single-thumb" key={key}>
                                        <img src={img} alt="" />                                        
                                    </div>                  
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        gallery : state.gallery,
        gallery2 : state.gallery2
    }
}
export default connect(mapStateToProps)(Gallery)
