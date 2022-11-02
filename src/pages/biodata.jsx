import { Component } from "react";
import { insertBiodata, retrieveAllBiodata, uploadBiodataImage } from "../action/biodata";

class Biodata extends Component{
  state={
    name: '',
    job: '',
    phoneNumber: '',
    biodata: [],
    imageFile: {}
  }

  handleInputOnchange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleInsertBiodata = async () => {
    // UPLOAD FILE
    // GET URL UPLOADED FILE
    const url = await uploadBiodataImage(this.state.imageFile)
    // INSERT URL TO DB
    const {name, phoneNumber, job} = this.state
    insertBiodata(name, phoneNumber, job, url)
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
    console.log('componentDidMount()', data)
    this.setState({
      biodata: data
    })
  }

  handleFileChange = (event) => {
    const file = event.target.files[0]
    console.log(file)
    this.setState({
      imageFile: file
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
        <input 
          type="file"
          onChange={this.handleFileChange}
        />
        <button type="submit" onClick={this.handleInsertBiodata}>INSERT</button>

        {/* <div>
          { this.state.biodata.map(bdt => (
            <div>
              <h4>{bdt.data.name} - {bdt.data.phoneNumber} - {bdt.data.job}</h4>
              <img src={bdt.data.url} alt="" width="100px"/>
            </div>
          )) }
        </div> */}
      </div>
    )
  }
}

export default Biodata