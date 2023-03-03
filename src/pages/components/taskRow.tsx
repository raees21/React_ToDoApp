import { ButtonHTMLAttributes, useState } from "react";
import Itask from "./Itask";
import tscss from "./tasklist.module.css"


const TaskRow = (props: {task:Itask}) => {
    // const [sTask, setsingleTask] = useState(props.task)
    // const changeHandler = (event: React.ChangeEvent<HTMLButtonElement>) => {
    //     setsingleTask({ ...sTask, [event.currentTarget.name]: event.currentTarget.onclick })
    //   }
    const [done, setDone] = useState(props.task.done)
    const [taskName, setTaskName] = useState(props.task.nameOfTask);

    const completeTask = () => {
        setDone(!done);
    };

    return (
        <tr>
            <td>
                <button id={tscss.done} className="fa fa-check" onClick={completeTask}></button>
                <p>{taskName}</p>
                <p>{done.toString()}</p>
                <button id={tscss.delete} className="fa fa-trash"></button>
                <button id={tscss.archive} className="fa fa-archive"></button>
                {/* <button id={tscss.edit} className="fa fa-pencil"></button> */}
            </td>
      </tr>
    );
};

export default TaskRow;