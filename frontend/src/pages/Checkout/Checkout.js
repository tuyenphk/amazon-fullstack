import React from 'react'
import './Checkout.css'
import Subtotal from '../../components/Subtotal/Subtotal'
import {useStateValue} from '../../reducer/StateProvider'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout-title">Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
