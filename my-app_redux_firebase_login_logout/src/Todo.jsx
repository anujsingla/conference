import React from 'react';
import './App.css';

class Todo extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item justify-content-between align-items-center">
                    <input type="checkbox" onClick={() => {this.props.onToggle(this.props.id, !this.props.completed);}} className='margin-right-20' checked={this.props.completed}/>
                    <span className="badge badge-primary badge-pill">{this.props.text}</span>
                </li>
            </ul>
        );
    }
};

export default Todo;
