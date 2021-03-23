import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
