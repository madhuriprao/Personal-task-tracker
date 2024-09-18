import { useState } from "react";
import { MdDeleteForever, MdEdit, MdOutlineCalendarToday } from "react-icons/md";
import Card from "./Card";
import Checkbox from "./Checkbox";

const Item = ({ todo, handleDelete, handleEdit }) => { // Destructure handleDelete
    const [done, setDone] = useState(todo.done);
    const [isEditing, setIsEditing] = useState(false); // Track whatever I edit
    const [editedTodo, setEditedTodo] = useState({ ...todo }); //storing the edited value

    // Toggle editing state
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    // Handle input changes when editing
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTodo({ ...editedTodo, [name]: value });
    };

    // Save changes when editing is complete
    const handleSave = () => {
        handleEdit(editedTodo); // Call handleEdit to update the todo in the parent state
        setIsEditing(false); // Exit edit mode
    };

    return (
        <Card>
            <div className="card-container">
                <div className="flex-container">
                    {isEditing ? (
                        // Show form fields when editing
                        <div className="edit-fields">
                            <input
                                type="text"
                                name="title"
                                value={editedTodo.title}
                                onChange={handleInputChange}
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                name="task"
                                value={editedTodo.task}
                                onChange={handleInputChange}
                                placeholder="Task"
                            />
                            <select
                                name="day"
                                value={editedTodo.day}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>Select day</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>
                    ) : (
                        // Show todo details when not editing
                        <>
                            <div className="title">{todo.title}</div>
                            <div className="btns">
                                <MdEdit
                                    style={{ color: "#f7cd62", marginRight: ".5rem", cursor: "pointer" }}
                                    onClick={handleEditClick} // Toggle edit mode
                                />
                                <MdDeleteForever
                                    style={{ color: "#ed844f", cursor: "pointer" }}
                                    onClick={() => handleDelete(todo.id)} // Delete the item
                                />
                            </div>
                        </>
                    )}
                </div>

                {isEditing ? (
                    <button className="save-btn" onClick={handleSave}>Save</button>
                ) : (
                    <div className="task">{todo.task}</div>
                )}

                <div className="flex-container">
                    <div className="day">
                        <MdOutlineCalendarToday className="calendar" />
                        <p>{todo.day}</p>
                    </div>

                    <Checkbox
                        label={done === true ? "Done" : "Doing"}
                        value={done}
                        onChange={(e) => setDone(e.target.checked)}
                    />
                </div>
            </div>
        </Card>
    );
};

export default Item;