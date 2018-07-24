import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component { 
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">ToDo App</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/greet" className="nav-item nav-link active">Greet</Link>
              </div>
            </div>
          </nav>        
        )}
};

export default Nav;
