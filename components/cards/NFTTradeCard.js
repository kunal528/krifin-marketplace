import React from 'react'
import styles from '../../styles/NFTTradeCard.module.css';
import Image from 'next/image';

const NFTTradeCard = ({ nft, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.nftImage}>
        <img src={nft.image} width={90} height={90} style={{ objectFit: 'cover', borderRadius: '10px', margin: '0px 5px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, }}>
        <div className={styles.title}>{nft.name}</div>
        <span className={styles.apy}>
          <Image src="/png/green_triangle.png" height={20} width={15} /><div>APY {nft.apy}</div>
        </span>
        <div className={styles.row}>
          <div className={styles.quantity}>{nft.quantity} Tokens</div>
          <div className={styles.price}>{nft.price} MATIC</div>
        </div>
      </div>
    </div>
  )
}

export default NFTTradeCard