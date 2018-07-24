import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
// import uuid  from 'node-uuid';
import { connect } from 'react-redux';
import {AddTodoAction, setSearchText, toggleShowCompleted, startToggleTodo} from './action/todoAction'

class TodoApp extends React.Component {
    handleAddTodo = (todoValue) => {
        this.props.dispatch(AddTodoAction(todoValue));
    }
    handleSearch = (showCompleted, searchText) => {
        this.props.dispatch(toggleShowCompleted());
        this.props.dispatch(setSearchText(searchText));
    }
    filterTodos = (showCompleted, searchText, todos) => {
        let filteredTodos = todos;
        
        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => todo.completed === showCompleted);
    
        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
        return filteredTodos;
    }
    handleToggle = (id, completed) => {
        this.props.dispatch(startToggleTodo(id, completed));
    }
    render() {
        var filteredTodos = this.filterTodos(this.props.showCompleted, this.props.searchText, this.props.todos);
        return (
            <div className="container card text-center">
            <div className="card-header">
              <TodoSearch onSearch={this.handleSearch}/>
            </div>
            <div className="card-body">
                <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
            </div>
            <div className="card-footer text-muted">
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos || [],
    showCompleted: state.showCompleted || false,
    searchText: state.searchText || ''
});

export default connect(mapStateToProps)(TodoApp);