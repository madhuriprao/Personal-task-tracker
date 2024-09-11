import { useState} from "react";

const Item = ({todo}) => {   //  Check if the todo prop is an object before accessing properties

    return(
        <div className="todo-card">
            { todo ? (
                <>
            <div className="title">{todo.title}</div>
            <div className="task">{todo.task}</div>
            </> 
            ) : (
                <div>No data available</div>
            )}
        </div>
    )
}

export default Item;