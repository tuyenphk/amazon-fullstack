import React from 'react'
import home from '../../assets/home.jpg'
import Product from '../../components/Product/Product'
import './Home.css'
import leanup from '../../assets/product/Lean_Startup.png'
import mixer from '../../assets/product/mixer.jpg'
import iphone from '../../assets/product/iphone.webp'
import ipad from '../../assets/product/ipad.webp'
import macbook from '../../assets/product/macbook.webp'
import samsungtv from '../../assets/product/samsung.webp'

function Home() {
    return (
        <div className="home">
           <div className="home-container">
                <img src={home} alt="" className="home-image"/>

                <div className="home-row">
                    <Product 
                        title="The Lean Startup: How Constant Innovation creates radically successful business paperback"
                        price={19.99}
                        image={leanup}
                        rating={5}
                    />
                    <Product 
                        title="VIVOHOME Stand Mixer, 650W 6 Speed 6 Quart Tilt-Head Kitchen Electric Food Mixer with Beater, Dough Hook and Wire Whip, Red, ETL Listed"
                        price={129.99}
                        image={mixer}
                        rating={4}
                    />
                </div>

                <div className="home-row">
                    <Product 
                        title="New Apple iPhone 12 (64GB, Blue) [Locked] + Carrier Subscription"
                        price={829}
                        image={iphone}
                        rating={4}
                    />
                    <Product 
                        title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Gold (Latest Model, 8th Generation)"
                        price={329}
                        image={ipad}
                        rating={5}
                    />
                    <Product 
                        title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver (Latest Model)"
                        price={1199.99}
                        image={macbook}
                        rating={5}
                    />
                </div>

                <div className="home-row">
                    <Product 
                        title="Sony X900H 65-inch TV: 4K Ultra HD Smart LED TV with HDR, Game Mode for Gaming, and Alexa Compatibility - 2020 Model"
                        price={1398.00}
                        image={samsungtv} 
                        rating={4}
                    />
                </div>
           </div>
        </div>
    )
}

export default Home
