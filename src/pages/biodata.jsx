import { Component } from "react";
import { insertBiodata } from "../action/biodata";

class Biodata extends Component{
  state={
    name: '',
    job: '',
    phoneNumber: ''
  }

  handleInputOnchange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleInsertBiodata = () => {
    const {name, phoneNumber, job} = this.state
    insertBiodata(name, phoneNumber, job)
    this.setState({
      name: '',
      job: '',
      phoneNumber: ''
    })
  }

  render(){
    return(
      <div>
        <h1>Biodata</h1>

        <input
          placeholder="Name..."
          id="name"
          onChange={this.handleInputOnchange}
          defaultValue={this.state.name}
          value={this.state.name}
          />
        <input
          placeholder="Phone Number..."
          id="phoneNumber"
          onChange={this.handleInputOnchange}
          defaultValue={this.state.phoneNumber}
          value={this.state.phoneNumber}
          />
        <input
          placeholder="Job..."
          id="job"
          onChange={this.handleInputOnchange}
          defaultValue={this.state.job}
          value={this.state.job}
          />
        <button type="submit" onClick={this.handleInsertBiodata}>INSERT</button>

        <div>
          <h4>Name1 - 087.... - Boss</h4>
          <h4>Name2 - 087.... - Manager</h4>
        </div>
      </div>
    )
  }
}

export default Biodata