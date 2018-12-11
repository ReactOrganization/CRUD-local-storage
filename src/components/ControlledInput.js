import React from 'react'

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

   handleChange = (event) => {
   this.setState({
     input: event.target.value
   })
   console.log(this.state.input)
 }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

export default ControlledInput
