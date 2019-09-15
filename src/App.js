import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export class App extends Component {
    state = {
        items: [
            { id: 1, title: "Wake up" },
            { id: 2, title: "Make breakfast" }
        ],
        id: uuid(),
        item: "",
        editItem: false
    };

    handleChange = (e) => {
        console.log("handle change");
    };

    handleSubmit = (e) => {
        console.log("handle submit");
    };

    clearList = () => {
        console.log("clear list");
    };

    handleDelete = (id) => {
        console.log(`handle delete id: ${id}`);
    };

    handleEdit = (id) => {
        console.log(`handle edit id: ${id}`);
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
