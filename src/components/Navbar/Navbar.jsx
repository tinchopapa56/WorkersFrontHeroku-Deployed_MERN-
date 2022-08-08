import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Workers List</Link>
        <Link to="/workerRegister">Add New Worker</Link>
    </nav>
  )
}

export default Navbar