import React, {useState, useEffect} from 'react'
import {useStateValue} from '../../reducer/StateProvider'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import {Link, useHistory} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer/reducer'
import axios from '../../axios'

import './Payment.css'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    useEffect(() => {
        // generate the special stripe secret which allows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios ({
                method: 'post',
                //stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket])

    console.log('The secret is ', clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace ('/orders')
        })
    }

    const handleChange = event => {
        // Listen for changes in the Card Element
        // and display errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

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
                        {/* Strip magic will go here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment-priceContainer">
                            <CurrencyFormat 
                                renderText={(value)=>(
                                    <h3>Order total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} 
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
