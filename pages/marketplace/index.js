import React from 'react'
import styles from '../../styles/Marketplace.module.css'
import Image from 'next/image'
import NFTOptionCard from '../../components/cards/NFTOptionCard'
import NFTContent from '../../components/NFTContent'
import Layout from '../../components/Layout'

const Marketplace = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.searchAssets}>
                    <p className={styles.title}>Krifin Marketplace</p>

                    <div className={styles.searchBox}>

                        <div className={styles.searchBackground}>

                            <div className={styles.searchContainer}>
                                <button className={styles.searchButton}>
                                    <Image src='/png/search.png' height={20} width={20} />
                                </button>
                                <input type="search" className={styles.searchInput} placeholder="Search" />


                            </div>
                            <Image src='/png/filter.png' height={30} width={30} style={{ margin: '5px 20px' }} />
                        </div>
                    </div>
                    <hr style={{ width: '100%', height: '2px', backgroundColor: 'white', border: 'none', margin: '4px 0px' }} />
                    <div className={styles.allnfts}>
                        <div className={styles.allnftscard}>
                            <NFTOptionCard />
                            <NFTOptionCard />
                            <NFTOptionCard />
                            <NFTOptionCard />
                            <NFTOptionCard />
                            <NFTOptionCard />
                            <NFTOptionCard />
                            <NFTOptionCard />
                            <NFTOptionCard />

                        </div>
                    </div>
                </div>
                <div className={styles.displayAsset}>
                    <NFTContent />
                </div>
            </div>
        </div>
    )
}

export default Marketplace

Marketplace.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}