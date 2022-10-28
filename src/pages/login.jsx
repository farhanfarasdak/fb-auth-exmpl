const { Component } = require("react");

class Login extends Component{
  render(){
    return(
      <div>
        <h1>Login Page</h1>
        <input placeholder="email"></input>
        <input placeholder="password" type="password"></input>
        <button type="submit">LOGIN</button>
      </div>
    )
  }
}

export default Login