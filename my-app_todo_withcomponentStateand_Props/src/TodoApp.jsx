import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import uuid  from 'node-uuid';

class TodoApp extends React.Component {
    state = {
        showCompleted: false,
        searchText: '',
        todos: [{
            id: 1,
            text: 'Some text here',
            completed: true
          },{
            id: 2,
            text: 'Other text here',
            completed: false
          }]
    }
    handleAddTodo = (todoValue) => {
        this.setState({
            todos: [
              ...this.state.todos,
              {
                id: uuid(),
                text: todoValue,
                completed: false,
              }
            ]
          });
    }
    handleSearch = (showCompleted, searchText) => {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
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
    handleToggle = (id) => {
        let updatedTodos = this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        this.setState({todos: updatedTodos});
      }
    render() {
        var filteredTodos = this.filterTodos(this.state.showCompleted, this.state.searchText, this.state.todos);
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

export default TodoApp;
