import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar({ category, setCategory }) {
    return (
        <div className="content-container">
            <nav className="sidebar">
                <div className="category">{category}</div>
                <ul>
                    <li>
                        <Link to='movies' onClick={() => setCategory('Movie Posters')}>Movies</Link>
                    </li>
                    <li>
                        <Link to='series' onClick={() => setCategory('TV Series Posters')}>Series</Link>
                    </li>
                    <li>
                        <Link to='games' onClick={() => setCategory('Game Posters')}>Games</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>     
    )
}