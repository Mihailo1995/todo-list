import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;

        return (
            <ul className="list-group my-5">
                <h3 className="text-center">Todo List:</h3>
                {items.map((item) => (
                    <TodoItem
                        title={item.title}
                        id={item.id}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                    />
                ))}
                <button
                    className="btn btn-block btn-danger mt-5"
                    onClick={clearList}
                >Clear List</button>
            </ul>
        );
    }
}

export default TodoList;
