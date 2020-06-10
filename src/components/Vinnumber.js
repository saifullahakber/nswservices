import React, {Component} from 'react';

class Vinnumber extends Component{

    render(){
        const vindigits = this.props.vin;
        const vinfourdigits = vindigits.replace(/.(?=.{4})/g, 'x');
        return(
            <div className='vinumber'>
                <p>VIN: {vinfourdigits}</p>
                
            </div>
        )
    }
}
export default Vinnumber;