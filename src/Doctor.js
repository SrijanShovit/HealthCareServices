import React,{useState} from 'react'
import Navbar from './Navbar'
import doctorapi from './Doctorsapi'
import Footer from './Footer'
// import Buttongroup from './Buttongroup'
import NavigationButtons from './NavigationButtons'

import './App.css'


const Doctor = () => {

    const [doctorData] = useState(doctorapi)
    
    return (
        <>
        <Navbar/>
        {/* <Buttongroup/> */}
        <NavigationButtons/>
        <div className="container-fluid  w-100 ">
                <div className="row">


                <div className="col-lg-12 col-12  mt-3" align="left">
                <button className="btn btn-warning seemore2" disabled>Consult Doctors</button>                    
                </div>

                { 
                    doctorData.map((curElem,key) => {
                        const {img,name,description} = curElem

                        return (

                            
                                <div className="col-lg-4 col-12 " key={key}>

                                <div className="card cardfeature" >

                                    <div align="center">
                                       <img src={img} className="d-block mt-3 cardgroup" alt="medicine"/>
                                    </div>


                                    <div className="card-body">
                                     <h5 className="card-title">{name}</h5>

                                    <p className="card-text description">
                                        {description}
                                    </p>
                                        </div>

                                    <div align="right">

                                    <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Book Appointment</button>

                                    </div>

                                 </div>                           


                                </div>
                            
                        )                        

                })}
                
                </div>
                
            </div>
       
            <Footer/>
        </>
    )
}

export default Doctor
