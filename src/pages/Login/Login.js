import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../../firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(error=>alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                //if successfully created a new user with email and password, push to home page
                if (auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }

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
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login-signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>

                <p>By signing-in you agree to the Amazon Clone Conditions of Use & Sale. 
                    Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.</p>

                <button className="login-registerButton" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
