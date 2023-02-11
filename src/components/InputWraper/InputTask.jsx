import './InputWrapper.scss'
function InputTask({value, handleInput, handleAddTask}) {
    return (
        <div>
            <input
                className='inputTask'
                type="text"
                onKeyUp={handleAddTask}
                onChange={handleInput}
                value={value}
                placeholder="what needs to be done?"/>
        </div>
    );
}

export default InputTask;