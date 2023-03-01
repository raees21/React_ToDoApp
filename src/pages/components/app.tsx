import TaskList from "./tasklist";
import Navbar from "./navbar"
import Deleted from "./deleted";
import Itask from "./Itask";
import NavValues from "@/helpers/navValues";
import React, { useCallback, useState } from "react";
import INAV from "./INav";
import ComponentPicker from "./componentPicker";

const navigationContext = React.createContext<INAV>({current: NavValues.app, navigate: () => void{}});

const taskArray:Itask[] = [];

const singleTask:Itask = {
  done: false,
  nameOfTask: "",
  delete: false,
  archive: false,
};

const App = () => {
    const navigate = useCallback(
        (navTo:string) => setNav({current:navTo, navigate}), []
    );

    const [nav , setNav] = useState({current: NavValues.app, navigate})

    return(
        <navigationContext.Provider value={nav}>
            <Navbar/>
            <ComponentPicker currentNav={nav.current} taskArray={taskArray} singleTask={singleTask}/>
            {/* <TaskList taskArray={taskArray} singleTask={singleTask}/> */}
            {/* <Deleted/> */}
        </navigationContext.Provider>
        
    );
};

export default App;
