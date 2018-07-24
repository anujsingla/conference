import React from 'react';
import './App.css';
import Todo from './Todo';

class TodoList extends React.Component {
    renderTodos = (todos) => {
        if (todos.length === 0) {
            return (
              <p className="container__message">Nothing To Do</p>
            );
          }
          return todos.map((todo) => {
            return (
              <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
            );
          }); 
    } 
    render() {
        return (
            <div>
                {this.renderTodos(this.props.todos)}
            </div>
        );
    }
};

export default TodoList;
