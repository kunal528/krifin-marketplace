import styles from '../styles/Home.module.css'
import data from '../data/Data.json'
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import NFTCard from '../components/cards/NFTCard';
// import Image from 'next/image';
import AssetCards from '../components/cards/AssetCards';
import TopInvestCard from '../components/cards/TopInvestCard';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Footer from '../components/Footer/Footer';
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
  useEffect(()=>{

  })
  return (
    <div>
      <Navbar />
      <div className={styles.searchClass}>
        <Search />
      </div>
    <div className={styles.mainClass}>
      <div className={styles.mainSection}>
        <div>
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="/invest"><div className={styles.buttonOutlined}>More NFTs</div></Link>
        </div>
      </div>
      <div className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>Why invest with us?</div>
        <div className={styles.allbenefits}>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/secure_invest.png" alt="Benefit" className={styles.benefitLogo1}/>
            <div>
              <div className={styles.benefitTitle}>Secure Investments </div>
              <div className={styles.benefitDesc}>Non-Market linked returns along with blockchain protection for every transaction.</div>
            </div>
            </div>
            <div className={styles.benefit}>
            <img src="./png/roi.png" alt="Benefit" className={styles.benefitLogo2} />
            <div>
              <div className={styles.benefitTitle}>Stable ROI</div>
              <div className={styles.benefitDesc}>Earn upto average 11 % pre-tax yields REIT NFT is the most secured Asset-backed NFTs with real-world properties providing APY 11-25%.</div>
            </div>
            </div>
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/ft.png" alt="Benefit" className={styles.benefitLogo3} />
            <div>
              <div className={styles.benefitTitle}>Fast Transactions</div>
              <div className={styles.benefitDesc}>Non- Market linked returns along with blockchain protection for every transaction.</div>
            </div>
            </div>
            <div className={styles.benefit}>
            <img src="./png/p2p.png" alt="Benefit" className={styles.benefitLogo4} />
            <div>
              <div className={styles.benefitTitle}>P2P Trade</div>
              <div className={styles.benefitDesc}>Earn upto average 11 % pre-tax yields REIT NFT is the most secured Asset-backed NFTs with real-world properties providing APY 11-25%.</div>
            </div>
            </div>
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/afford.png" alt="Benefit" className={styles.benefitLogo5}/>
            <div>
              <div className={styles.benefitTitle}>Affordable</div>
              <div className={styles.benefitDesc}>Non- Market linked returns along with blockchain protection for every transaction.</div>
            </div>
            </div>
            <div className={styles.benefit}>
            <img src="./png/liquidity.png" alt="Benefit" className={styles.benefitLogo6} />
            <div>
              <div className={styles.benefitTitle}>24 X 7 Liquidity</div>
              <div className={styles.benefitDesc}>Earn upto average 11 % pre-tax yields REIT NFT is the most secured Asset-backed NFTs with real-world properties providing APY 11-25%.</div>
            </div>
            </div>
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/legal.png" alt="Benefit" className={styles.benefitLogo7}/>
            <div>
              <div className={styles.benefitTitle}>Legal Compliance</div>
              <div className={styles.benefitDesc}>Non- Market linked returns along with blockchain protection for every transaction.</div>
            </div>
            </div>
            <div className={styles.benefit}>
            <img src="./png/transparent.png" alt="Benefit" className={styles.benefitLogo8} />
            <div>
              <div className={styles.benefitTitle}>Transparent</div>
              <div className={styles.benefitDesc}>Earn upto average 11 % pre-tax yields REIT NFT is the most secured Asset-backed NFTs with real-world properties providing APY 11-25%.</div>
            </div>
            </div>
          </div>
          
          
          
          </div>
          
        
      </div>
      
      <div className={styles.randomAssets}>
        <div className={styles.randomAssetsColOne}>
          <img src="https://images.pexels.com/photos/284991/pexels-photo-284991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" className={styles.coloneImg}/>
          <div className={styles.randomAssetsColOneData}>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" className={styles.coloneProfileImg}/>
            <div className={styles.placeDetail}>
              <p className={styles.placeDetailHeading}>AVB Mansion</p>
              <p className={styles.placeDetailLoc}>Mumbai India</p>
            </div>
            <div className={styles.priceDetail}>
              <p className={styles.priceDetailHeading}>Valuation</p>
              <p className={styles.priceDetailValue}>25000000EUR</p>
            </div>
          </div>
        </div>
        <div className={styles.randomAssetsColTwo}>
        <AssetCards name={"Lotus Temple"} percentage={"11"} loc={"Delhi, India"} image={"https://images.pexels.com/photos/5209177/pexels-photo-5209177.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
        <AssetCards name={"The Futr Abstr"} percentage={"12.3"} loc={"1 of 8"} image={"https://images.pexels.com/photos/175771/pexels-photo-175771.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
        <AssetCards name={"Leaf Mount"} percentage={"2.5"} loc={"1 of 8"} image={"https://images.pexels.com/photos/4086523/pexels-photo-4086523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
        </div>
        <div className={styles.randomAssetsColThree}>
          <p className={styles.colthreeheading}>Top Investments</p>
          <p className={styles.daysLeft} style={{color: '#3D00B7'}}>Last 7 days</p>
          <TopInvestCard no={"1"} name="Earth 3.0" totInvest={"19739.39"} pnl={true} pnlVal={"25.53%"}
          image={"https://images.pexels.com/photos/2090653/pexels-photo-2090653.jpeg?auto=compress&cs=tinysrgb&w=600"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"2"} name="Island Resort" totInvest={"2,769.39"} pnl={false} pnlVal={"10.52%"}
          image={"https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"3"} name="Frensware" totInvest={"9,232.39"} pnl={true} pnlVal={"2.52%"}
          image={"https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"4"} name="PunkArt" totInvest={"3,769.39"} pnl={true} pnlVal={"1.52%"}
          image={"https://images.pexels.com/photos/6361842/pexels-photo-6361842.png?auto=compress&cs=tinysrgb&w=600"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"5"} name="Art Crypto" totInvest={"10,769.39"} pnl={false} pnlVal={"2.52%"}
          image={"https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=600"} />
          {/* <Image src="/png/topinvest.png" width={400} height={550} /> */}
        </div>
      </div>
      <div className={styles.partnerOfferSection}>
        <img src="./png/partner-offer.png" alt="Partner" className={styles.partnerOfferImg}/>
        <div className={styles.partnerOfferContent}>
          <div className={styles.partnerOfferHeader}>Want to partner with us ?</div>
          <div className={styles.partnerOfferdescription} style={{ marginBottom: '30px' }}>We partner with  open-end real estate investment trust focused on managing a portfolio of retail and mixed-use retail community and neighbourhood centres, generally in the mid-market range of $10 to $50 million, from both primary and secondary markets across Dubai, Europe, and United Kingdom.</div>
          <div style={{ display: 'flex', marginBottom: '30px' }}>
            <div className={styles.connectButton}>Connect Us</div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footerClass}>
      <Footer />
    </div>
    </div>
  )
}
