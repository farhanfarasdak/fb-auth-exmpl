import { authFirebase } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const { Component } = require("react");

class Login extends Component{
  state={
    email: '',
    password: ''
  }

  handleLogin = () => {
    signInWithEmailAndPassword(authFirebase, this.state.email, this.state.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        localStorage.setItem('jwt-token', user.accessToken)
        window.location.href = '/home'
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });

  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>Login Page</h1>
        <input 
          placeholder="email" 
          id="email"
          onChange={this.handleOnChange}></input>
        <input 
          placeholder="password" 
          type="password" 
          id="password"
          onChange={this.handleOnChange}></input>
        <button type="submit" onClick={this.handleLogin}>LOGIN</button>
      </div>
    )
  }
}

export default Login