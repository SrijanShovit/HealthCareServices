
import Home from './Home'
import Knockknockmedico from './Knockknockmedico'
import './App.css'
// import ResponsiveCards from './ResponsiveCards'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>     

      <Router>
        
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/medico" component={Knockknockmedico} />
                
            </Switch>
           
      </Router>
    </>
  );
}

export default App;
