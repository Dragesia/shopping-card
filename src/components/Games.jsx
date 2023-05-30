import Item from "./Item"

export default function Games({ games, handleAddToCart }) {
    return (
        <div className="games">
            {games.map(game => <Item poster={game} handleAddToCart={handleAddToCart} key={game.id}/>)}
        </div>
    )
}