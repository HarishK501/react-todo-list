import React, { useState } from "react";
import Task from "./Task";

function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleChange(event) {
        const { value } = event.target;
        setTask(value);
    }

    function handleSubmit() {
        setTasks((prev) => {
            return [...prev, task];
        });
        setTask("");
    }

    function removeTask(id) {
        setTasks((prev) => {
            return prev.filter((_task, _id) => _id !== id);
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={handleChange} value={task} />
                <button onClick={handleSubmit}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {tasks.map((task, index) => {
                        return (
                            <Task
                                key={index}
                                id={index}
                                onChecked={removeTask}
                                content={task}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
