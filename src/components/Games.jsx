import Item from "./Item"

export default function Games({ games }) {
    return (
        <div className="games">
            {games.map(game => <Item poster={game} />)}
        </div>
    )
}