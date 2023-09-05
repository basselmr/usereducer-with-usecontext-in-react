import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import { useContext } from 'react';
import { Cartprovider, CartContext } from '../contexts/CartContext';



const Header = () => {
    const [expand, setExpand] = useState("none")
    const { Count } = useContext(CartContext)
    const toggle = () => {
        if (expand === 'none') {
            setExpand('block')
        } else {
            setExpand('none')
        }

    }

    return (

        < header className='p-5' style={{ direction: 'rtl' }
        }>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
                <button className="navbar-toggler" type="button" onClick={toggle} >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{ display: expand }} id="navbarSupportedContent" >
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <Link onClick={toggle} className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={toggle} className="nav-link" to="/store">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={toggle} className="nav-link" to="/cart">Cart {Count}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}

export default Header