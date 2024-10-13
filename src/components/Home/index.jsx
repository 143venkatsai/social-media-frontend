import React from "react"
import {Link} from "react-router-dom"
import "./index.css"

const Home = () =>(
    <div className="app-container">
        <h1 className="app-heading">Social Media Account Handling</h1>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/user">User Form</Link></li>
            <li><Link to="/admin-login">Admin Login</Link></li>
          </ul>
        </nav>
      </div>
)

export default Home