import React from 'react'
import muesli from './assets/Muesli.jpg'
import oats from './assets/Oats.jpg'
import nuts from './assets/Nuts.jpg'
import {
    Link
  } from "react-router-dom";

const Nutritious = () => {
    return (
        <>

<div className="container-fluid mt-5 w-75 ">
                <div className="row">
                    <div className="card">
                        <div className="col-lg-12 col-12 ">

                            <div className="col-lg-12 col-12 mt-3" align="left">
                            <button type="button" disabled className="btn btn-warning seemore2">Nutritious Products</button>
                            </div>

                            <br/>

                            <div className="row">

                                <div className="col-lg-4 col-12" >
                                <div className="container mt-3" >
                                <img src={muesli} className="d-block " id="muesli" alt="muesli" />
                                </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                <div className="container mt-3" >
                                <img src={oats} className="d-block " id="muesli" alt="oats" />
                                </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                <div className="container mt-3" >
                                <img src={nuts} className="d-block " id="muesli" alt="nuts"/>
                                </div>
                                </div>                              
                            
                           
                            </div>

                            <div className="col-lg-12 col-12 " align="right">
                            <Link to="/medico">
                            <button type="button" className="btn btn-warning seemore1">See More</button>
                            </Link>
                            </div>



                           

                           
                        </div>

                       


                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Nutritious
