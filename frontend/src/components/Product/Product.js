import React from 'react'
import './Product.css'
import {useStateValue} from '../../reducer/StateProvider'
 
function Product({id, title,image,price,rating}) { 
    const [{basket}, dispatch] = useStateValue();
    console.log("this is a basket", basket)
    const addToBasket = () => {
        //dispatch item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))} 
                </div>
            </div>
            <img src ={image} alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
