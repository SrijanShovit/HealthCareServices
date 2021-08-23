import React from 'react'
import ppe from './assets/Ppekit.jpg'
import antiseptic from './assets/Antiseptic.jpg'
import orthopaedic from './assets/Orthopaedic.jpeg'
import {
    Link
  } from "react-router-dom";

const MedicalSafetyProducts = () => {
    return (
        <>
            <div className="container-fluid mt-5 w-75 ">
                <div className="row">
                    <div className="card">
                        <div className="col-lg-12 col-12 ">

                            <div className="col-lg-12 col-12 mt-3" align="left">
                            <button className="btn btn-warning seemore2" disabled>Medical Safety Products</button>
                            </div>
                            <br/>

                            <div className="row">

                                <div className="col-lg-4 col-12" >
                                <div className="container mt-3" >
                                <img src={ppe} className="d-block " id="muesli" alt="ppekit"/>
                                </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                <div className="container mt-3" >
                                <img src={antiseptic} className="d-block " id="muesli" alt="antisptic"/>
                                </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                <div className="container mt-3" >
                                <img src={orthopaedic} className="d-block " id="muesli" alt="orthopaedic"/>
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

export default MedicalSafetyProducts
