import Item from "./Item"

export default function Movies({ movies }) {
    return (
        <>
            {movies.map(movie => <Item poster={movie} />)}
        </>
    )
}