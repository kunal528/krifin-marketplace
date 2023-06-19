import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/HowITWorks.module.css'

function HowITWorks() {
    return (
        <div className={styles.container}>
            <div className={styles.header1}>HOW ITS WORKS</div>
            <div className={styles.header2}>This platform also serves as the official metaverse mapping and authorisation platform for the metaverse council and we are responsible for assigning the metaverse ID to every web3 virtual world in the ecosystem. </div>
            <div className={styles.mainSection}>
                <div className={styles.content}>
                    <div className={styles.header1} style={{ textAlign: 'left' }}>INVESTORS</div>
                    <div className={styles.description}>
                        <ol>
                            <li><b>Explore luxury assets fractional NFTs  in the primary and secondary markets. Read about the asset and its valuation report.</b><br />View all listed NFTs & collections that are currently either up for sale through initial asset offering (IAO) where you can make custom offers or directly buy fractional NFTs traded in the secondary market
                            </li>
                            <li>
                                <b>IAO bid is accepted [Primary Market]</b>
                                <br />When your bid is accepted, your principal is sent to the owner. The real world asset is put in a secure vault and the NFT of the asset is either:
                            </li>
                            <ul>
                                <li>Loan IAO: NFT placed in a secure escrow smart contract for the duration of loan and Debt bonds investor receives Fractional NFT with expiration on maturity period</li>
                                <li>Equity IAO: Fractional NFT ownership is transferred to the investor/new owner</li>
                            </ul>
                            <li><b>Loan Investors - Earn interest</b><br />When the borrower repays the loan, you will automatically receive your principal plus the interest in your wallet!
                            </li>
                            <li><b>Equity Investors</b>
                                <br />
                                Like equity, Increase in valuation of an asset allows you to sell or trade your ownership rights in the secondary asset market  for a higher price.
                                <br />
                                These assets include - Gold, Real estate, Jewelry, Art and Collectibles with approved market valuation to perform positively in the market.
                            </li>
                        </ol>

                    </div>
                    <div className={styles.header1} style={{ textAlign: 'left' }}>HNI Borrowers</div>
                    <div className={styles.description}>
                        <ol>
                            <li>Click on Apply</li>
                            <li>You would be redirected to an application.</li>
                            <li>After submitting your application, one of our advisors will contact you in 1-2 working days to set up an appointment.</li>
                            <li>After the meeting, our in-house team of experts will evaluate your asset in 2-4 days</li>
                            <li>If your asset is qualified for financing through initial asset offering. In most cases, we provide immediate liquidation of up to 10% of the total sanctioned loan amount.</li>
                            <li>We help you secure insurance and vault security if required.</li>
                            <li>We release IAO of your asset as per the agreed mandate</li>
                            <li>The whole process from valuation to IAO takes 2 - 4 weeks.</li>
                        </ol>

                        We value the privacy of our clients. Therefore, unless requested otherwise, identity of the asset owner in all the IAOs and auctions are kept confidential.
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px 0' }}>
                    <img src="/png/how-it-work-1.png" className={styles.image} />
                    <img src="/png/how-it-work-2.png" className={styles.image} />
                    <img src="/png/how-it-work-3.png" className={styles.image} />
                    <img src="/png/how-it-work-4.png" className={styles.image} />
                    <img src="/png/how-it-work-5.png" className={styles.image} />

                </div>
            </div>
        </div>
    )
}

export default HowITWorks

HowITWorks.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}