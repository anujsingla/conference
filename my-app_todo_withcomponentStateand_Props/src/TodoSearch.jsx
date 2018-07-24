import React from 'react';
import './App.css';

class AddTodo extends React.Component { 
    handleSearch = (e) => {
        e.preventDefault();
        const showCompleted = this.refs.showCompleted.checked;
        const searchText = this.refs.searchText.value;
    
        this.props.onSearch(showCompleted, searchText);
    }
    render() {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" name="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                    <input type="checkbox" ref="showCompleted" name="showCompleted" onChange={this.handleSearch}/>
                    Show completed todos
                    </label>
                </div>
            </div>
        )}
};

export default AddTodo;
