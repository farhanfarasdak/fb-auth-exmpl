const Card = ({ biodata }) => {
  return(
  <div className="my-card">
    <h3>{biodata.name}</h3>
    <img src={biodata.url} width="75px"></img>
    <h3>{biodata.job}</h3>
    <h3>{biodata.phoneNumber}</h3>
  </div>
  )
}

export default Card