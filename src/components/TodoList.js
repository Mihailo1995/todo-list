import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
    render() {
        return (
            <div>
                <h4>Todo List:</h4>
                <TodoItem />
            </div>
        );
    }
}

export default TodoList;