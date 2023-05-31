import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <div className="home-left"></div>
            <div className="home-right">
                <h1>The Clone Wars Season 7 Posters</h1>
                <p>Now available for preorder, shipping August, 2023.</p>
                    <button><Link to='/catalog'>SHOP NOW</Link></button>
            </div>
        </div>   
    )
}