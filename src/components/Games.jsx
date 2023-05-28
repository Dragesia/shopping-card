import Item from "./Item"

export default function Games({ games }) {
    return (
        <>
            {games.map(game => <Item poster={game} />)}
        </>
    )
}