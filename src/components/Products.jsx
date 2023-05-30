import Item from "./Item"

export default function Products({ products, handleAddToCart }) {
    return (
        <>
            <div className="products">
            {products.map(product => {
                return product.items.map(item => <Item poster={item} handleAddToCart={handleAddToCart} key={item.id}/>);
            })}
            </div>
        </>
    )   
}