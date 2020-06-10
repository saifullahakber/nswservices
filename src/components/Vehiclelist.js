import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Vinnumber from './Vinnumber';
import Regodateformat from './Regodateformat';

class Vehiclelist extends Component{
     state = {
        cars: []
    }
// API connection
     async componentDidMount(){
        const url = "https://dl.dropboxusercontent.com/s/wcp5aajrrx533bp/snsw_registrations_api.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({cars: data.registrations,loading: false});
     }
    render(){
      
        return (
            <div className='vehicle-list'>
            
             <div className='heading'>
                <h1>Vehicle registrations</h1>
            </div>
                <ul>
                    {this.state.cars.map((items) => 
                        <Link to={items.plate_number}> <li>
                            <div className ='regonumber'><h2 key ={items.plate_number}>{items.plate_number}</h2></div>
        
                            <div className ='regoexpired'>
                                <Regodateformat regodate = {items.registration.expiry_date} /></div>
        
                                 <Vinnumber vin={items.vehicle.vin}/>
                                     
                        </li></Link>
                       )}
                </ul>
            </div>
        )
        
    }
}

export default Vehiclelist;