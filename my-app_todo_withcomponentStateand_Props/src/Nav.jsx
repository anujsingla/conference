import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component { 
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">ToDoApp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/greet" className="nav-item nav-link active">Greet</Link>
                <Link to="/todo" className="nav-item nav-link active">Todo</Link>
              </div>
            </div>
          </nav>        
        )}
};

export default Nav;
