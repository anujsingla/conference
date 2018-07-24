import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


class Greet extends React.Component {
    
    static propTypes = {
        name: PropTypes.string.isRequired, // required props
        value: PropTypes.number // optional
    };

    static defaultProps = {
        name: 'react'     
    }
    render() {
        return (
            <div className="App">
                <h1>hello {this.props.name}</h1>
                <h1>Value {this.props.value}</h1>
            </div>
        );
  }
};

export default Greet;
