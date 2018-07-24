import React from 'react';
import './App.css';
import {startLogin} from './action/todoAction';
import { connect } from 'react-redux';

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pswd = e.target.pswd.value;
        e.target.email.value = '';
        e.target.pswd.value = '';
        this.props.dispatch(startLogin(email, pswd));
    }
    render() {
        return (
            <div className="container">
               <h2>Login</h2>
               <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" id="email1" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="pwd1" placeholder="Enter password" name="pswd" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
};

export default connect()(Login);
