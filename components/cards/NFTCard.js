import React, { useEffect, useState } from 'react'
import styles from '../../styles/NFTCard.module.css';
import Link from 'next/link';



const NFTCard = ({ nft }) => {

    return (

        <Link href="/product/1" className={styles.container}>
            {nft.premium && <div className={styles.ribbon}>
                {'Premium'}</div>}

            <div className={styles.image} style={{ backgroundImage: `url(${nft.image})` }}>
                <div className={styles.owners}>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Picture of the author" className={styles.owner} />
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" alt="Picture of the author" className={styles.owner} />
                    <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg" alt="Picture of the author" className={styles.owner} />
                    <img src="https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg" alt="Picture of the author" className={styles.owner} />
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <div className={styles.title}>{nft.name}</div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div style={{ color: '#00AC4F', fontSize: '15px' }}>
                            <img src="./png/triangle.svg" alt="Logo" style={{ height: '15px', width: '15px', marginRight: '5px' }} />
                            {nft.pretaxYield}</div>
                        <div className={styles.place}>{nft.city}, {nft.country}</div>

                    </div>
                    <hr style={{ color: '#F4F4F4', fontSize: '3px', marginBottom: '15px' }}></hr>
                    <div className={styles.actionContainer}>
                        <div className={styles.price}>{nft.price} MATIC</div>
                        <div className={styles.investButton}>Invest Now</div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default NFTCard