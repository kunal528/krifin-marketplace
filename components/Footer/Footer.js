import React from 'react'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div style={{ maxWidth: '420px' }}>
                <img src="./png/logo.png" alt="Logo" className={styles.logo} />
                <div className={styles.description}>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</div>
                <div className={styles.socials}>
                    <img src="./png/instagram.png" alt="Instagram" className={styles.social} />
                    <img src="./png/twitter.png" alt="Twitter" className={styles.social} />
                    <img src="./png/linkedIn.png" alt="LinkedIn" className={styles.social} />
                </div>
            </div>
            <div style={{ maxWidth: '142px' }}>
                <div className={styles.header}>Market Place</div>
                <div className={styles.menuItem}>All NFTs</div>
                <div className={styles.menuItem}>New</div>
                <div className={styles.menuItem}>Art</div>
                <div className={styles.menuItem}>Sport</div>
                <div className={styles.menuItem}>Utility</div>
                <div className={styles.menuItem}>Music</div>
                <div className={styles.menuItem}>Domain Name</div>
            </div>
            <div style={{ maxWidth: '142px' }}>
                <div className={styles.header}>My Account</div>
                <div className={styles.menuItem}>Profile</div>
                <div className={styles.menuItem}>Favourite</div>
                <div className={styles.menuItem}>My Collections</div>
                <div className={styles.menuItem}>Settings</div>

            </div>
            <div style={{maxWidth: '456px'}}>
                <div className={styles.header}>Stay In The Loop</div>
                <div className={styles.description}>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</div>
                <div className={styles.inputBox}>
                    <input type="text" placeholder="Enter your email address...." className={styles.input} />
                    <div className={styles.button}>Subscribe Now</div>
                </div>
            </div>
        </div>
    )
}

export default Footer