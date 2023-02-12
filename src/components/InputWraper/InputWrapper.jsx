import './InputWrapper.scss'
import InputTask from "./InputTask";
import ToggleStatus from "../ToggleStatus/ToggleStatus";

function InputWrapper({handleAddTask, handleAllDone, tasks}) {
    return (
        <div className='inputWrapper'>
            {!!tasks.length && (
            <ToggleStatus tasks={tasks} handleAllDone={handleAllDone}/>
                )}
            <InputTask

                handleAddTask={handleAddTask}
            />
        </div>
    );
}

export default InputWrapper;