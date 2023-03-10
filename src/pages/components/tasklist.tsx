import { useContext, useState } from "react";
import tscss from "./tasklist.module.css"
import TaskRow from "./taskRow";
import Itask from "./Itask";
import { navigationContext } from "./app";
import NavValues from "@/helpers/navValues";

const Tasklist = (props: {taskArray:Itask[], singleTask:Itask}) => {
    const [tasks, settasks] = useState(props.taskArray)
    const [sTask, setsingleTask] = useState(props.singleTask)
    const { navigate } = useContext(navigationContext);

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
        <button onClick={() => navigate(NavValues.deleted)} className={tscss.donebutton} >Deleted</button>
        <table id={tscss.tasklist}>
        <thead>
          <tr className={tscss.hover}>
            <th>Active Task List</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
          <TaskRow key={task.nameOfTask} task={task}/>
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