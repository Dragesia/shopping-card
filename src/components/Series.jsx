import Item from "./Item"

export default function Series({ series }) {
    return (
        <div className="series">
            {series.map(serie => <Item poster={serie} />)}
        </div>
    )
}