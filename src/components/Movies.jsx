import Item from "./Item"

export default function Movies({ movies }) {
    return (
        <div className="movies">
            {movies.map(movie => <Item poster={movie} />)}
        </div>
    )
}