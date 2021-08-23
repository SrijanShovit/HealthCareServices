
import Home from './Home'
import Knockknockmedico from './Knockknockmedico'
import Doctor from './Doctor'
import Cart from './Cart'
import Brand from './Brand'
import './App.css'
// import ResponsiveCards from './ResponsiveCards'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HealthCamp from './HealthCamp'


function App() {
  return (
    <>     

      <Router>
        
            <Switch>
            <Route path="/" component={ () => <Home btnx={true}/>} exact />
            <Route path="/medico" component={Knockknockmedico} />
            <Route path="/appointment" component={Doctor} />
            <Route path="/cart" component={Cart} />
            <Route path="/camps" component={HealthCamp} />
            <Route path="/brands" component={Brand} />
            <Route path='/linkedin' component={() => { 
            window.location.href = 'https://in.linkedin.com/company/aakankshaecommerce'; 
            return null}}/>
            <Route path='/twitter' component={() => { 
            window.location.href = 'https://twitter.com/aakanks57852311?lang=en'; 
            return null
            }}/>
            <Route path='/facebook' component={() => { 
            window.location.href = 'https://twitter.com/aakanks57852311?lang=en'; 
            return null
            }}/>
            <Route path='/yt' component={() => { 
            window.location.href = 'https://www.youtube.com/channel/UCQ79LZ_IrnxzkFL5MZxxOeg'; 
            return null
            }}/>
            <Route path='/tg' component={() => { 
            window.location.href = 'https://t.me/aakankshacompany'; 
            return null
            }}/>
            <Route path='/insta' component={() => { 
            window.location.href = 'https://www.instagram.com/aakankshacompany/'; 
            return null
            }}/>
            <Route path='/pinterest' component={() => { 
            window.location.href = 'https://in.pinterest.com/aakankshacompany/_saved/'; 
            return null
            }}/>
                
            </Switch>
           
      </Router>
    </>
  );
}

export default App;
