import Item from "./Item"

export default function Series({ series, handleAddToCart }) {
    return (
        <div className="series">
            {series.map(serie => <Item poster={serie} handleAddToCart={handleAddToCart} key={serie.id}/>)}
        </div>
    )
}