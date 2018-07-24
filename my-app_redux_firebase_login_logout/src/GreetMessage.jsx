import React from 'react';
import './App.css';

class GreetMessage extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps inside GreetMessage' + nextProps);
    }
    render() {
        return (
            <div>
                <h1>hello {this.props.name}</h1>
                <h1>{this.props.message}</h1>
            </div>
        );
    }
};

export default GreetMessage;
