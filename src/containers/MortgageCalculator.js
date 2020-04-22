import React, { Component } from 'react';
import Salaries from '../components/Salaries';



class MortgageCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salaries: [],
            maxPropertyValue: 0
        }
        this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
        }

        handleSalarySubmit(submittedSalaries){
            const newSalaries = [...this.state.salaries, submittedSalaries];
            this.setState({
                salaries: newSalaries
            })
        }

    render(){
        return(
            <div className="mortgage-calculator">
                <h2>Mortgage Calculator loves you!</h2>
                <Salaries salaries ={this.state.salaries} onSalarySubmit={this.handleSalarySubmit}/>
            </div>
        )
    }
 
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
export default MortgageCalculator;
