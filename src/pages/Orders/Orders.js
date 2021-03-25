import React, {useState, useEffect} from 'react'
import './Orders.css'
import {db} from '../../firebase'
import {useStateValue} from '../../reducer/StateProvider'
import Order from '../../components/Order/Order'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();

    useEffect(() => {
        if(user){
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .orderBy('created','desc')
              .onSnapshot(snapshot => (
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
              })))
          ))
        } else {
            setOrders([])
        }       
    }, [user])

    return (
        <div className="order">
            <h1>Thank you for your Order</h1>
            <h2>We will send the confirmation via your email with the tracking number when the order is shipped.</h2>
            <div className="orders-order">
                {orders?.map(order => {
                    <Order order={order} />
                })}
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
    )
}

export default Orders
