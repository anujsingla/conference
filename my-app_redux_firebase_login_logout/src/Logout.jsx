import React from 'react';
import './App.css';
import {createAccount} from './action/todoAction';
import { connect } from 'react-redux';

class Logout extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pswd = e.target.pswd.value;
        e.target.email.value = '';
        e.target.pswd.value = '';
        e.target.confirmpswd.value = '';
        this.props.dispatch(createAccount(email, pswd));
    }
    render() {
        return (
            <div className="container">
               <h2>Logout</h2>
               <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" className="form-control" id="confirmpwd" placeholder="Enter password" name="confirmpswd" />
                    </div>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </form>
            </div>
        );
    }
};

export default connect()(Logout);
