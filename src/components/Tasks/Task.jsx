import './task.scss'
import {Link} from "react-router-dom"

function Task({task, handleDeleteTask, handleChangeStatus,handleContentEditable}) {
    const {id, status, name} = task;


    return (
        <li
            className={status ? 'task done' : 'task'}>
            <i
                className='taskStatus'
                onClick={() => {
                handleChangeStatus(task)
            }}
            >

            </i>
            <span
                className='taskName'
                onBlur={(event) => handleContentEditable(event, task)}
                >
                <Link to={`/details/${id}`}>{name}</Link>
            </span>
            <button className='taskDeleteBtn' onClick={() => handleDeleteTask(task)}>x</button>
        </li>
    );
}

export default Task;