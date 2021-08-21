import React from 'react'
// import cart from './assets/Cart.jpg'
import download from './assets/download.png'
import {
    Link
  } from "react-router-dom";


const Buttongroup = () => {
    return (
        <>

            <div className="row secondcol">

            <div className="col-lg-9 col-12 secondcol" align="center">
            <Link to="/"> 
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2" >Home</button>  
            </Link> 

            <Link to="/medico"> 
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2" >Knock knock medico</button>  
            </Link> 

            <Link to="/appointment">                 
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2" >Doctor's Consultation</button>  
            </Link>
            
                              
            <button className="btn btn-warning mt-3 mb-2 ml-2 mr-2">Health Camps</button>                    
            </div>

            <div className="col-lg-3 col-12  mt-3" align="right">
                    
                    <div className="row">

                    <div className="col-lg-12 col-12 " align="right">
                    <div className="ml-2 mr-2 " >
                    <Link to="/cart">
                    <img src={download} className="cart" alt="cart"/>
                    </Link> 
                    (0)
                    <button type="button" className="btn btn-primary ml-2 mr-2 signinbutton">Sign In</button> 
                    </div> 
                    </div>


                    </div>
                    
                </div>


            </div>

           

            {/* <div className="col-lg-12 col-12 ml-2 secondcol" >
                <div className="row">


                <div className="col-lg-2 col-0  mt-4" align="center">
                    <div>
                        <div >
                            
                        </div>                      
                    </div>
                </div>
                <div className="col-lg-7 col-12  mt-4" align="center">
                    <div>
                        <div >
                           
                        </div>                      
                    </div>
                </div>

                
                   
                    
                </div>
            </div> */}

            

        </>
    )
}

export default Buttongroup
