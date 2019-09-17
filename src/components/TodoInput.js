import React, { Component } from "react";

export class TodoInput extends Component {
    render() {
        const { item, editItem, handleChange, handleSubmit } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        // if item is "", button will be disabled, bcs Boolean("") = false
                        disabled={item ? false : true}
                        className={
                            editItem
                                ? "btn btn-block btn-success mt-3"
                                : "btn btn-block btn-primary mt-3"
                        }
                    >
                        {editItem ? "Edit Item" : "Add Item"}
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;
