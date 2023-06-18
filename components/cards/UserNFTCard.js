import React, { useEffect, useState } from 'react'
import styles from '../../styles/NFTCard.module.css';
import Link from 'next/link';



const UserNFTCard = ({ nft }) => {
  const [variable, setVariable] = useState(false);

  useEffect(() => {
    setVariable(prevVariable => {
      if (nft.type === "" || !nft.type) {
        return false;
      } else {
        return true;
      }
    });
  }, [nft.type]);

  return (

    
    <Link href="product/1" className={styles.container}>
      {variable && <div className={styles.ribbon}>
        {nft.type}</div>}

      <div className={styles.image} style={{ backgroundImage: `url(${nft.image})` }}>
      </div>
      <div style={{ width: '100%' }}>
        <div className={styles.title}>{nft.name}</div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <div style={{ color: '#00AC4F', fontSize: '15px' }}>EUR {nft.price}</div>
            <div className={styles.place}>{nft.tokensOwned} Token</div>

          </div>
        </div>
      </div>
    </Link>

  )
}

export default UserNFTCard