import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="content-container">
            <nav className="sidebar">
                <ul>
                    <li>
                        <Link to='movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='series'>Series</Link>
                    </li>
                    <li>
                        <Link to='games'>Games</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>     
    )
}