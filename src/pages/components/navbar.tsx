import Link from 'next/link'
import navStyle from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className="todo-app" >
        <div className="container">
            <div className={navStyle.image}>
                <img  src="./check-list-doodle.jpg" width="125" height="125" />
            </div>
            <h1 className={navStyle.toDo}>To do List</h1>
        </div>
        <div className={navStyle.navbar}>
            <Link href="/">
                Home
            </Link>
        </div>
    </div>
    );
};

export default Navbar;