import React from 'react';
import './App.css';

class GreetForm extends React.Component { 
    onButtonClick = (e) => {
        e.preventDefault();
        const nameValue = e.target.name.value;
        e.target.name.value = '';
        this.props.formMessage(nameValue);
        // console.log(nameValue);
        // this.setState({name:nameValue});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" name='name'></input>
                    <button>set name</button>
                </form>
            </div>
        )}
};

export default GreetForm;
