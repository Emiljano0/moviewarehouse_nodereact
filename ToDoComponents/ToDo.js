import React from "react"
import ToDoItem from "./ToDoItem"
import "./index.css"

function ToDo() {
    return (
        <div className="todo-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}


export default ToDo