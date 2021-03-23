import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                     alt="" className="login-logo" />
            </Link>
            <div className="login-container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login-signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to the Amazon Clone Conditions of Use & Sale. 
                    Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.</p>

                <button className="login-registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
