import React, { Component } from 'react';

class Salaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary1: "",
            salary2: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleSubmit(event){
            console.log("hellooo");
            
            event.preventDefault();
            const salary1 = this.state.salary1;
            const salary2 = this.state.salary2; 

            if (!salary1 || !salary2 ){
                return;
            }
            
            this.props.onSalarySubmit({
                salary1: salary1,
                salary2: salary2
            })

            this.setState({
                salary1:"",
                salary2:""
            })

        }

        handleInputChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })}
    


    render() { 
        return ( 
            <form className="salaries" onSubmit={this.handleSubmit}>
                <input type="number"
                name="salary1"
                placeholder="salary 1"
                value={this.state.salary1}
                onChange={this.handleInputChange}
                />
                <input type="number"
                name="salary2"
                placeholder="salary 2"
                value={this.state.salary2}
                onChange={this.handleInputChange}
                />
                <input type="submit"
                       value="submit"/>
            </form>
         );
    }
}
 
export default Salaries;