import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import GreetMessage from './GreetMessage';
import GreetForm from './GreetForm';

class Greet extends React.Component { 
    state = {
        name: this.props.name // we can also give state value from props like this.props.name
    }
    static propTypes = {
        name: PropTypes.string.isRequired, // required props
        value: PropTypes.number // optional
    };

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps' + nextProps);
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate inside greet');
        return true;
    }

    static defaultProps = {
        name: 'react',
        message: 'This is the default message!!'     
    }
    onClickB = (nameValue) => {
        this.setState({name:nameValue});
    }
    render() {
        return (
            <div className="App">
                <GreetMessage name={this.state.name} message={this.props.message} />
                <GreetForm formMessage={this.onClickB}/>
            </div>
        )}
};

export default Greet;