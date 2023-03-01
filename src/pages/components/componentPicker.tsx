import NavValues from "@/helpers/navValues";
import Deleted from "./deleted";
import Itask from "./Itask";
import Tasklist from "./tasklist";

const ComponentPicker = (props: { currentNav: any; taskArray: Itask[]; singleTask: Itask; }) => {
    switch (props.currentNav){
        case NavValues.app:
            return <Tasklist taskArray={props.taskArray} singleTask={props.singleTask}/>
        case NavValues.deleted:
            return <Deleted/>
        default:
            return (
                <h3>
                    No Component Found
                </h3>
            )
    }
}

export default ComponentPicker;