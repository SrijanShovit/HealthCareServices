import React from 'react'
import doctor from './assets/Doctor.jpg'
import campaign from './assets/HealthCampaign.jpg'
import medicine from './assets/Medicine.jpg'
import './App.css'

const Cards = () => {
  return (
    <>
      <div className="container ">

        <div className="row">

          <div className="col mt-5">

            <div className="card text-white bg-primary mt-3 mb-2 ml-2 mr-2" style={{ maxWidth: '18rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <img src={medicine} className="images" />
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>


          </div>

          <div className="col mt-5" align="left">

            <div className="card text-white bg-primary mt-3 mb-2 ml-2 mr-2" >
              <div className="card-header">Header</div>
              <div className="card-body">
                <img src={doctor} className="images" />
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>


          </div>


          <div className="col mt-5 mr-3">

            <div className="card text-white bg-primary mt-3 mb-2 ml-2 mr-2" style={{ maxWidth: '18rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <img src={campaign} className="images" />
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

        </div>










      </div>

    </>
  )
}

export default Cards

/*----------------------------------------------------------------

<div className="row row-cols-1 row-cols-md-3 g-4">

        <div className="col">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      */
