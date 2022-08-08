import React from 'react'
import {Link} from "react-router-dom"
import "./auth.styles.css"


const Register = () => {
  return (
    <div className="auth">
        <form>
        <h1>Register (admin acount)</h1>
          <div> 
            <label for="password">Username</label>
            <input name="password" />
          </div>
          <div>
            <label for="name">Email</label>
            <input name="email" />
          </div>
          <div> 
            <label for="password">Password</label>
            <input name="password" />
          </div>
          <button>Register</button>
          <div>
            <Link to="/login"> Already have an account? Log In </Link>
          </div>
        </form>
    </div>
  )
}


export default Register