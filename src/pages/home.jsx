import { decodedToken } from "../action/auth";

const { Component } = require("react");

class Home extends Component{
  
  handleLogout = () => {
    localStorage.removeItem('jwt-token')
    window.location.href = '/login'
  }

  componentDidMount(){
    if(!this.props.user){
      window.location.href = '/login'
    }
  }

  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <h2>Welcome {this.props.user?.email}</h2>
        <button type="submit" onClick={this.handleLogout}>LOGOUT</button>
      </div>
    )
  }
}

export default Home