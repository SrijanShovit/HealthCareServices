import React from 'react'
import mo from './assets/medical offer.jpg'
import cb from './assets/consultbanner.jpg'
import blood from './assets/blood.jpg'

const Carousal2 = () => {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" align="center">
          <div className="carousel-item active">
            <img src={mo} className="d-block banner" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cb} className="d-block banner" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={blood} className="d-block banner" alt="..." />
          </div>
        </div>
      </div>
            
        </>
    )
}

export default Carousal2
