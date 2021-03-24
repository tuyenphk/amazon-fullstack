import React, {useEffect} from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './reducer/StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51IYabQH0yrwdQqcxqpizpZwIGsF4jlONsLjUnELECZpcOfCr8p0qhB3SdJwruZ4a9pOuZCmlzoiWmrQCeD65jRgH004NVVEaMo");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser){
        //the user is logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
