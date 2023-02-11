import './toggleStatus.scss'

function ToggleStatus({handleAllDone, doneAll}) {
    return (
            <i
                className={doneAll ? 'toggleStatus done': 'toggleStatus'}
                onClick={handleAllDone}
            ></i>
    );
}

export default ToggleStatus;