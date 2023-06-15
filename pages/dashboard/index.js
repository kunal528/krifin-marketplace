import React from 'react'
import UserNFTCard from '../../components/usernft/UserNFTCard'
import userData from '../../data/Userdata.json'


const dashboard = () => {
  return (
    <div>
      {}
      {userData.map((data, i)=>(
        <UserNFTCard key={i} image={data.image} name={data.name} rate={data.pretaxYield} city={data.City} country={data.Country} price={data.perNFTvalue} type={data.Type}/>
      ))}
    </div>
  )
}

export default dashboard