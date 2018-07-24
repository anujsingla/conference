import React from 'react';
// import './App.css';
import Login from './Login';
import Logout from './Logout';


class Main extends React.Component { 
    render() {
        return (
            <div className="bold">
                 <br />
                <br />
                <Login />
                <br />
                <br />
                <Logout />
            </div>
        )}
};

export default Main;
