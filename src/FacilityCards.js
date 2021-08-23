import React from 'react'
import doctor from './assets/Doctor.jpg'
import campaign from './assets/HealthCampaign.jpg'
import medicine from './assets/Medicine.jpg'
import {
    Link
  } from "react-router-dom";

const FacilityCards = () => {
    return (
        <>
            <div className="container-fluid  w-100 ">
                <div className="row">


                    <div className="col-lg-4 col-12 ">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={medicine} className="d-block mt-3 cardgroup" alt="medicine"/>
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Knock knock Medico</h5>

                                <p className="card-text description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis delectus cumque! Explicabo ipsam at quos quae quo asperiores vero. A, pariatur esse dignissimos consectetur libero</p>
                            </div>

                            <div align="right">
                            <Link to="/medico"> 
                            <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Order Now</button>
                            </Link>
                            </div>

                        </div>

                        

                    </div>


                    <div className="col-lg-4 col-12 ">

                        <div className="card" >

                            <div align="center">
                                <img src={doctor} className="d-block mt-3 cardgroup" alt="doctor" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Doctor's Consultation</h5>

                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis delectus cumque! Explicabo ipsam at quos quae quo asperiores vero. </p>
                            </div>

                            <div align="right">
                            <Link to="/appointment">
                            <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Book Now</button>
                            </Link>
                            </div>

                        </div>

                    </div>


                    <div className="col-lg-4 col-12 ">

                        <div className="card">
                            <div align="center">
                                <img src={campaign} className="d-block mt-3 cardgroup " alt="campaign" />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Health Camp</h5>

                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis delectus cumque! Explicabo ipsam at quos quae quo asperiores vero.</p>
                            </div>

                            <div align="right">
                            <Link to="/camps">
                            <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Find Location</button>
                            </Link>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default FacilityCards
