import React from 'react'
import styles from '../../styles/NFTOptionscard.module.css';
import Image from 'next/image';

const NFTOptionCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.nftImage}>
            <Image src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={100} height={120} style={{objectFit: 'cover', borderRadius: '10px', margin: '0px 5px', height: '100%'}}/>
        </div>
        <div className={styles.nftContent}>
            <div className={styles.contentColOne}>
                <p style={{fontSize: '15px', letterSpacing: '0.5px'}}>ArtCrypto<span style={{marginLeft:'30px', fontSize: '15px'}}>EUR 980.00</span></p>
                <div className={styles.apy}>
                <Image src="/png/green_eth.png" height={20} width={15} /><p style={{color: '#00AC4F'}}>APY</p>
                </div>
                <div className={styles.apy}>
                <Image src="/png/green_triangle.png" height={15} width={15} /><p style={{color: '#00AC4F'}}>5.0 %</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTOptionCard