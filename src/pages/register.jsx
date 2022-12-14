import { authFirebase } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { insertUser } from "../action/biodata";

const { Component } = require("react");

class Register extends Component{
  state={
    email: '',
    password: ''
  }

  handleRegister = () => {    
    createUserWithEmailAndPassword(authFirebase, this.state.email, this.state.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('jwt-token', user.accessToken)
        console.log(user)
        // INSERT DATABASE
        const userData = {
          role: 'admin',
          address: 'Jakarta'
        }
        await insertUser(user.uid, userData)
        // window.location.href = '/home'
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
        <h1>Register Page</h1>
        <input 
          placeholder="email" 
          id="email"
          onChange={this.handleOnChange}></input>
        <input 
          placeholder="password" 
          type="password" 
          id="password"
          onChange={this.handleOnChange}></input>
        <button type="submit" onClick={this.handleRegister}>REGISTER</button>
      </div>
    )
  }
}

export default Register