import TaskList from "./tasklist";
import Navbar from "./navbar"
import Deleted from "./deleted";
import Itask from "./Itask";

const taskArray:Itask[] = [];

const singleTask:Itask = {
  done: false,
  nameOfTask: "",
  delete: false,
  archive: false,
};

const App = () => {
    return(
        <>
            <Navbar/>
            <TaskList taskArray={taskArray} singleTask={singleTask}/>
            {/* <Deleted/> */}
        </>
        
    );
};

export default App;
