import React from 'react'
import styles from '../../styles/AssetCards.module.css'
import Image from 'next/image'

const AssetCards = ({name, percentage, loc, image}) => {
  return (
    <div className={styles.main}>
        <div className={styles.image}>
            <Image src={image} height={150} width={150} className={styles.assetImg}/>
        </div>
        <div className={styles.content}>
            <div className={styles.name}>{name}</div>
            <div className={styles.info}>
                
                <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" width={20} height={20} className={styles.assetprofileImg}/>
                
                <div className={styles.statButton}>
                    <Image src="/png/green_eth.png" height={20} width={15}  /> 
                    <p className={styles.statButtonContent}>{percentage}% APY</p>
                </div>
            </div>
            <div className={styles.placebidButton}><p>Place a bid</p></div>
        </div>
        <div className={styles.location}>{loc}</div>
        
    </div>
  )
}

export default AssetCards