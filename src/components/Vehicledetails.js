import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Regoexpired from './Regoexpired';
import Vinnumber from './Vinnumber';

class Vehicledetails extends Component{
     state = {
        cars: []
    }
// API connection
    async componentDidMount(){
        const url = "https://dl.dropboxusercontent.com/s/wcp5aajrrx533bp/snsw_registrations_api.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({cars: data.registrations});
     }

    render(){
       const Paramvalue = this.props.match.params.rego;
        const caritems = this.state.cars;
        const filterItem = caritems.filter(cardetails => cardetails.plate_number == Paramvalue);
        
        return (
            <div>
                <div className='heading'>
                   <a href='/'><i class="arrow left"></i></a>
                    <h1>Vehicle details</h1>
                </div>
            
               {filterItem.map((items) => 
                <div className='vehicle_details' key={items.registration.expiry_date}>
                    
                <h1>{items.plate_number}</h1>
        
                <Regoexpired regodate={items.registration.expiry_date}/>
                <Vinnumber vin={items.vehicle.vin}/>
                    
                <p>Make: {items.vehicle.make}</p>
        
                <p>Model: {items.vehicle.model}</p>
        
                <p>Colour: {items.vehicle.colour}</p>
        
                <p>Type: {items.vehicle.type}</p>
        
            </div>

                )}
           
            </div>
        )
        
    }
}

export default Vehicledetails;