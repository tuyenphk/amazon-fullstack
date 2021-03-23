import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
