import Task from "./Task";
import './tasks.scss'


function Tasks({tasks, filter, handleDeleteTask, handleChangeStatus,handleContentEditable}) {
    return (
        <ul className='tasks'>
            {tasks
                .filter((task) => filter === 'all' ? true : task.status === filter)
                .map((task) => (
                    <Task
                        key={task.id}
                        handleContentEditable={handleContentEditable}
                        handleDeleteTask={handleDeleteTask}
                        handleChangeStatus={handleChangeStatus}
                        task={task}
                    />
                ))}
        </ul>
    );
}

export default Tasks;