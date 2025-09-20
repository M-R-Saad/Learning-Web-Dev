function Todo({task, status, time}) {
    return (
        <li className="todo">Task: {task}, Status: {status}, Time: {time > 50 ? `${time} min!` : `N/A, only ${time} min!`}</li>
    );
}

export default Todo;