import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class Accordion extends Component {

    render() {
        return (
            <Fragment>               
                <div className="atbdb_content_module_contents">
                    <div className="atbdp-accordion">
                        <div className="accordion-single selected">
                            <h3 className="faq-title"><NavLink onClick={noAction} to="/at_demo">Question number one</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high level of precision, full legal compliance</p>
                        </div>
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink onClick={noAction} to="/at_demo">Question number two and others</NavLink></h3>
                            <p className="ac-body" style={{display: 'none'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                        </div>
                    </div>
                </div>           
            </Fragment>
        )
    }
}

export class Accordion2 extends Component {

    render() {
        return (
            <Fragment>               
                <div className="atbdb_content_module_contents">
                    <div className="atbdp-accordion">
                        <div className="accordion-single selected">
                            <h3 className="faq-title"><NavLink to="/at_demo" onClick={noAction}>How to open an account?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Nemo ucxqui officia voluptatem accusantium.</p>
                        </div>
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/at_demo" onClick={noAction}>How to add listing?</NavLink></h3>
                            <p className="ac-body" style={{display: 'none'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                        </div>
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/at_demo" onClick={noAction}>What is featured listing?</NavLink></h3>
                            <p className="ac-body" style={{display: 'none'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                        </div>
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/at_demo" onClick={noAction}>How to add listing?</NavLink></h3>
                            <p className="ac-body" style={{display: 'none'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                        </div>
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/at_demo" onClick={noAction}>What is featured listing?</NavLink></h3>
                            <p className="ac-body" style={{display: 'none'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                        </div>
                    </div>
                </div>           
            </Fragment>
        )
    }
}