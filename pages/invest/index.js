import React, { useEffect, useState } from 'react'
import NFTCard from '../../components/cards/NFTCard'
import styles from '../../styles/Invest.module.css'
import Layout from '../../components/Layout'
import useWeb3 from '../../lib/useWeb3'
import useFirebase from '../../lib/useFirebase'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'

const Invest = () => {
    const [filters, setFilters] = useState([
        { name: 'All Categories', selected: true },
        { name: 'Land', selected: false },
        { name: 'Commercial complex', selected: false },
        { name: 'Residential complex', selected: false },
        { name: 'Office rental', selected: false },
        { name: 'Home rental', selected: false },
        { name: 'Show more +', selected: false },
    ])

    const { getNFTs } = useFirebase()

    const [nfts, setNFTs] = useState([])

    useEffect(() => {
        getNFTs().then((res) => {
            setNFTs(res)
        });
    }, [])




    return (
        <div>
            <Navbar />
            <div className={styles.searchClass}>
                <Search />
            </div>
        <div className={styles.container}>
            <div className={styles.discoverSection}>
                <div className={styles.filters}>
                    {
                        filters.map((filter, index) => (
                            <div key={index} className={styles.filter + ' ' + (filter.selected && styles.active)}>{filter.name}</div>
                        ))
                    }
                </div>
                <div className={styles.nfts}>
                    {
                        nfts.map((nft, index) => (
                            <NFTCard key={index} nft={nft} />
                        ))
                    }

                </div>
            </div>
        </div>
        <div className={styles.footerClass}>
                <Footer />
            </div>
        </div>
    )
}

export default Invest
