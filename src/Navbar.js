import React from 'react'
import logo from './assets/logo.jpg'
import download from './assets/download.png'
import {
    Link
  } from "react-router-dom";
  import { IconContext } from "react-icons";
  import { GiShoppingCart} from 'react-icons/gi'
// import cart from './assets/Cart.jpg'
// import download from './assets/download.png'

const Navbar = () => {
    return (
        <>
        

            <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">
                    <div className="navbar-brand" >
                        <img src={logo} alt="Aakanksha" width={75} height={75} className="d-inline-block align-text-top" />

                    </div>
                    <form className="d-flex">
                        <input className="form-control mr-2 searchbox" type="search" placeholder="Delivery pin | Search medicine, camps, health brands" aria-label="Search" />

                        <Link to="/cart">
                        <IconContext.Provider value={{ color: "green",className:"navbar-icon" }}>
                    
                    <GiShoppingCart />
                    
                    </IconContext.Provider>
                    </Link>
                      
                    (6)
                    <button type="button" className="btn btn-primary ml-2 mr-2 signinbutton">
                        Sign In
                    </button> 
                        
                    </form>

                    
                </div>

            </nav>

        </>
    )
}

export default Navbar
