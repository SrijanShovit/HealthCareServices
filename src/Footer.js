import React from 'react'
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
            Follow us:
                
                <div className="footerpara" >

                <IconContext.Provider  value={{ className:"icons" }}>

                

                    
                                 
                
                    <IconContext.Provider value={{ color: "blue",className:"icons" }}>
                    
                    <AiFillLinkedin />
                    
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "	rgb(0, 136, 224)",className:"icons" }}>
                    
                    <FaTelegram />
                    
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "blueviolet",className:"icons" }}>
                
                    <AiFillTwitterCircle />
                    
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",className:"icons" }}>
                
                    <AiFillInstagram />
                    
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "blue",className:"icons" }}>
                
                    <AiFillFacebook />
                    
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "red",className:"icons" }}>
                
                    <AiFillYoutube />
                    
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "red",className:"icons" }}>
                
                    <FaPinterestSquare />
                    
                    </IconContext.Provider>
                   
                    </IconContext.Provider>
                </div>

                

                </center>

            </footer>

            

        </>
    )
}

export default Footer
