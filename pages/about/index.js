import React from 'react'
import styles from '../../styles/About.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import Link from 'next/link';

const About = () => {

    const krifinBenefits = [
        "Co-investment: Krifin's co-investment model allows even small investors to get involved in land and agriculture projects.",
        "Decentralized finance: Krifin uses blockchain technology to create a more transparent and efficient investment process.",
        "Global reach: Krifin is open to investors from all over the world.",
        "Wide range of projects: Krifin offers a wide range of land and agriculture projects to invest in.",
        "Expert team: Krifin has a team of experts in land and agriculture who can help you make informed investment decisions.",
        "Carbon Sequestration: Krifin partners with agriculture experts to assess the carbon sequestration potential of its land and agriculture projects and generates carbon credits based on the amount of carbon that its projects sequester."
    ];
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
                            Land Investments – Sustainable, responsible and  Low Risk Returns
                        </div>
                        <div className={styles.description}>
                            Invest with Asia’s first Land Co-Investment Platform - Krifin and invest one of the most stable and highest return asset classes over the last decade.
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Link href={"/invest"} className={styles.button}>Invest Now</Link>
                        </div>
                    </div>
                    <img src='/png/about-image-1.png' />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>01</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KRIFIN</div>
                        </div>
                        <div className={styles.contentTitle}>
                            About
                        </div>
                        <div className={styles.contentDescription}>
                            Krifin: The First Land and Agriculture Co-Investment and Decentralized Finance Platform in Asia
                            <br />
                            <br />
                            Krifin is a revolutionary new platform that is making it easier and more accessible than ever to invest in land and agriculture. We are the first platform in Asia to offer co-investment and decentralized finance (DeFi) solutions for these asset classes.
                            <br />
                            <br />
                            Krifin's co-investment platform allows users to pool their resources and invest in land estate plantations and agriculture projects together. This makes it possible for even small investors to get directly involved in these sustainable, impact, High ROI and low risk asset classes, which have traditionally been out of reach for many people.
                            <br />
                            <br />
                            Krifin's DeFi solutions provide investors with a more efficient and transparent way to invest in land and agriculture. By using blockchain technology, Krifin can eliminate many of the middlemen and costs associated with traditional investing.
                        </div>
                    </div>
                    <img src='/png/about-image-2.png' id="img2" />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>02</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KRIFIN</div>
                        </div>
                        <div className={styles.contentTitle}>
                            Our Financial Product
                        </div>
                        <div className={styles.contentDescription}>
                            Krifin is a financial product that allows investors to co-invest in land and agriculture projects to generate financial returns and support sustainable development. It is the first Land and agriculture co-investment and decentralized finance platform in Asia and it offers a unique feature of Carbon credit accounting for the agriculture land.
                        </div>
                    </div>
                    <img src='/png/about-image-3.png' id='img3' />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>03</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KRIFIN</div>
                        </div>
                        <div className={styles.contentTitle}>
                            Benefits
                        </div>
                        <div className={styles.contentDescription}>
                            <ol className={styles.listItems}>
                                {
                                    krifinBenefits.map((e, i) => {
                                        return <li key={i}>{e}</li>
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <img src='/png/about-image-4.png' id='img4' />
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.index}>04</div>
                        <div className={styles.krifinSection}>
                            <div className={styles.dash} />
                            <div className={styles.krifinTitle}>KRIFIN</div>
                        </div>
                        <div className={styles.contentTitle}>
                            How to Get Started with Krifin
                        </div>
                        <div className={styles.description}>
                            Getting started with Krifin is easy. Simply create an account on our website and browse through the available investment opportunities. Once you find a project that you are interested in, you can invest in it directly using cryptocurrency.
                            <br />
                            <br />
                            Krifin is committed to making it easy and accessible for everyone to invest in land and agriculture. We believe that these asset classes have the potential to generate significant wealth for our investors, while also having a positive impact on the world.
                            <br />
                            <br />
                            If you are looking for a way to invest in land and agriculture, Krifin is the perfect platform for you. We offer a wide range of projects to invest in, and our expert team is here to help you make informed investment decisions.
                            <br />
                            <br />
                            Sign up for Krifin today and start investing in your future!
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