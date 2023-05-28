import Item from "./Item"

export default function Series({ series }) {
    return (
        <>
            {series.map(serie => <Item poster={serie} />)}
        </>
    )
}