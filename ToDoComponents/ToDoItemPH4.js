import React from "react"
import "./ToDoItem.css"


function ToDoItemPH4(props) {

        const stylecss = {
            backgroundColor: "green",
            fontWeight: "bold",
            color: "white"
        }

        return(
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)}
                />
                <p style={props.item.completed ? stylecss : null}>{props.item.title}</p>
            </div>

        )

}


export default ToDoItemPH4