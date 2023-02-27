import tscss from "./tasklist.module.css"

const Tasklist = () => {
    return (
        <table id={tscss.tasklist}>
        <thead>
        <tr className={tscss.hover}>
          <th>Active Task List</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <button id={tscss.done} className="fa fa-check" ></button>
            <button id={tscss.delete} className="fa fa-trash"></button>
            <button id={tscss.archive} className="fa fa-archive"></button>
            <button id={tscss.edit} className="fa fa-pencil"></button>
    
            <div>
              {/* <!-- add a model for your input so on the text box it shoes something.. google model for input  --> */}
              <input type="text" contentEditable="true" /> 
              
              <button className={tscss.donebutton}>Done</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    )
};

export default Tasklist;