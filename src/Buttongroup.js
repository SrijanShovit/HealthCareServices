import React from 'react'
// import cart from './assets/Cart.jpg'
import download from './assets/download.png'


const Buttongroup = () => {
    return (
        <>

            <div className="col-lg-12 col-12 ml-2 secondcol" >
                <div className="row">


                <div className="col-lg-2 col-0  mt-4" align="center">
                    <div>
                        <div >
                            
                        </div>                      
                    </div>
                </div>
                <div className="col-lg-6 col-12  mt-4" align="center">
                    <div>
                        <div className="containerbox">
                            Knock knock Medico | Healthcamp | Doctor's Consultation 
                        </div>                      
                    </div>
                </div>

                <div className="col-lg-4 col-12  mt-3" align="right">
                    
                    <div className="row">

                    <div className="col-lg-12 col-12 " align="right">
                    <div className="ml-2 mr-2 " >
                    <img src={download} className="cart"/>
                    <button type="button" className="btn btn-primary ml-2 mr-2 signinbutton">Sign In</button> 
                    </div> 
                    </div>

                        



                        {/* <div className="ml-2 mr-2 " ><img src={download} className="cart" /></div> 
                        <button type="button" class="btn btn-primary ml-2 mr-2 signinbutton">Sign In</button>  */}


                    </div>
                    
                </div>



                    

                    {/* <div className="col-lg-6 col-12 " align="right" >
                        
                        <div className="btn-group mt-3  buttongroup "   >
                        <a  className="btn btn-primary active" aria-current="page">Knock knock Medico</a>
                        <a className="btn btn-primary">Healthcamp</a>
                        <a className="btn btn-success">Doctor's Consultation</a>

                        <div className="ml-2" ><img src={cart} className="cart" /></div>
                        
                        </div>                   
                    </div> */}

                   
                    
                </div>
            </div>

            

        </>
    )
}

export default Buttongroup
