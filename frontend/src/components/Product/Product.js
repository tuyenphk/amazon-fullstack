import React from 'react'
import './Product.css'
import leanup from '../../assets/Lean_Startup.png'
 
function Product() {
    return (
        <div className="product">
            <div className="product-info">
                <p>The Lean Startup: How Constant Innovation creates radically successful business paperback</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product-rating">
                    <p>⭐</p>
                </div>
            </div>
            <img src ={leanup} alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
