import React, { Component } from 'react';

class Salaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary1: 0,
            salary2: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


        handleInputChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })}
    


    render() { 
        return ( 
            <form className="salaries">
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