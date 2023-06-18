import React from 'react'
import styles from '../../styles/Product.module.css'
import Layout from '../../components/Layout'

const Product = () => {
    return (
        <div className={styles.container}>
            <div style={{ maxWidth: '592px' }}>
                <div className={styles.name}>Sundar Luxury Villa</div>
                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg" alt="Picture of the author" className={styles.image} />
                <div className={styles.description}>
                    Owners of villa NFTs don't actually have a pair of physical villa
                    but possess digital avatars of the villa . Mention details about the property.  </div>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>SUNDAR LUXURY VILLA</div>
                <div className={styles.subtitle}>Owners of villa NFTs don't actually have a pair of physical villa
                    but possess digital avatars of the villa </div>

                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>City, Country</div>
                        <div className={styles.statDesc}>Vienna, Austria</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Asset Type</div>
                        <div className={styles.statDesc}>Utility Token</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle} >Asset Valuation</div>
                        <div className={styles.price}>EUR 2,654,000.00</div>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Average Pre-Tax Yield </div>
                        <div className={styles.statDesc}>5%</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Investment Value</div>
                        <div className={styles.statDesc}></div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle} >Active Earnings (AE)</div>
                        <div className={styles.statDesc}>Yes</div>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>AE Repayment Period</div>
                        <div className={styles.statDesc}>24 Months</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>AE Stability Period</div>
                        <div className={styles.statDesc}>12 Months</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>AE Type</div>
                        <div className={styles.statDesc}>House Rental</div>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Address : </div>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Number of Tokens</div>
                        <div className={styles.statDesc}>10,000</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Majority Stakeholder</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Carpet Area</div>
                        <div className={styles.statDesc}>560 sq. ft.</div>
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <div className={styles.buy}>BUY NOW</div>
                </div>
            </div>

        </div>
    )
}

export default Product

Product.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}