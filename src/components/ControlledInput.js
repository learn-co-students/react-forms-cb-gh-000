// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.sendFormDataSomewhere(this.state)
  // }

  render() {
    return (
      <form>
        <input type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
        />
        <input type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
        />
      </form>
    )}
  }

export default ControlledInput;
