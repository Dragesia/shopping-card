import Item from "./Item"

export default function Movies({ movies, handleAddToCart }) {
    return (
        <div className="movies">
            {movies.map(movie => <Item poster={movie} handleAddToCart={handleAddToCart} key={movie.id}/>)}
        </div>
    )
}