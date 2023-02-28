import { useState } from "react";
import tscss from "./tasklist.module.css"
import TaskRow from "./taskRow";
import Itask from "./Itask";

const taskArray:Itask[] = [];

const Tasklist = () => {
    const [tasks, settasks] = useState(taskArray)

    const addTask = () => {
      settasks([
        ...tasks, 
        {
          done: false,
          nameOfTask: "hello",
          delete: false,
          archive: false,
        }
      ]);
    };

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
      <div>
            {/* <!-- add a model for your input so on the text box it shoes something.. google model for input  --> */}
            <input type="text" contentEditable="true" />
            <button onClick={addTask} className={tscss.donebutton}>Done</button>
          </div>
      </div>
    )
};

export default Tasklist;