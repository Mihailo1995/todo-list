import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export class App extends Component {
    state = {
        items: [],
        item: "",
        id: uuid(),
        editItem: false
    };

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            title: this.state.item,
            id: this.state.id
        };
        const updatedItems = [...this.state.items, newItem];
        this.setState(
            {
                items: updatedItems,
                item: "",
                id: uuid(),
                editItem: false
            },
            () => console.log(this.state)
        );
    };

    clearList = () => {
        this.setState({
            items: []
        });
    };

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter((item) => item.id !== id);
        this.setState({
            items: filteredItems
        });
    };

    handleEdit = (id) => {
        const filteredItems = this.state.items.filter((item) => item.id !== id);
        // find() method returns the value of the first element in the provided array that satisfies the provided testing function
        const selectedItem = this.state.items.find((item) => item.id === id);
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            id: id,
            editItem: true
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">
                            Todo input:
                        </h3>
                        <TodoInput
                            item={this.state.item}
                            editItem={this.state.editItem}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <TodoList
                            items={this.state.items}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
