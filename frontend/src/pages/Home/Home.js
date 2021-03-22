import React from 'react'
import home from '../../assets/home.jpg'
import Product from '../../components/Product/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
           <div className="home-container">
                <img src={home} alt="" className="home-image"/>

                <div className="home-row">
                    <Product />
                </div>

                <div className="home-row">

                </div>

                <div className="home-row">
                    
                </div>
           </div>
        </div>
    )
}

export default Home
