import React from 'react'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'


const Footer = () => {
    const description = "Krifin is a revolutionary new platform that is making it easier and more accessible than ever to invest in land and agriculture. We are the first platform in Asia to offer co-investment and decentralized finance (DeFi) solutions for these asset classes."
    const contactDesc = "Join our mailing list to stay in the loop with our newest investment feature releases, asset drops, and tips and tricks for navigating land investments.”"
    return (
        <div className={styles.container}>
            <div className={styles.footerCol}>
                <img src="/png/logo.png" alt="Logo" className={styles.logo} />
                <div className={styles.description}>{description}</div>
                <div className={styles.socials}>
                    <img src="/png/instagram.png" alt="Instagram" className={styles.social} />
                    <img src="/png/twitter.png" alt="Twitter" className={styles.social} />
                    <img src="/png/linkedIn.png" alt="LinkedIn" className={styles.social} />
                </div>
            </div>
            <div className={styles.footerAlignment}>
            <div className={styles.footerOptionlist}>
                <div className={styles.header}>Market Place</div>
                <div className={styles.menuItem}><Link href="/about">About us</Link></div>
                <div className={styles.menuItem}><Link target='_blank' href="https://www.krifin.in/how-it-works">How it works</Link></div>
                <div className={styles.menuItem}><Link target='_blank' href="https://www.krifin.in/faqs">FAQs</Link></div>
                <div className={styles.menuItem}><Link target='_blank' href="https://www.krifin.in/institutional-investors">Institutional Investors</Link></div>
                <div className={styles.menuItem}><Link target='_blank' href="https://www.krifin.in/retail-investors">Retail Investors</Link></div>
                <div className={styles.menuItem}><Link target='_blank' href="https://www.krifin.in/carbon-credits">Carbon Credits</Link></div>
                <div className={styles.menuItem}><Link target='_blank' href="https://www.krifin.in/partner-us">Partner with us</Link></div>
            </div>
            <div className={styles.footerOptionlist}>
                <div className={styles.header}>My Account</div>
                <div className={styles.menuItem}>Profile</div>
                <div className={styles.menuItem}>Favourite</div>
                <div className={styles.menuItem}>My Collections</div>
                <div className={styles.menuItem}>Settings</div>

            </div>
            </div>
            <div className={styles.footerCol}>
                <div className={styles.header}>Stay In The Loop</div>
                <div className={styles.description}>{contactDesc}</div>
                <div className={styles.inputBox}>
                    <input type="text" placeholder="Enter your email address...." className={styles.input} />
                    <div className={styles.button}>Subscribe Now</div>
                </div>
            </div>
        </div>
    )
}

export default Footer