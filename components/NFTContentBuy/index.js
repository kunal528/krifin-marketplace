import React, { useEffect, useState } from 'react'
import styles from '../../styles/NFTContentBuy.module.css'
import Image from 'next/image'
import SellerCards from '../cards/SellerCards'
import useWeb3 from '../../lib/useWeb3'
import { toast } from 'react-toastify'

const NFTContentBuy = ({ nft }) => {
  const { trade } = useWeb3()
  const handleSubmit = async (order) => {
    await toast.promise(trade(order.tokenId, order.quantity, order.price, order.seller), {
      pending: 'Trading Started...',
      success: 'Trading Successful',
      error: 'Trading Rejected',
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <div className={styles.title}>
            {nft.name}
            <span className={styles.place}>
              {nft.city},{" "}
              {nft.country}
            </span>
          </div>
          <img
            src={nft.image}
            alt="NFT Image"
            className={styles.image}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className={styles.header}>Description</div>
          <div className={styles.content} style={{
            marginBottom: '30px'
          }}>
            {nft.description}
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.header}>Asset Valuation</div>
              <div className={styles.content}>{nft.totalAssetValue} EUR</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.header}>Asset Type</div>
              <div className={styles.content}>{nft.assetType}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.header}>Pre Tax Yield</div>
              <div className={styles.content}>{nft.apy ?? "5%"}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.header}>Active Earning</div>
              <div className={styles.content}>{nft.activeEarning ? 'Yes' : 'No'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header}>Orders:</div>
      <div>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderData} style={{ flex: '0.20' }}>Quantity</div>
          <div className={styles.tableHeaderData} style={{ flex: '0.20' }}>Price</div>
          <div className={styles.tableHeaderData} style={{ flex: '0.45' }}>Seller</div>
          <div className={styles.tableHeaderData} style={{ flex: '0.15' }}></div>
        </div>
        {
          nft.orders.map((item, i) => {
            return <div key={i} className={styles.tableRow}>
              <div style={{ flex: '0.20' }}>{item.quantity}</div>
              <div style={{ flex: '0.20' }}>{item.price} MATIC</div>
              <div style={{ flex: '0.45' }}>{item.seller}</div>
              <div style={{ flex: '0.15' }}><div className={styles.button} onClick={() => handleSubmit(item)}>Buy</div></div>
            </div>
          })
        }
      </div>
      <div className={styles.map}>
        <div className={styles.mapHeader} style={{ fontSize: '1.5rem', marginTop: '20px' }}>Location</div>
        <div className={styles.mapImage} style={{ marginTop: '10px', objectFit: 'cover' }}>
          <img src="/png/map.png" style={{ objectFit: 'cover', height: '300px', width: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default NFTContentBuy