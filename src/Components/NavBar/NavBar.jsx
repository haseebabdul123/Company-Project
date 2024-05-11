import React from 'react'
import "./navbar.css"
const NavBar = () => {
  return (
    <div>
      
      <nav>
        <div className="container">
            <a href="#" className='logo'>
                Logo
            </a>
            <div className="navbar-item">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="">Team</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
