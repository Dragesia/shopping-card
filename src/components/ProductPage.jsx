import { useParams } from "react-router-dom"
import products from "../products/products";
import { useState } from "react";

export default function ProductPage({ handleAddToCart, handleCartClick }) {
    const { id }= useParams();
    let selectedItem = null;

    products.forEach(category => category.items.forEach(item => {
        if (id === item.id) selectedItem = item;
    }))

    return (
        <div className="product-container">
            <div className="product">
                <img src={selectedItem.link} alt={selectedItem.name} />
                <div className="product-info">
                    <p>{selectedItem.name}</p>
                    <p className="price">{selectedItem.price}</p>
                    <button onClick={() => {handleAddToCart(selectedItem); handleCartClick();}}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}