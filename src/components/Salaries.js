import React, { Component } from 'react';

class Salaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary1: 0,
            salary2: 0
        }
    }

    render() { 
        return ( 
            <form className="salaries">
                <input type="number"
                placeholder="salary 1"
                value={this.state.salary1}
                />
                <input type="number"
                placeholder="salary 2"
                value={this.state.salary2}
                />
                <input type="submit"
                       value="submit"/>
            </form>
         );
    }
}
 
export default Salaries;