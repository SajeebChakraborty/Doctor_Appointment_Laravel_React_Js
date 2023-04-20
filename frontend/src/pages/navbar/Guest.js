import React from 'react'

import { Link,Routes,Route } from 'react-router-dom';

import Login from '../Login';
import Register from '../Register';

export default function Guest() {
  return (
    <div>

<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li>

                    <Link to={"#"} className='navbar-brand'>Square Hospital</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
      
    </div>
  )
}
