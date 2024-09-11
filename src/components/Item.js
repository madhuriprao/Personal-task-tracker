import { useState} from "react";
import Card from "./Card";
import Checkbox from "./Checkbox";

const Item = ({todo}) => {   //  Check if the todo prop is an object before accessing properties

    return(
            <Card reverse={true}>{ todo ? (
                <>
            <div className="title">{todo.title}</div>
            <div className="task">{todo.task}</div>
            <Checkbox/>
            </> 
            ) : (
                <div>No data available</div>
            )}</Card>
            
    )
}

export default Item;