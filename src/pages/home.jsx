const { Component } = require("react");

class Home extends Component{
  
  handleLogout = () => {
    localStorage.removeItem('jwt-token')
    window.location.href = '/login'
  }

  render(){
    console.log(localStorage.getItem('jwt-token'))
    if(localStorage.getItem('jwt-token') === null){
      window.location.href = '/login'
    }

    return(
      <div>
        <h1>Home Page</h1>
        <button type="submit" onClick={this.handleLogout}>LOGOUT</button>
      </div>
    )
  }
}

export default Home