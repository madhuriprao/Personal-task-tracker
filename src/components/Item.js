import { useState} from "react";

const Item =()=>{
    const [title, settitle]=useState("Title");
    const [task, setTask]=useState("Tasks");


    return(
        <div className="todo-card">
            <div className="title">{title}</div>
            <div className="task">{task}</div>
        </div>
    )
}

export default Item;