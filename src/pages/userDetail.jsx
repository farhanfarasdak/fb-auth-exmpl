import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBiodataById } from "../action/biodata";
import Card from "../component/card";

const UserDetail = ({ builder }) => {
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
      <Card biodata={biodata}/>
      <h5>{builder}</h5>
    </div>
  )
}

export default UserDetail

