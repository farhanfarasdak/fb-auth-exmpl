import { Component } from "react";

class Biodata extends Component{
  render(){
    return(
      <div>
        <h1>Biodata</h1>

        <input
          placeholder="Name..."
          />
        <input
          placeholder="Phone Number..."
          />
        <input
          placeholder="Job..."
          />
        <button type="submit">INSERT</button>

        <div>
          <h4>Name1 - 087.... - Boss</h4>
          <h4>Name2 - 087.... - Manager</h4>
        </div>
      </div>
    )
  }
}

export default Biodata