import React from "react";

function Todo(props) {
    return (
        <div>
            <li>{props.todo}</li>
            <button type="submit" onClick={props.add}>Add</button>
            <button type="submit" onClick={props.delete} >Delete</button>
        </div>
    )
}

export default Todo;