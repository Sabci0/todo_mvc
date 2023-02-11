import './InputWrapper.scss'
import InputTask from "./InputTask";
import ToggleStatus from "../ToggleStatus/ToggleStatus";

function InputWrapper({value, handleInput, handleAddTask, handleAllDone, doneAll,tasks}) {
    return (
        <div className='inputWrapper'>
            {!!tasks.length && (
            <ToggleStatus doneAll={doneAll} handleAllDone={handleAllDone}/>
                )}
            <InputTask
                value={value}
                handleInput={handleInput}
                handleAddTask={handleAddTask}
            />
        </div>
    );
}

export default InputWrapper;