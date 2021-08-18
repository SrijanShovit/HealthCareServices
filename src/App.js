
import Navbar from './Navbar'
import Buttongroup from './Buttongroup'
import Carousal2 from './Carousal2'
import MedicalSafetyProducts from './MedicalSafetyProducts'
import Features from './Features'
import Footer from './Footer'
import FacilityCards from './FacilityCards'
import Nutritious from './Nutritious'
import TopMediBrands from './TopMediBrands'
import './App.css'
// import ResponsiveCards from './ResponsiveCards'


function App() {
  return (
    <>
      <Navbar/>
      <Buttongroup/>
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
  );
}

export default App;
