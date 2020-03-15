import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';

export class ContactForm extends Component {
    constructor (props) {
        super (props)
        this.state = {
            email:'',
            name: '',
            phone: '',
            message: ''
        }
        this.validator = new SimpleReactValidator();
        this.setStateFromInput = this.setStateFromInput.bind(this);
    }    
    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    _isMounted = false;
    
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render () {
        const Shipping_Address = (e) => {
            e.preventDefault()
            if (this.validator.allValid()) {
                console.log(this.state)
                alert('You submitted the form and stuff!');
                var success = true;                    
                return success;

            } else {
                this.validator.showMessages();
                this.forceUpdate();
                var success2 = false;
                return success2;
            }
        }
        return (
            <form id="atbdp-contact-form" className="form-vertical">
                <div className="form-group">
                    <input type="text" name="name" value={this.state.name} onChange={this.setStateFromInput} className="form-control" id="atbdp-contact-name" placeholder="Name" />
                </div>
                <div className="text-danger">{this.validator.message('Name', this.state.name, 'required|string')}</div>

                <div className="form-group">
                    <input type="email" name="email" value={this.state.email} onChange={this.setStateFromInput} className="form-control" id="atbdp-contact-email" placeholder="Email" />
                </div>
                <div className="text-danger">{this.validator.message('Email', this.state.email, 'required|email')}</div>

                <div className="form-group">
                    <textarea className="form-control"  name="message" value={this.state.message} onChange={this.setStateFromInput} id="atbdp-contact-message" rows="3" placeholder="Message" ></textarea>
                </div>
                                
                <button onClick={Shipping_Address} type="submit" className="btn btn-outline-secondary btn-block">Contact Agent</button>
            </form>       
        )
    }
}

export class ContactForm2 extends Component {
    constructor (props) {
        super (props)
        this.state = {
            email:'',
            name: '',
            phone: '',
            message: ''
        }
        this.validator = new SimpleReactValidator();
        this.setStateFromInput = this.setStateFromInput.bind(this);
    }    
    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    _isMounted = false;
    
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render () {
        const Shipping_Address = (e) => {
            e.preventDefault()
            if (this.validator.allValid()) {
                console.log(this.state)
                alert('You submitted the form and stuff!');
                var success = true;                    
                return success;

            } else {
                this.validator.showMessages();
                this.forceUpdate();
                var success2 = false;
                return success2;
            }
        }
        return (
            <form id="atbdp-contact-form" className="form-vertical">
                <div className="form-group">
                    <input type="text" name="name" value={this.state.name} onChange={this.setStateFromInput} className="form-control" id="atbdp-contact-name" placeholder="Name" />
                </div>
                <div className="text-danger">{this.validator.message('Name', this.state.name, 'required|string')}</div>

                <div className="form-group">
                    <input type="email" name="email" value={this.state.email} onChange={this.setStateFromInput} className="form-control" id="atbdp-contact-email" placeholder="Email" />
                </div>
                <div className="text-danger">{this.validator.message('Email', this.state.email, 'required|email')}</div>

                <div className="form-group">
                    <textarea className="form-control"  name="message" value={this.state.message} onChange={this.setStateFromInput} id="atbdp-contact-message" rows="3" placeholder="Message" ></textarea>
                </div>
                                
                <button onClick={Shipping_Address} className="btn btn-gradient btn-gradient-one btn-block">Send Message</button>
            </form>       
        )
    }
}
