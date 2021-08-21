import React,{useState} from 'react'
import Navbar from './Navbar'
import Buttongroup from './Buttongroup'
import Footer from './Footer'

const Cart = () => {
    return (
        <>
        <Navbar/>
        <div className="col-lg-12 col-12  mt-3" align="center">
                   <h4>Your Cart</h4>
        </div>

        <Footer/>
            
        </>
    )
}

export default Cart
