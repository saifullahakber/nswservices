import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Vehiclelist from './components/Vehiclelist';
import Vehicledetails from './components/Vehicledetails';

class App extends Component {
   

    render(){
         return (
             <Router>
                <div className="App">
                <Switch>
                    <Route path='/' exact component={Vehiclelist} />
                    <Route path='/:rego' component={Vehicledetails} />
                </Switch>
              </div>
            </Router>
          ); 
    }

}


export default App;
