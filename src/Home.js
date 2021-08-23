import React from 'react'
import Navbar from './Navbar'
// import Buttongroup from './Buttongroup'
import Carousal2 from './Carousal2'
import MedicalSafetyProducts from './MedicalSafetyProducts'
import Features from './Features'
import Footer from './Footer'
import FacilityCards from './FacilityCards'
import Nutritious from './Nutritious'
import TopMediBrands from './TopMediBrands'
// import Knockknockmedico from './Knockknockmedico'
import NavigationButtons from './NavigationButtons'
import './App.css'

const Home = () => {
    return (
        <>
                <Navbar/>
            {/* <Buttongroup/> */}
            <NavigationButtons/>
            <Carousal2/>
            {/* <ResponsiveCards/> */}
            <FacilityCards/>
            <MedicalSafetyProducts/>
            <Nutritious/>
            <TopMediBrands/>
            {/* <ViewMoreCards/> */}
            <Features/>
            <Footer/>
        
            
        </>
    )
}

export default Home
