import React from 'react'
import {
    Link
  } from "react-router-dom";

const NavigationButtons = () => {
    return (
        <>
            <div className="col-lg-12 col-12 " align="center">

            <Link to="/"> 
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2" >Home</button>  
            </Link> 
            
            <Link to="/medico"> 
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2" >Knock knock medico</button>  
            </Link> 

            <Link to="/appointment">                 
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2" >Doctor's Consultation</button>  
            </Link>

            <Link to="/camps">
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2">Health Camps</button>                    
            </Link> 
            
            </div>

        </>
    )
}

export default NavigationButtons
