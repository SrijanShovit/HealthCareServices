import React from 'react'
import {
    Link
  } from "react-router-dom";

import { IconContext } from "react-icons";
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { FaPinterestSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <>

        
            <footer className=" text-light py-3 footer " >

                <center>
                    Aakanksha &copy; Health Care Services 2021
                    <br/>
            Follow us:
                
                <div className="footerpara" >

                <IconContext.Provider  value={{ className:"icons" }}>

                

                    
                                 
                    <Link to="/linkedin">
                    <IconContext.Provider value={{ color: "blue",className:"icons" }}>
                    <AiFillLinkedin />
                    </IconContext.Provider>
                    </Link>

                    <Link to="/tg">                    
                    <IconContext.Provider value={{ color: "	rgb(0, 136, 224)",className:"icons" }}>
                    <FaTelegram />
                    </IconContext.Provider>
                    </Link>

                    <Link to="/twitter">
                    <IconContext.Provider value={{ color: "blueviolet",className:"icons" }}>
                    <AiFillTwitterCircle />                  
                    </IconContext.Provider>
                    </Link>

                    <Link to="/insta">
                    <IconContext.Provider value={{ color: "white",className:"icons" }}>                
                    <AiFillInstagram />                    
                    </IconContext.Provider>
                    </Link>

                    <Link to="/facebook">
                    <IconContext.Provider value={{ color: "blue",className:"icons" }}>
                    <AiFillFacebook />
                    </IconContext.Provider>
                    </Link>

                    <Link to="/yt">
                    <IconContext.Provider value={{ color: "red",className:"icons" }}>
                    <AiFillYoutube />                    
                    </IconContext.Provider>
                    </Link>

                    <Link to="/pinterest">
                    <IconContext.Provider value={{ color: "red",className:"icons" }}>                
                    <FaPinterestSquare />                    
                    </IconContext.Provider>
                    </Link>
                   
                    </IconContext.Provider>
                </div>

                

                </center>

            </footer>

            

        </>
    )
}

export default Footer
