import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {startLogout} from './action/todoAction';

class Nav extends React.Component { 
    onButtonClick = (e) => {
        this.props.dispatch(startLogout());
    }
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
                <Link to="/todo" className="nav-item nav-link active">Todo</Link>
                {(this.props.uid === '' &&
                    <Link to="/login" className="nav-item nav-link active">Login</Link>
                )}
                {(this.props.uid !== '' &&
                    <Link to="/login" onClick={this.onButtonClick} className="nav-item nav-link active">Logout</Link>
                )}
              </div>
            </div>
          </nav>        
        )}
};

const mapStateToProps = (state, ownProps) => ({
    uid: state.auth.uid || '',
});

export default connect(mapStateToProps)(Nav);