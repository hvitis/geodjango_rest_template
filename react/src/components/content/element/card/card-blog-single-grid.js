import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
class BlogSingle extends Component {
    render() {
        const { blog } = this.props;        
        return (
            <Fragment>
            {
                Object.values(blog).slice(0, 4).map((value, key) => {
                    const { imgSrc, title, date, content, id } = value;                    
                    return (                       
                        <div className={"blog-single"} key={key}>        
                        
                            <div className="card post--card post--card2 ">
                                <figure>
                                    <NavLink to={"/blog-details"+id}><img src={imgSrc} alt="" /></NavLink>
                                    <figcaption>
                                        <NavLink to={"/blog-details"+id}><i className="la la-image"></i></NavLink>
                                    </figcaption>
                                </figure>
                                <div className="card-body">
                                    <h3><NavLink to={"/blog-details"+id}>{title}</NavLink></h3>
                                    <ul className="post-meta list-unstyled">
                                        <li>{date}</li>
                                        <li>by <NavLink to="/at_demo" onClick={noAction}>Aazztech</NavLink></li>
                                        <li>in <NavLink to="/at_demo" onClick={noAction}>Event</NavLink></li>
                                        <li><NavLink to="/at_demo" onClick={noAction}>6 Comments</NavLink></li>
                                    </ul>
                                    <p>{content}</p>
                                </div>
                            </div>
                        
                        </div>                 
                    )
                })
            }
            </Fragment>
        )
    }
}

export default BlogSingle
