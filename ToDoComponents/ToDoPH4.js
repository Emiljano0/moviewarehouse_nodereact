import React from "react"
import ToDoItemPH4 from "./ToDoItemPH4"
import toDoData_Obj from "./ToDoData"
import "./index.css"

class ToDoPH4 extends React.Component {

    constructor() {
        super()
        this.state = {
            toDoStateArray: toDoData_Obj
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(function(prevState){
           const updatedToDoArray = prevState.toDoStateArray.map(function(map_fnct_param) {
                if (map_fnct_param.id === id) {
                    map_fnct_param.completed = !map_fnct_param.completed
                }
                return map_fnct_param
           })
           return {
                toDoStateArray: updatedToDoArray
           }
        })    }

    render() {

        const toDoArray = this.state.toDoStateArray.map(fnct_param =>
                <div className="todo-list">
                    <ToDoItemPH4
                        key={fnct_param.id}
                        item={fnct_param}
                        handleChange={this.handleChange}
                    />
                </div>
            )

        return (
            <div>
                {toDoArray}
            </div>
        )

    }

}


export default ToDoPH4