import './toggleStatus.scss'

function ToggleStatus({handleAllDone, tasks}) {
    return (
            <i
                className={tasks.every((task) => task.status === true) ? 'toggleStatus done': 'toggleStatus'}
                onClick={handleAllDone}
            ></i>
    );
}

export default ToggleStatus;