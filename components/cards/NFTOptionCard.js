import React from 'react'
import styles from '../../styles/NFTOptionscard.module.css';
import Image from 'next/image';

const NFTOptionCard = ({img, title, sellprice, pretaxYield}) => {
  return (
    <div className={styles.container}>
        <div className={styles.nftImage}>
            <Image src={img} width={100} height={100} style={{objectFit: 'cover', borderRadius: '10px', margin: '0px 5px'}}/>
        </div>
        <div className={styles.nftContent}>
            <div className={styles.contentColOne}>
                <p style={{fontSize: '15px', letterSpacing: '0.5px'}}>{title}</p>
                <div className={styles.apy}>
                <Image src="/png/green_eth.png" height={20} width={15} /><p style={{color: '#00AC4F'}}>APY</p>
                </div>
                <div className={styles.apy}>
                <Image src="/png/green_triangle.png" height={15} width={15} /><p style={{color: '#00AC4F'}}>{pretaxYield} %</p>
                </div>
            </div>
            <div className={styles.contentColTwo}>
              <div style={{fontSize: '12px', textAlign: 'center'}}>EUR {sellprice}</div>
            </div>
        </div>
    </div>
  )
}

export default NFTOptionCard