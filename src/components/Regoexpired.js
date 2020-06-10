import React, {Component} from 'react';

class Regoexpired extends Component{
    
    render(){
        const regodate = new Date(this.props.regodate);
        const currentDate = new Date();
        const expiredintime = regodate.getTime() - currentDate.getTime(); 
        const expiredinmonths = expiredintime / (1000 * 60 * 60 * 24 * 7 * 4); 
        
        return(
            <div>
                { expiredinmonths > 0 ?
                        <p> Registration will expire in <b>{Math.round(expiredinmonths)} Months</b></p>:
                        <p className='expired_text'>Registration Expired</p>
                } 
            </div>
        )
    }
}
export default Regoexpired;