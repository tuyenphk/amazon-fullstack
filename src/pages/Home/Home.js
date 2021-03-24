import React from 'react'
import home from '../../assets/home.jpg'
import Product from '../../components/Product/Product'
import './Home.css'
import watch from '../../assets/product/watch.jpg'
import apple from '../../assets/product/apple.jpg'
import iphone from '../../assets/product/iphone.webp'
import ipad from '../../assets/product/ipad.webp'
import macbook from '../../assets/product/macbook.webp'
import samsungtv from '../../assets/product/samsung.webp'
import FlipMove from 'react-flip-move';

function Home() {
    return (
        <div className="home">
           <div className="home-container">
                <img src={home} alt="" className="home-image"/>
                <FlipMove >
                <div className="home-row">
                    <Product 
                        id={123}
                        title="Samsung Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking, and Long lasting Battery, Pink Gold (US Version)"
                        price={199.99}
                        image={watch}
                        rating={4}
                    />
                    <Product 
                        id={14567}
                        title="New Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink Sand Sport Band"
                        price={374.99}
                        image={apple}
                        rating={4}
                    />
                </div>

                <div className="home-row">
                    <Product 
                        id={250}
                        title="New Apple iPhone 12 (64GB, Blue) [Locked] + Carrier Subscription"
                        price={829}
                        image={iphone}
                        rating={4}
                    />
                    <Product 
                        id={252}
                        title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Gold (Latest Model, 8th Generation)"
                        price={329}
                        image={ipad}
                        rating={5}
                    />
                    <Product 
                        id={254}
                        title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver (Latest Model)"
                        price={1199.99}
                        image={macbook}
                        rating={5}
                    />
                </div>

                <div className="home-row">
                    <Product 
                        id={1900}
                        title="Sony X900H 65-inch TV: 4K Ultra HD Smart LED TV with HDR, Game Mode for Gaming, and Alexa Compatibility - 2020 Model"
                        price={1398.00}
                        image={samsungtv} 
                        rating={4}
                    />
                </div>
                </FlipMove>
           </div>
        </div>
    )
}

export default Home
