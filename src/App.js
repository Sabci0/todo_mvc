import {useEffect, useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import InputWrapper from "./components/InputWraper/InputWrapper";
import Tasks from "./components/Tasks/Tasks";
import {TaskCounter} from "./components/TaskCounter/TaskCounter";
import {Filters} from "./components/Filters/Filters";
import {ClearCompleted} from "./components/ClearCompleted/ClearCompleted";
import {addTaskApi, changeStatusApi, deleteTaskApi, getAllTasksApi} from "./helpers/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');


  useEffect( () => {
    const controller = new AbortController()
    getAllTasksApi(controller.signal).then(setTasks);

    return () => {
      controller.abort()
    }
  }, [])

  async function handleAddTask(value){
    const task = await addTaskApi({name: value, status: false, createdAt: new Date()})
      setTasks([...tasks, task]);
  }


  async function handleChangeStatus(task){
   task.status = !task.status;
   await changeStatusApi(task.id, task.status)
   setTasks([...tasks])
  }

  async function handleDeleteTask(taskToRemove){
    await deleteTaskApi(taskToRemove.id);
    setTasks(tasks.filter((task) => task !== taskToRemove));
  }

  async function handleDeleteAllTasks(){
    const filteredTask = [];
    for (const task of tasks){
      if (task.status){
        await deleteTaskApi(task.id)
      } else {
        filteredTask.push(task)
      }
    }
    setTasks(filteredTask);
  }

  async function handleDoneAllDone() {
    let done = tasks.every((task) => task.status === true);
    const mappedTasks = [];

    for (const task of tasks){
      mappedTasks.push({...task, status: !done})
      await changeStatusApi(task.id, !done)
    }

    setTasks(tasks.map((task) => ({...task, status: !done})));
  }

  function handleContentEditable(event, taskToChange){
    setTasks(tasks.map((task) => {
      if (task === taskToChange) {
        task.name = event.target.innerText
      }
      return task
    }))
  }
  return (
      <div>
        <Header/>
        <InputWrapper
            tasks={tasks}
            handleAllDone={handleDoneAllDone}

            handleAddTask={handleAddTask}

        />
        {!!tasks.length && (
            <>
              <Tasks
                  handleContentEditable={handleContentEditable}
                  tasks={tasks}
                  filter={filter}
                  handleChangeStatus={handleChangeStatus}
                  handleDeleteTask={handleDeleteTask}
              />
              <div>
                <TaskCounter tasks={tasks} predicate={(task) => !task.status}/>
                <Filters onClick={() => setFilter('all')} onClick1={() => setFilter(false)}
                         onClick2={() => setFilter(true)}/>
                {!!tasks.filter((task) => task.status).length && (
                    <ClearCompleted onClick={handleDeleteAllTasks}/>)}
              </div>
            </>
        )}

      </div>
  );
}

export default App;
