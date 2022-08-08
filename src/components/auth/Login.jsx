import React from 'react'
import "./auth.styles.css"
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="auth">
        <form>
        <h1>Sign In (admin acount) </h1>
          <div>
            <label for="name">Email</label>
            <input name="email" />
          </div>
          
          <div> 
            <label for="password">Password</label>
            <input name="password" />
          </div>

          <button>Login</button>
          <div>
            <Link to="/register"> Don't have an account? Create one! </Link>
          </div>
        </form>
    </div>
  )
}

export default Login