import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header-logo" alt="" />
            </Link>
            
            <div className="header-search">
                <input className="header-searchInput" text="input" />
                <SearchIcon className="header-searchIcon" />
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOn">Hello Guest</span>
                    <span className="header-optionLineTwo">Sign In</span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOn">Returns</span>
                    <span className="header-optionLineTwo">& Orders</span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOn">Your</span>
                    <span className="header-optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header-optionLineTwo header-basketCount">0</span>
                    </div>
                </Link>
               
            </div>
        </div>
    )
}

export default Header
