import React from "react";

function Task(props) {
    return (
        <div className="list-item" onClick={() => props.onChecked(props.id)}>
            <li>{props.content}</li>
        </div>
    );
}

export default Task;

/* 
function toggleStrike(event) {
    var test = event.target.style.textDecoration;
    test === ""
        ? (event.target.style.textDecoration = "line-through")
        : (event.target.style.textDecoration = "");
}

function Task(props) {
    return (
        <div>
            <li onClick={toggleStrike}>{props.content}</li>
        </div>
    );
}
 */

/* 
function Task(props) {
    const [isDone, setIsDone] = useState(false);

    function toggleStrike() {
        setIsDone((prev) => !prev);
    }

    return (
        <div className="list-item" onClick={toggleStrike}>
            <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
                {props.content}
            </li>
        </div>
    );
}
 */

