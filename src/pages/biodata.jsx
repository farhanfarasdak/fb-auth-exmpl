import { Component } from "react";
import { insertBiodata, retrieveAllBiodata } from "../action/biodata";

class Biodata extends Component{
  state={
    name: '',
    job: '',
    phoneNumber: '',
    biodata: []
  }

  handleInputOnchange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleInsertBiodata = async () => {
    const {name, phoneNumber, job} = this.state
    insertBiodata(name, phoneNumber, job)
    this.setState({
      name: '',
      job: '',
      phoneNumber: ''
    })
    const data = await retrieveAllBiodata()
    this.setState({
      biodata: data
    })
  }

  async componentDidMount(){
    //TODO FETCH ALL BIODATA HERE
    const data = await retrieveAllBiodata()
    this.setState({
      biodata: data
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
          { this.state.biodata.map(data => (
            <h4>{data.id} - {data.data.name} - {data.data.phoneNumber} - {data.data.job}</h4>
          )) }
        </div>
      </div>
    )
  }
}

export default Biodata