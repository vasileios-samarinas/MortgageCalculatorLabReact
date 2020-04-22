import React, { Component } from 'react';
import Salaries from '../components/Salaries';




class MortgageCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salaries: {}
        }
        this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
        this.calculateAffordability = this.calculateAffordability.bind(this);
        }

        

        handleSalarySubmit(submittedSalaries){
            this.setState({
                salaries: submittedSalaries
               });
              
        }

        calculateAffordability(){
            const totalSalaries = this.state.salaries.salary1 + this.state.salaries.salary2;
            const affordabily = totalSalaries * 3
            return  affordabily
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

