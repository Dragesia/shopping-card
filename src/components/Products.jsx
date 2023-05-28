import Item from "./Item"

export default function Products({ products }) {
    return (
        <>
            <div className="products">
            {products.map(product => {
                return product.items.map(item => <Item poster={item} />);
            })}
            </div>
        </>
    )   
}