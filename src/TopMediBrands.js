import React from 'react'
import ab from './assets/Aurobindo.png'
import johnson from './assets/Johnson.png'
import reddy from './assets/Reddy.jpg'

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
                                        <img src={ab} className="d-block " id="muesli" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                    <div className="container mt-3" >
                                        <img src={johnson} className="d-block " id="muesli" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12" >
                                    <div className="container mt-3" >
                                        <img src={reddy} className="d-block " id="muesli" />
                                    </div>
                                </div>


                            </div>

                            <div className="col-lg-12 col-12 " align="right">
                                <button type="button" className="btn btn-warning seemore1">See More</button>
                            </div>






                        </div>




                    </div>
                </div>
            </div>

        </>
    )
}

export default TopMediBrands
