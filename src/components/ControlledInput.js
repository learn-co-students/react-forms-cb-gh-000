// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component{

  state = {
      firstName: 'John',
      lastName: 'Doe'
  }

  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  render(){
    return(
      <div className="controlled-input">
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
      </div>
    );
  }
}
