import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Topinvest.module.css'

const TopInvestCard = ({no, name, totInvest, image, pnl, pnlVal}) => {
  return (
    <div className={styles.investmain}>
        <div className={styles.investcardno}><b>{no}</b></div>
        <div className={styles.investcardimg}>
            <Image src={image} alt="investcardimg" width={50} height={50} style={{borderRadius: '100%'}}/>
        </div>
        <div className={styles.content}>
            <div className={styles.investcardname}>{name}</div>
            <div className={styles.investcardtotinvest}><Image src="/png/white_eth.png" height={25} width={15} /><p style={{color: '#636363', fontWeight: '1000', fontSize :'12px'}}> {totInvest}</p></div>
        </div>
        <div className={styles.profitorloss} style={pnl ? {color: '#14C8B0'}:{color: '#FF002E'}}>
            <b>{pnl ? "+" : "-" }</b>{pnlVal}
        </div>
    </div>
  )
}

export default TopInvestCard