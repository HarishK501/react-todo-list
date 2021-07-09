import React, { useState } from "react";
import Task from "./Task";
import InputArea from "./InputArea";

function App() {
    const [tasks, setTasks] = useState([]);

    function addTask(_task) {
        setTasks((prev) => {
            return [...prev, _task];
        });
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
            <InputArea onSubmit={addTask} />
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
