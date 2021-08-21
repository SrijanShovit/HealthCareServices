import React,{useState} from 'react'
import Navbar from './Navbar'
import medicineapi from './Medicineapi'
import healthsafetyapi from './Healthsafetyapi'
import nutritiousapi from './Nutritiousapi'
import Buttongroup from './Buttongroup'
import Footer from './Footer'
import doctor from './assets/Doctor.jpg'
import campaign from './assets/HealthCampaign.jpg'
import medicine from './assets/Medicine.jpg'
import './App.css'


const Knockknockmedico = () => {

    const [medicineData, setMedicineData] = useState(medicineapi)
    const [healthSafetyData, setHealthSafetyData] = useState(healthsafetyapi)
    const [nutritiousData, setNutritiousData] = useState(nutritiousapi)
    return (
        <>
        <Navbar/>
        <Buttongroup/>
        <div className="container-fluid  w-100 ">
                <div className="row">

{/* --------------Medicine section starts----------------------- */}


                <div className="col-lg-12 col-12  mt-3" align="left">
                <button className="btn btn-warning seemore2" disabled>Medicines</button>                    
                </div>

                { 
                    medicineData.map((curElem) => {
                        const {id,img,name,description} = curElem

                        return (

                            <>
                                <div className="col-lg-4 col-12 " key={id}>

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

                                    <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Add To Cart</button>

                                    </div>

                                 </div>

                            


                                </div>
                            </>
                        )


                        

                })}

{/* --------------Medicine section ends----------------------- */}


{/* --------------SafetyProducts section starts----------------------- */}

                <div className="col-lg-12 col-12  mt-3" align="left">
                    <button className="btn btn-warning seemore2" disabled>Medical Safety Products</button>                    
                </div>

                { 
                    healthSafetyData.map((curElem) => {
                        const {id,img,name,description} = curElem

                        return (

                            <>
                                <div className="col-lg-4 col-12 " key={id}>

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

                                    <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Add To Cart</button>

                                    </div>

                                 </div>

                            


                                </div>
                            </>
                        )


                        

                })}



{/* --------------SafetyProducts section ends----------------------- */}


{/* --------------NutritiousProducts section ends----------------------- */}

<div className="col-lg-12 col-12  mt-3" align="left">
                    <button className="btn btn-warning seemore2" disabled>Nutritious Products</button>                    
                </div>

                { 
                    nutritiousData.map((curElem) => {
                        const {id,img,name,description} = curElem

                        return (

                            <>
                                <div className="col-lg-4 col-12 " key={id}>

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

                                    <button type="button" className="btn btn-warning seemore1 mr-3 mb-2">Add To Cart</button>

                                    </div>

                                 </div>

                            


                                </div>
                            </>
                        )


                        

                })}


{/* --------------NutritiousProducts section ends----------------------- */}

               

                

                


                        
                    </div>


                </div>
       
                <Footer/>
        </>
    )
}

export default Knockknockmedico
