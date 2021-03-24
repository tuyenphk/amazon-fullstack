import React from 'react'
import {useStateValue} from '../../reducer/StateProvider'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import {Link} from 'react-router-dom'
import './Payment.css'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue()

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>Checkout (<Link to='/checkout' style={{textDecoration:'none'}}>{basket?.length} items</Link>)</h1>
                {/* Payment section - delivery address */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>471 Cherryville Rd</p>
                        <p>Northampton, PA, 18067, USA</p>
                    </div>
                </div>

                 {/* Payment section - review items */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment-item">
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

                 {/* Payment section - payment method */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-detail">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
