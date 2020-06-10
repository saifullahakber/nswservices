import React, {Component} from 'react';

class Regodateformat extends Component{
    
    render(){
        Date.prototype.toShortFormat = function() {
        const monthNames =["January","February","March","April",
                          "May","June","July","August",
                          "September", "October","November","December"];

        const day = this.getDate();
        const monthIndex = this.getMonth();
        const monthName = monthNames[monthIndex];

        const year = this.getFullYear();

        return `${day} ${monthName} ${year}`;  
}

// Now any Date object can be declared 
const anyDate = new Date(this.props.regodate);


        
        return(
            <div>
                <p>Expiry date: {anyDate.toShortFormat()}</p>
   
            </div>
        )
    }
}
export default Regodateformat;