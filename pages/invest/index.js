import React, { useState } from 'react'
import NFTCard from '../../components/cards/NFTCard'
import styles from '../../styles/Invest.module.css'
import Layout from '../../components/Layout'

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

    return (
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
                        Array(12).fill(0).map((_, index) => (
                            <NFTCard key={index} nft={{
                                "id": 1,
                                "name": "Taj Mahal",
                                "image": "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600",
                                "address": "",
                                "assetType": "utility",
                                "perNFTvalue": "980.00",
                                "pretaxYield": "20.5",
                                "AE": 1,
                                "AEStablePeriod": "",
                                "RepaymentSession": "",
                                "Developer": "",
                                "CurrentMajorHolder": "",
                                "Management": "",
                                "city": "Delhi",
                                "country": "India",
                                "Description": "",
                                "CalltoAction": "",
                                "type": "Premium"
                            }} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Invest

Invest.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
