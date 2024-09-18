import { useState } from "react";
import { v4 as uuid } from "uuid"; 
import List from "./List";
import todoData from "../data/Todo";
import Form from "./Form";

const Home = () => {
    const [todo, setTodo] = useState(todoData);

    const addTodo = (newTodo) => {
        newTodo.id = uuid(); // Corrected usage
        newTodo.done = false;
        setTodo([newTodo, ...todo]);
    }

    const handleDelete = (id) => { // Added handleDelete
        setTodo(todo.filter(item => item.id !== id));
    }

    const handleEdit = (updatedTodo) => {
        setTodo(todo.map(item => (item.id === updatedTodo.id ? updatedTodo : item))); // Replace the updated item in the list
    };

    return (
        <div className="container">
            <Form addTodo={addTodo} />
            <List todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} /> {/* Pass handleDelete */}
        </div>
    )
}

export default Home;