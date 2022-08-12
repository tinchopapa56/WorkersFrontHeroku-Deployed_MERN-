import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"
import Swal from "sweetalert2"

function Navbar() {

  const logOut = () => {
    localStorage.removeItem("logged")
    Swal.fire({
      icon: 'success',
      title: 'You logged out of your admin account',
      timer: 1500
    })
  }

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Workers List</Link>
        <Link to="/workerRegister">Add New Worker</Link>
      </div>
      <div onClick={logOut}>Log out</div>
    </nav>
  )
}

export default Navbar