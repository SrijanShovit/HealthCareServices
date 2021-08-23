import React from 'react'
import ab from './assets/Aurobindo.png'
import johnson from './assets/Johnson.png'
import reddy from './assets/Reddy.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const TopMediBrands = () => {
    return (
        <>

            <div className="container-fluid mt-5 w-75 ">
                <div className="row">
                    <div className="card">
                        <div className="col-lg-12 col-12 ">

                            <div className="col-lg-12 col-12 mt-3" align="left">
                                <button disabled type="button" className="btn btn-warning seemore2">Top Medi Brands</button>
                            </div>

                            <br />

                            <div className="row">

                                <div className="col-lg-4 col-12" >
                                    <div className="container mt-3" >
                                        <img src={ab} className="d-block " id="muesli" alt="aurobindo"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                    <div className="container mt-3" >
                                        <img src={johnson} className="d-block " id="muesli" alt="johnson" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                    <div className="container mt-3" >
                                        <img src={reddy} className="d-block " id="muesli" alt="reddy" />
                                    </div>
                                </div>


                            </div>

                            <div className="col-lg-12 col-12 " align="right">
                                <Link to="/brands">
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

export default TopMediBrands
