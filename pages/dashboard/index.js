import React, { useState } from 'react'
import UserNFTCard from '../../components/usernft/UserNFTCard'
import userData from '../../data/Userdata.json'
import Image from 'next/image'
import styles from '../../styles/Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'

const dashboard = () => {
  const [filters, setFilters] = useState([
    { name: 'My collection (20)', selected: false },
    { name: 'Favourites (43)', selected: false },
    { name: 'My Activity', selected: false },
    { name: 'My offer', selected: false },
    { name: 'My bid', selected: false },
  ])
  return (
    <div>
      {userData.map((data, i)=>(
        <div className={styles.dashboardMain}>
        <Image src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600" height={600} width={1400} alt="banner image" style={{position : 'relative', zIndex: 0}}/>
        <div className={styles.dashboardUser}>
        <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={200} height={220} style={{borderRadius: '100%', border: '2px solid white', marginTop: '-150px', position: 'relative'}}/>
        <div className={styles.dashboardUserContent}>
          <p style={{letterSpacing: '10px', fontSize: '30px', marginBottom: '30px'}}>Giri Ranjan</p>
          <p>Blockchain Enthusiast who loves art ,Blues Music,Tech & Finance</p>
          {/* <FontAwesomeIcon icon={faDashboard} style={{color: "#fefbfb",}} /> */}
          <div style={{fontSize: '20px', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' , marginTop: '30px'}}>
            <span style={{marginLeft: '30px'}}><b>Icon 1</b></span><span style={{marginLeft: '30px'}}><b>Icon 2</b></span><span style={{marginLeft: '30px'}}><b>Icon 3</b></span>
          </div>
          <hr style={{color: 'white', fontSize:'3px', width: '80vw', marginBottom: '50px', marginTop: '50px'}}></hr>
          <div className={styles.filters}>
            {
              filters.map((filter, index) => (
                <div key={index} className={styles.filter + ' ' + (filter.selected && styles.active)}>{filter.name}</div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={styles.dashboardAssets}>
          {data.assetDetails.map((asset, i)=>(
            // console.log("asset are ",i , ":" , asset),
            <UserNFTCard key={i} assets={asset}/>
          ))}  
        </div>
        </div>
      ))}
      
    
    </div>
  )
}

export default dashboard