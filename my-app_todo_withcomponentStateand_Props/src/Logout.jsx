import React from 'react';
import './App.css';

class Logout extends React.Component {
    render() {
        return (
            <div className="container">
               <h2>Logout</h2>
               <form action="/action_page.php">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" className="form-control" id="confirmpwd" placeholder="Enter password" name="confirmpswd" />
                    </div>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </form>
            </div>
        );
    }
};

export default Logout;
