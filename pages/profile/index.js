import React, { useState } from 'react'
import UserNFTCard from '../../components/cards/UserNFTCard'
import userData from '../../data/Userdata.json'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'
import Layout from '../../components/layout'

const Profile = () => {
  const [filters, setFilters] = useState([
    { name: 'My collection (20)', selected: false },
    { name: 'Favourites (43)', selected: false },
    { name: 'My Activity', selected: false },
    { name: 'My offer', selected: false },
    { name: 'My bid', selected: false },
  ])
  return (
    <div>
      {userData.map((data, i) => (
        <div key={'dashboard'} className={styles.main}>
          <img src="/png/banner.png" className={styles.banner} alt="banner image" />
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" className={styles.userImage} alt="Picture of the author" />
          <div className={styles.name}>Giri Ranjan</div>
          <div className={styles.bio}>Blockchain Enthusiast who loves art ,Blues Music,Tech & Finance</div>
          <div className={styles.divider} />
          <div className={styles.filters}>
            {
              filters.map((filter, index) => (
                <div key={index} className={styles.filter + ' ' + (filter.selected && styles.active)}>{filter.name}</div>
              ))
            }
          </div>
          <div className={styles.assets}>
            {data.assetDetails.map((asset, i) => (
              // console.log("asset are ",i , ":" , asset),
              <UserNFTCard key={i} nft={asset} />
            ))}
          </div>
        </div>
      ))}


    </div>
  )
}

export default Profile

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}