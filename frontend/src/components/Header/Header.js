import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from '../../reducer/StateProvider'

function Header() {
    const [{basket}, dispatch] = useStateValue()

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
                <Link to="/login" style={{border: '0', textDecoration: 'none'}}>
                    <div className="header-option">
                        <span className="header-optionLineOne">Hello Guest</span>
                        <span className="header-optionLineTwo">Sign In</span>
                    </div>
                </Link>
                
                <div className="header-option">
                    <span className="header-optionLineOne">Returns</span>
                    <span className="header-optionLineTwo">& Orders</span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">Your</span>
                    <span className="header-optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
                    </div>
                </Link>
               
            </div>
        </div>
    )
}

export default Header
