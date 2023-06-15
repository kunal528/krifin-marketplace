import styles from '../styles/Home.module.css'
import CardOne from '../components/Cardone/CardOne'
import data from '../data/Data.json'
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Home() {
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
    
    
    <div className={styles.main}>
      <div className={styles.mainSection}>
        <div style={{ maxWidth: '562px' }}>
          <div className={styles.header}>Buy, Sell and Invest in Real Estate Tokens & REIT</div>
          <div className={styles.description}>Invest like the top 1%  and earn passive dividends on our curated investment opportunities</div>
          <div style={{ display: 'flex', marginBottom: '30px' }}>
            <div className={styles.button}>Invest Now</div>
          </div>
          <div className={styles.stats}>
            <div>
              <div className={styles.statTitle}>11%</div>
              <div className={styles.statDesc}>Av. Yield</div>
            </div>
            <div>
              <div className={styles.statTitle}>17k+</div>
              <div className={styles.statDesc}>Auction</div>
            </div>
            <div>
              <div className={styles.statTitle}>14k+</div>
              <div className={styles.statDesc}>Investors</div>
            </div>
          </div>
        </div>
        <img src="./png/home.png" alt="Hero" />
      </div>
      <div className={styles.discoverSection}>
        <div className={styles.discoverHeader}>Discover more Assets</div>
        <div className={styles.filters}>
          {
            filters.map((filter, index) => (
              <div key={index} className={styles.filter + ' ' + (filter.selected && styles.active)}>{filter.name}</div>
            ))
          }
        </div>
        <div className={styles.container}>
      
      {data.map((data, i)=>(
        <CardOne onClick={()=>{
          
        }} key={i} image={data.image} name={data.name} rate={data.pretaxYield} city={data.City} country={data.Country} price={data.perNFTvalue} type={data.Type}/>
      ))}

      
    </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.buttonOutlined}>More NFTs</div>
        </div>
      </div>
      <div className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>Buy the most interesting web3 Assets  here...</div>
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <img src="./png/benefit.png" alt="Benefit" className={styles.benefitLogo} />
            <div>
              <div className={styles.benefitTitle}>Secure  Investments </div>
              <div className={styles.benefitDesc}>Non- Market linked returns along with blockchain protection for every transaction.</div>
            </div>
          </div>
          <div className={styles.benefit}>
            <img src="./png/benefit.png" alt="Benefit" className={styles.benefitLogo} />
            <div>
              <div className={styles.benefitTitle}>Stable ROI</div>
              <div className={styles.benefitDesc}>Earn upto average 11 % pre-tax yields REIT NFT is the most secured Asset-backed NFTs with real-world properties providing APY 11-25%.</div>
            </div>
          </div>
          <div className={styles.benefit}>
            <img src="./png/benefit.png" alt="Benefit" className={styles.benefitLogo} />
            <div>
              <div className={styles.benefitTitle}>Benefits</div>
              <div className={styles.otherBenefits}>
                <div>
                  <div className={styles.otherBenefitsHeader}>Affordable</div>
                </div>
                <div>
                  <div className={styles.otherBenefitsHeader}>24 x 7 Liquidity</div>
                  <div className={styles.otherBenefitsDesc}>P2P Trade</div>
                </div>
                <div>
                  <div className={styles.otherBenefitsHeader}>Legal Compliance</div>
                </div>
                <div>
                  <div className={styles.otherBenefitsHeader}>Fast Transactions</div>
                  <div className={styles.otherBenefitsDesc}>Our transactions are executed in T+0 Time Schedule)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this is in progress... needs to be completed */}
    <div className={styles.randomAssets}>
        <div className={styles.randomAssetsColOne}>
          <Image src="https://images.pexels.com/photos/284991/pexels-photo-284991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={350} height={350} style={{borderRadius: '20px'}}/>
          <div className={styles.randomAssetsColOneData}>
            <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={50} height={50} style={{borderRadius: '100%', border: '0.7px solid black'}}/>
            <div className={styles.placeDetail}>
              <p style={{fontSize: '20px', fontWeight: 400}}>AVB Mansion</p>
              <p style={{fontSize: '10px', marginTop: '8px', color: 'white'}}>Mumbai India</p>
            </div>
            <div className={styles.priceDetail}>
              <p style={{fontSize: '12px', fontWeight: 400}}>Valuation</p>
              <p style={{fontSize: '15px', fontWeight: 600}}>25000000EUR</p>
            </div>
          </div>
        </div>
        <div className={styles.randomAssetsColTwo}>

        </div>
        <div className={styles.randomAssetsColThree}></div>
      <div className={styles.partnerOfferSection}>
        <img src="./png/partner-offer.png" alt="Partner" />
        <div style={{ maxWidth: '610px' }}>
          <div className={styles.partnerOfferHeader}>Want to partner with us ?</div>
          <div className={styles.description} style={{ marginBottom: '30px' }}>We partner with  open-end real estate investment trust focused on managing a portfolio of retail and mixed-use retail community and neighbourhood centres, generally in the mid-market range of $10 to $50 million, from both primary and secondary markets across Dubai, Europe, and United Kingdom.</div>
          <div style={{ display: 'flex', marginBottom: '30px' }}>
            <div className={styles.button}>Connect Us</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
