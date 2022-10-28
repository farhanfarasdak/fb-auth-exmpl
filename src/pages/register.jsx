const { Component } = require("react");

class Register extends Component{
  render(){
    return(
      <div>
        <h1>Register Page</h1>
        <input placeholder="email"></input>
        <input placeholder="password" type="password"></input>
        <button type="submit">REGISTER</button>
      </div>
    )
  }
}

export default Register