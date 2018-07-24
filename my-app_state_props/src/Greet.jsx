import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Greet extends React.Component { 
    state = {
        name: this.props.name // we can also give state value from props like this.props.name
    }
    static propTypes = {
        name: PropTypes.string.isRequired, // required props
        value: PropTypes.number // optional
    };

    static defaultProps = {
        name: 'react',
        message: 'This is the default message!!'     
    }
    onButtonClick = (e) => {
        e.preventDefault();
        const nameValue = e.target.name.value;
        e.target.name.value = '';
        console.log(nameValue);
        this.setState({name:nameValue});
    }
    render() {
        return (
            <div className="App">
                <h1>hello {this.state.name}</h1>
                <h1>{this.props.message}</h1>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" name='name'></input>
                    <button>set name</button>
                </form>
            </div>
        )}
};

export default Greet;
