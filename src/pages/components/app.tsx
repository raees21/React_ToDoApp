import TaskList from "./tasklist";
import Navbar from "./navbar"


const App = () => {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <TaskList/>
            </div>

        </div>
    );
};

export default App;
