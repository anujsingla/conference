import React from 'react';
import './App.css';

class AddTodo extends React.Component { 
    handleSubmit = (e) => {
        e.preventDefault();
        var todoText = e.target.todoValue.value;
        if (todoText.length > 0) {
            e.target.todoValue.value = '';
            this.props.onAddTodo(todoText);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='todoValue' placeholder="What do you need to do?"/>
                    <button className="button">Add Todo</button>
                </form>
            </div>
        )}
};

export default AddTodo;
