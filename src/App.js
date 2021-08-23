
import Home from './Home'
import Knockknockmedico from './Knockknockmedico'
import Doctor from './Doctor'
import Cart from './Cart'
import './App.css'
// import ResponsiveCards from './ResponsiveCards'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HealthCamp from './HealthCamp'


function App() {
  return (
    <>     

      <Router>
        
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/medico" component={Knockknockmedico} />
            <Route path="/appointment" component={Doctor} />
            <Route path="/cart" component={Cart} />
            <Route path="/camps" component={HealthCamp} />
            <Route path='/linkedin' component={() => { 
            window.location.href = 'https://in.linkedin.com/company/aakankshaecommerce'; 
            return null;
            }}/>
                
            </Switch>
           
      </Router>
    </>
  );
}

export default App;
