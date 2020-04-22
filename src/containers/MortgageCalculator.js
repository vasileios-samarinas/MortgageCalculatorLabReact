import React, { Component } from 'react';
import Salaries from '../components/Salaries';


class MortgageCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salaries: []
        }
    }

    render(){
        return(
            <div className="mortgage-calculator">
                <h2>Mortgage Calculator loves you!</h2>
                <Salaries salaries ={this.state.salaries}/>
            </div>
        )
    }
 
}
 
 
 
 
 
 
 
 
 
 
export default MortgageCalculator;
