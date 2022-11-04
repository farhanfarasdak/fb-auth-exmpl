import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBiodataById } from "../action/biodata";

const UserDetail = () => {
  const { id } = useParams()
  const [biodata, setBiodata] = useState({ name: 'Loading...', job: 'Loading...', phoneNumber: 'Loading...'})

  const getBiodata = async () => {
    const resp = await getBiodataById(id)
    setBiodata(resp)
    console.log(resp)
  }

  useEffect(() => {
    getBiodata()
  },[])

  return(
    <div>
      <h1>USER DETAIL</h1>
      <h3>{biodata.name}</h3>
      <img src={biodata.url} width="75px"></img>
      <h3>{biodata.job}</h3>
      <h3>{biodata.phoneNumber}</h3>
    </div>
  )
}

export default UserDetail

