import React from 'react'
import doctor from './assets/Doctor.jpg'
import campaign from './assets/HealthCampaign.jpg'
import medicine from './assets/Medicine.jpg'


const ResponsiveCards = () => {
    return (
        <>
             <div className="container-fluid mt-5 w-100 ">
                <div className="row">


                    <div className="col-lg-4 col-12 ">

                        <div className="card cardfeature" >
                            
                            <img src={medicine} className=" mt-3 cardgroup"/>
                                                       
                            <h5>Card title</h5>

                            <p >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            

                            <div align="right">
                            <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Order Now</button>
                            </div>

                        </div>

                        

                    </div>


                    <div className="col-lg-4 col-12 ">

                        <div className="card" >

                            <div align="center">
                                <img src={doctor} className="d-block mt-3 cardgroup"  />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>

                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>

                            <div align="right">
                            <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Book Now</button>
                            </div>

                        </div>

                    </div>


                    <div className="col-lg-4 col-12 ">

                        <div className="card">
                            <div align="center">
                                <img src={campaign} className="d-block mt-3 cardgroup "  />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>

                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>

                            <div align="right">
                            <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Find Location</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default ResponsiveCards
