import { Link } from "react-router-dom"

export default function Item({ poster }) {
    return (
        <Link to={'/products/' + poster.id}>
            <div className="item">
                <img src={poster.link} alt={poster.name} />
                <i className="name">{poster.name}</i>
                <i className="price">{poster.price}</i>
            </div>
        </Link>
    )
}