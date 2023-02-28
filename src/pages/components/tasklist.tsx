import { useState } from "react";
import tscss from "./tasklist.module.css"
import TaskRow from "./taskRow";
import Itask from "./Itask";

const taskArray:Itask[] = [];

const singleTask:Itask = {
  done: false,
  nameOfTask: "",
  delete: false,
  archive: false,
};

const Tasklist = () => {
    const [tasks, settasks] = useState(taskArray)
    const [sTask, setsingleTask] = useState(singleTask)

    const addTask = () => {
      settasks([
        ...tasks, 
        sTask
      ]);
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setsingleTask({ ...sTask, [event.currentTarget.name]: event.currentTarget.value })
    }

    return (
      <div>
        <table id={tscss.tasklist}>
        <thead>
          <tr className={tscss.hover}>
            <th>Active Task List</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((h) => (
          <TaskRow key={h.nameOfTask} task={h}/>
          ))}
        </tbody>
      </table>
      <div id={tscss.tasklist}>
            <input type="text" contentEditable="true" name="nameOfTask" placeholder="Enter Task" onChange={changeHandler}/>
            <button onClick={addTask} className={tscss.donebutton} >Add</button>
          </div>
      </div>
    )
};

export default Tasklist;