import React from 'react'
import Navbar from './Navbar'
import Buttongroup from './Buttongroup'


const Knockknockmedico = () => {
    return (
        <>
        <Navbar/>
        <Buttongroup/>
        <div className="container-fluid  w-100 ">
                <div className="row">

                <div className="col-lg-12 col-12  mt-3" align="left">
                <button className="btn btn-warning seemore2" disabled>Medicines</button>                    
                </div>

                </div>
        </div>
            
        </>
    )
}

export default Knockknockmedico
