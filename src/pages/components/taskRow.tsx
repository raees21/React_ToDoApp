import Itask from "./Itask";
import tscss from "./tasklist.module.css"


const TaskRow = (props: {task:Itask}) => {
    return (
        <tr>
            <td>
                <button id={tscss.done} className="fa fa-check" ></button>
                <p>{props.task.nameOfTask}</p>
                <button id={tscss.delete} className="fa fa-trash"></button>
                <button id={tscss.archive} className="fa fa-archive"></button>
                {/* <button id={tscss.edit} className="fa fa-pencil"></button> */}
            </td>
      </tr>
    );
};

export default TaskRow;