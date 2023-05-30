import { useState } from "react"
import { Link } from "react-router-dom"

export default function Item({ poster, handleAddToCart }) {
    const [style, setStyle] = useState({display: 'none'});

    return (
            <div className="item" onMouseEnter={() => setStyle({display: 'inline-block'})} onMouseLeave={() => setStyle({display: 'none'})}>
                <Link to={'/products/' + poster.id} style={{display: 'flex', flexDirection: 'column'}}>
                    <div className="img-container">
                        <img src={poster.link} alt={poster.name} /> 
                    </div>
                    <i className="name">{poster.name}</i>
                    <i className="price">{poster.price}</i>
                </Link>
                <button onClick={() => handleAddToCart(poster)} style={style}>+</button>
            </div>
    )
}