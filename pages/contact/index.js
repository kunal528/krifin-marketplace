import React from 'react'
import styles from '../../styles/Contact.module.css'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar />
        <div className={styles.container}>
            <div className={styles.header1}>CONTACT</div>
            <div className={styles.header2}>This platform also serves as the official metaverse mapping and authorisation platform for the metaverse council and we are responsible for assigning the metaverse ID to every web3 virtual world in the ecosystem. </div>
            <div className={styles.contactSection}>
                <div className={styles.contactHeader}>
                    <div className={styles.title}>Let’s Talk</div>
                    <div className={styles.subtitle}>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help</div>
                    <div className={styles.emailTitle}>Email</div>
                    <div className={styles.email}>hokmetaverse@gmail.com</div>
                </div>
                <div style={{ maxWidth: '538px', display: 'flex', flexDirection: 'column', width: '100%' }} className={styles.formFields}>
                    <div className={styles.inputTitle}>Name</div>
                    <input type="text" className={styles.input} />
                    <div className={styles.inputTitle}>Email</div>
                    <input type="text" className={styles.input} />
                    <div className={styles.inputTitle}>What service are you interested in</div>
                    <select className={styles.input}>
                        <option disabled>Select project type</option>
                        <option>Metaverse Mapping</option>
                        <option>Metaverse ID</option>
                        <option>Metaverse Branding</option>
                        <option>Metaverse Development</option>
                        <option>Metaverse Marketing</option>
                    </select>
                    <div className={styles.inputTitle}>Budget</div>
                    <select className={styles.input}>
                        <option disabled>Select project budget</option>
                        <option>Less than $10,000</option>
                        <option>$10,000 - $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000 - $500,000</option>
                        <option>$500,000 - $1,000,000</option>
                        <option>More than $1,000,000</option>
                    </select>
                    <div className={styles.inputTitle}>Message</div>
                    <textarea className={styles.textarea} />
                    <div className={styles.submitButton}>Submit</div>
                </div>
            </div>
            
            </div>
            <div className={styles.footerClass}>
                <Footer />
            </div>
        </div>
    )
}

export default Contact