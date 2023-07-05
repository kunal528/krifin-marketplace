import React from 'react'
import styles from '../../styles/About.module.css';
import Layout from '../../components/Layout';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainSection}>
                <div style={{ maxWidth: '690px' }}>
                    <div className={styles.title}>
                        Buy,Sell And Invest In Luxury Assets Tokens
                    </div>
                    <div className={styles.description}>
                        The world’s first asset - backed NFT marketplace for real  world  luxury assets with ROI where you can buy with your credit card
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className={styles.button}>Shop Now</div>
                    </div>
                </div>
                <img src='/png/about-image-1.png' />
            </div>
            <div className={styles.contentSection}>
                <div style={{ maxWidth: '600px' }}>
                    <div className={styles.index}>01</div>
                    <div className={styles.krifinSection}>
                        <div className={styles.dash} />
                        <div className={styles.krifinTitle}>House of Krifin</div>
                    </div>
                    <div className={styles.contentTitle}>
                        About
                    </div>
                    <div className={styles.contentDescription}>
                        Krifin is the world’s first asset-backed Fractional NFT marketplace & DEX for luxury assets with a primary focus on Real Estate, where people can buy, sell and invest in fractions of luxury assets using cryptocurrencies and traditional payments methods.
                        <br />
                        <br />
                        We are creating a new class of financial assets based on product equity which could help provide liquidity to  the luxury assets investments of HNIs and institutional investors by making their investments available as a token to the retail investors.
                        <br />
                        <br />
                        The  primary use case of this platform is tokenization of real world assets - Art, Collectibles, Copyright Licenses, Equities, Financial Instruments, Precious Metals, and Real Estate etc..
                    </div>
                </div>
                <img src='/png/about-image-2.png' id="img2"/>
            </div>
            <div className={styles.contentSection}>
                <div style={{ maxWidth: '600px' }}>
                    <div className={styles.index}>02</div>
                    <div className={styles.krifinSection}>
                        <div className={styles.dash} />
                        <div className={styles.krifinTitle}>House of Krifin</div>
                    </div>
                    <div className={styles.contentTitle}>
                        Our Financial Product
                    </div>
                    <div className={styles.contentDescription}>
                        We are creating a new financial asset class use case for NFTs that goes beyond digital art. Asset-backed NFTs could be the new revolution for equity ownerships of real world assets
                        <br />
                        <br />
                        Luxury Asset Equity
                        <br />
                        Luxury Asset Loan
                    </div>
                </div>
                <img src='/png/about-image-3.png' id='img3'/>
            </div>
            <div className={styles.contentSection}>
                <div style={{ maxWidth: '600px' }}>
                    <div className={styles.index}>03</div>
                    <div className={styles.krifinSection}>
                        <div className={styles.dash} />
                        <div className={styles.krifinTitle}>House of Krifin</div>
                    </div>
                    <div className={styles.contentTitle}>
                        Benefits
                    </div>
                    <div className={styles.contentDescription}>
                        <ol>
                            <li>Invest with the world’s largest blockchain-powered marketplace for Luxury asset NFTs worldwide.</li>
                            <li>Users can easily buy, trade and hold non-fungible tokens (NFT) which are fully asset backed by real-world assets.</li>
                            <li>All the tangible assets are physically stored in a high-security vault in Liechtenstein and are insured by Lloyd’s London.</li>
                            <li>All NFTs are 1-1 assets which are broken down into fractional NFTs where a single FNFT value is equal to USD $1 . Therefore, there is a different number of total Fractional NFTs for every different asset due to difference of assets.</li>
                            <li>All assets are certified by the A.I. algorithm for appraisals</li>
                            <li>Eliminate counterfeiting while minting an NFT on a multi-chain blockchain network,</li>
                            <li>“Own To Earn” model.</li>
                            <li>a focus on luxury assets that hold value well and have a high reselling value.</li>
                            <li>leverage your proprietary  big data intelligence system and unique algorithm for automated data collecting and data processing, the value of each NFT on our platform is backed by real-world data.</li>
                        </ol>
                    </div>
                </div>
                <img src='/png/about-image-4.png' id='img4'/>
            </div>
            <div className={styles.contentSection}>
                <div style={{ maxWidth: '600px' }}>
                    <div className={styles.index}>04</div>
                    <div className={styles.krifinSection}>
                        <div className={styles.dash} />
                        <div className={styles.krifinTitle}>House of Krifin</div>
                    </div>
                    <div className={styles.contentTitle}>
                        NFT EQUITY   &   NFT LOAN
                    </div>
                    <div className={styles.contentDescription}>
                        The main difference between NFT loans and NFT equity is that with an NFT loan, you are borrowing money against the value of your NFT, while with NFT equity, you are selling a portion of ownership in your NFT.
                        <br />
                        Here is a table summarizing the key differences between NFT loans and NFT equity:
                    </div>
                </div>
                <img src='/png/about-image-5.png' id='img5'/>
            </div>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <div className={styles.headerItem}>Features</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>NFT Equity</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>NFT Loan</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={styles.headerItem}>What you are giving up</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>Collateral</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>Ownership</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={styles.headerItem}>How much you can raise</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>Up to the value of your NFT</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>Depends on the investor</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={styles.headerItem}>Control over your NFT</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>You retain full control</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>You share control with the investor</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={styles.headerItem}>Risk</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>The lender can seize your NFT if you default on the loan</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>The investor can sell their stake in your NFT at any time</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={styles.headerItem}>Best for</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>Accessing cash quickly</div>
                    <div className={styles.verticalDivider} />
                    <div className={styles.headerItem}>Accessing cash quickly</div>
                </div>
            </div>
            <div className={styles.enddescription} style={{ textAlign: 'center', marginBottom:'100px' }}>It is important to do your research and understand the risks involved before choosing between an NFT loan and NFT equity.</div>
            <div className={styles.enddescription}>
                <b style={{ fontSize: '20px' }}>Which is Right for You?</b>
                <br />
                <br />
                The best option for you will depend on your individual circumstances and goals. If you need to access cash quickly, an NFT loan may be a good option. However, if you are looking to raise capital for a long-term project, NFT equity may be a better choice.
            </div>
        </div>
    )
}

export default About

About.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}