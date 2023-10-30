/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from '../../styles/About.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import Link from 'next/link';

const About = () => {

    const krifinBenefits = [
        "<b>Co-investment</b>: KriFin's co-investment model allows even small investors to get involved in land and agriculture projects.",
        "<b>Decentralized finance</b>: KriFin uses blockchain technology to create a more transparent and efficient investment process.",
        "<b>Global reach</b>: KriFin is open to investors from all over the world.",
        "<b>Wide range of projects</b>: KriFin offers a wide range of land and agriculture projects to invest in.",
        "<b>Expert team</b>: KriFin has a team of experts in land and agriculture who can help you make informed investment decisions.",
        "<b>Carbon Sequestration</b>: KriFin partners with agriculture experts to assess the carbon sequestration potential of its land and agriculture projects and generates carbon credits based on the amount of carbon that its projects sequester."
    ];

    const whyKrifin = [
        "<b>High returns</b>: Land and agriculture have historically been very good investments, generating high returns over the long term.",
        "<b>Low correlation</b>: Land and agriculture are not highly correlated with other asset classes, such as stocks and bonds. This means that they can provide diversification to your investment portfolio.",
        "<b>Tangible assets</b>: Land and agriculture are tangible assets that have real value. This makes them a good hedge against inflation and other economic risks.",
        "<b>Social impact</b>: Investing in land and agriculture can help to support rural communities and promote sustainable development.",
    ]
    return (
        <div>
            <Navbar />
            <div className={styles.searchClass}>
                <Search />
            </div>
            <div className={styles.container}>
                <div className={styles.mainSection}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            Land Investments – Sustainable, Responsible and  Low Risk Returns
                        </div>
                        <div className={styles.description}>
                            Invest with Asia’s first Land Co-Investment Platform - KriFin and invest one of the most stable and highest return asset classes over the last decade.
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Link href={"/invest"} className={styles.button}>Invest Now</Link>
                        </div>
                    </div>
                    <img src='/png/about-image-7.png' style={{
                        width: "500px",
                        height: "600px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        filter: "brightness(0.7)"
                    }} />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>01</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KriFin</div>
                        </div>
                        <div className={styles.contentTitle}>
                            About
                        </div>
                        <div className={styles.contentDescription}>
                            KriFin: The First Land and Agriculture Co-Investment and Decentralized Finance Platform in Asia.
                            <br />
                            <br />
                            KriFin is a revolutionary new platform that is making it easier and more accessible than ever to invest in land and agriculture. We are the first platform in Asia to offer co-investment and decentralized finance (DeFi) solutions for these asset classes.
                            <br />
                            <br />
                            KriFin's co-investment platform allows users to pool their resources and invest in Land estates, Agricultural plantations and Farm projects. This makes it possible for even small investors to get directly involved in these sustainable, impact, high ROI and low risk asset classes, which have traditionally been out of reach for many people.
                            <br />
                            <br />
                            KriFin's DeFi solutions provide investors with a more efficient and transparent way to invest in land and agriculture. By using blockchain technology, KriFin can eliminate many of the middlemen and costs associated with traditional investing.
                            <br />
                            <br />
                            KriFin’s agriculture experts to assess the carbon sequestration potential of its land and agriculture projects and generates carbon credits and land tokens based on the amount of carbon that its project sequester.
                        </div>
                    </div>
                    <img src='/png/about-image-6.png' id="img2" style={{
                        width: "500px",
                        height: "700px",
                        objectFit: "cover",
                        filter: "brightness(0.5) blur(1px)"
                    }} />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>02</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KriFin</div>
                        </div>
                        <div className={styles.contentTitle}>
                            Our Financial Product
                        </div>
                        <div className={styles.contentDescription}>
                            KriFin is a financial product that allows investors to co-invest in land estates, agricultural plantations and farm projects to generate financial returns and support sustainable development. It is the first Land and agriculture co-investment and decentralized finance platform in Asia and it offers a unique feature of Carbon credit accounting for the agriculture land.
                            <br /><br />
                            <b>Why Invest in Land and Agriculture with KriFin?</b>
                            <br /><br />
                            There are many reasons why investors should consider investing in land and agriculture with KriFin. Here are just a few:
                            <br />
                            <ol className={styles.listItems}>
                                {
                                    whyKrifin.map((e, i) => {
                                        return <li key={i} dangerouslySetInnerHTML={{ __html: e }} />
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <img src='/png/about-image-3.png' id='img3' />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>03</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KriFin</div>
                        </div>
                        <div className={styles.contentTitle}>
                            Benefits
                        </div>
                        <div className={styles.contentDescription}>
                            <ol className={styles.listItems}>
                                {
                                    krifinBenefits.map((e, i) => {
                                        return <li key={i} dangerouslySetInnerHTML={{ __html: e }} />
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <img src='/png/about-image-8.png' id='img4' style={{
                        width: "500px",
                        objectFit: "cover",
                        height: "600px",
                        filter: "brightness(0.5) blur(1px)"
                    }} />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>04</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KriFin</div>
                        </div>
                        <div className={styles.contentTitle}>
                            How to Get Started with KriFin
                        </div>
                        <div className={styles.description}>
                            Getting started with KriFin is easy. Simply create an account on our website and browse through the available investment opportunities. Once you find a project that you are interested in, you can invest in it directly using cryptocurrency.
                            <br />
                            <br />
                            KriFin is committed to making it easy and accessible for everyone to invest in land and agriculture. We believe that these asset classes have the potential to generate significant wealth for our investors, while also having a positive impact on the world.
                            <br />
                            <br />
                            If you are looking for a way to invest in land estates and agriculture, KriFin is the perfect platform for you. We offer a wide range of projects to invest in, and our expert team is here to help you make informed investment decisions.
                            <br />
                            <br />
                            Sign up for KriFin today and start investing in your future!
                        </div>
                    </div>
                    <img src='/png/about-image-5.png' id='img5' />
                </div>
            </div>
            <div className={styles.footerClass}>
                <Footer />
            </div>
        </div>
    )
}

export default About