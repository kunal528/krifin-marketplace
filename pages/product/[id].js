import React, { useEffect } from 'react'
import styles from '../../styles/Product.module.css'
import Layout from '../../components/Layout'
import useFirebase from '../../lib/useFirebase'
import useWeb3 from '../../lib/useWeb3'
import { useRouter } from 'next/router'

const Product = () => {
    const [quantity, setQuantity] = React.useState(0)
    const { purchaseToken, web3, marketplaceContract } = useWeb3()
    const [nft, setNFT] = React.useState(null)
    const { getNFT } = useFirebase()
    const router = useRouter()

    const { id } = router.query

    useEffect(() => {
        if (parseInt(id) > 0) {
            getNFT(id).then((res) => {
                setNFT(res)
            });
        }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        purchaseToken(nft.id, quantity, nft.price)
    }

    if (!nft) {
        return <div>Loading</div>
    }
    return (
        <div className={styles.container}>
            <div style={{ maxWidth: '592px' }}>
                <div className={styles.name}>{nft.name}</div>
                <img src={nft.image} alt="Picture of the author" className={styles.image} />
                <div className={styles.description}>{nft.description}</div>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>{nft.name}</div>
                <div className={styles.subtitle}>{nft.description}</div>

                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>City, Country</div>
                        <div className={styles.statDesc}>{nft.city}, {nft.country}</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Asset Type</div>
                        <div className={styles.statDesc}>{nft.assetType}</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle} >Asset Valuation</div>
                        <div className={styles.price}>EUR {nft.totalAssetValue}</div>
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
                        <div className={styles.statDesc}>{nft.price} MATIC</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle} >Active Earnings (AE)</div>
                        <div className={styles.statDesc}>{nft.activeEarning ? 'Yes' : 'No'}</div>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>AE Repayment Period</div>
                        <div className={styles.statDesc}>{nft.repaymentSession}</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>AE Stability Period</div>
                        <div className={styles.statDesc}>{nft.stablePeriod}</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>AE Type</div>
                        <div className={styles.statDesc}>{nft.type}</div>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Address : </div>
                    </div>
                    <div className={styles.statDesc}>{nft.address}</div>
                </div>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Number of Tokens</div>
                        <div className={styles.statDesc}>{nft.totalSupply}</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Majority Stakeholder</div>
                        <div className={styles.statDesc}>{nft.majorityShareholder}</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statTitle}>Carpet Area</div>
                        <div className={styles.statDesc}>{nft.area} sq. ft.</div>
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <input type="number" placeholder="Quantity" className={styles.input} onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                    <div className={styles.buy} onClick={handleSubmit}>BUY NOW</div>
                </div>
            </div>

        </div>
    )
}

export default Product

Product.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}