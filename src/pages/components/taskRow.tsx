import { ButtonHTMLAttributes, useState } from "react";
import Itask from "./Itask";
import tscss from "./tasklist.module.css"


const TaskRow = (props: {task:Itask}) => {
    const [sTask, setsingleTask] = useState(props.task)
    const changeHandler = (event: React.ChangeEvent<HTMLButtonElement>) => {
        setsingleTask({ ...sTask, [event.currentTarget.name]: event.currentTarget.onclick })
      }

    return (
        <tr>
            <td>
                <button id={tscss.done} className="fa fa-check"></button>
                <p>{props.task.nameOfTask}</p>
                <p>{props.task.delete.toString()}</p>
                <button id={tscss.delete} className="fa fa-trash" name="delete" onChange={changeHandler}></button>
                <button id={tscss.archive} className="fa fa-archive"></button>
                {/* <button id={tscss.edit} className="fa fa-pencil"></button> */}
            </td>
      </tr>
    );
};

export default TaskRow;