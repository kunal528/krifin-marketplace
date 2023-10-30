import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

import AssetCards from '../components/cards/AssetCards';
import TopInvestCard from '../components/cards/TopInvestCard';

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
          <div className={styles.header}>Buy, Sell and Invest in Farm Estates, Land Tokens and REITs</div>
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
        <img src="./png/farm.png" alt="Hero" width={450} height={400} style={{borderRadius: '10%'}}/>
      </div>
      <div className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>Why invest with us?
          <div className={styles.benefitHeaderDesc}>We believe that land is a relatively high-yield, less volatile and low-risk asset class that can be an excellent choice to diversify your portfolio, especially in light of the rising need for food to feed the burgeoning global population of around 10 billion by 2050. Land investments are sustainable, responsible, provide inflation hedge with high rates of return (12%).</div>
        </div>
        <div className={styles.allbenefits}>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/secure_invest_bg_remove.png" alt="Benefit" className={styles.benefitLogo1}/>
            <div>
              <div className={styles.benefitTitle}>Easy to use platform </div>
              <ul style={{marginLeft: '-20px'}}>
                <li><div className={styles.benefitDesc}>Effortless and affordable access</div></li>
                <li><div className={styles.benefitDesc}>Predictive analytics</div></li>
                <li><div className={styles.benefitDesc}>Secondary market for 24X7 liquidity </div></li>
              </ul>
            </div>
            </div>
            {/* <div className={styles.benefit}>
            <img src="./png/roi.png" alt="Benefit" className={styles.benefitLogo2} />
            <div>
              <div className={styles.benefitTitle}>Impact investments</div>
              <ul>
                <li><div className={styles.benefitDesc}>Green Investment</div></li>
                <li><div className={styles.benefitDesc}>Carbon emissions accounting for sustainable practices </div></li>
                <li><div className={styles.benefitDesc}>Low risk and low volatility</div></li>
              </ul>
            </div>
            </div> */}
            
          </div>
          <div className={styles.benefits}>
          <div className={styles.benefit}>
            <img src="./png/roi.png" alt="Benefit" className={styles.benefitLogo2} />
            <div style={{marginLeft: '-15px'}}>
              <div className={styles.benefitTitle}>Impact investments</div>
              <ul style={{marginLeft: '-20px'}}>
                <li><div className={styles.benefitDesc}>Green Investment</div></li>
                <li><div className={styles.benefitDesc}>Carbon emissions accounting for sustainable practices </div></li>
                <li><div className={styles.benefitDesc}>Low risk and low volatility</div></li>
              </ul>
            </div>
            </div>
            </div>
            
            <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/legal.png" alt="Benefit" className={styles.benefitLogo7}/>
            <div>
              <div className={styles.benefitTitle}>Asset backed investment</div>
              <ul style={{marginLeft: '-20px'}}>
                <li><div className={styles.benefitDesc}>Get real time data of your assets</div></li>
                <li><div className={styles.benefitDesc}>Your investments are backed by the land</div></li>
                <li><div className={styles.benefitDesc}>We use collateral agent for extra security layer</div></li>
              </ul>
            </div>
            </div>
            </div>
            <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/transparent.png" alt="Benefit" className={styles.benefitLogo8} />
            <div>
              <div className={styles.benefitTitle}>Global access</div>
              <ul style={{marginLeft: '-20px'}}>
                <li><div className={styles.benefitDesc}>International investment opportunity for retail investors </div></li>
                <li><div className={styles.benefitDesc}>Decentralized co-investments based across the world</div></li>
                <li><div className={styles.benefitDesc}>Custom portfolio management for institutional investors</div></li>
              </ul>
            </div>
            </div>
            </div>
          {/* <div className={styles.benefits}>
            <div className={styles.benefit}>
            <img src="./png/legal.png" alt="Benefit" className={styles.benefitLogo7}/>
            <div>
              <div className={styles.benefitTitle}>Asset backed investment</div>
              <ul>
                <li><div className={styles.benefitDesc}>Get real time data of your assets</div></li>
                <li><div className={styles.benefitDesc}>Your investments are backed by the land</div></li>
                <li><div className={styles.benefitDesc}>We use collateral agent for extra security layer</div></li>
              </ul>
            </div>
            </div>
            <div className={styles.benefit}>
            <img src="./png/transparent.png" alt="Benefit" className={styles.benefitLogo8} />
            <div>
              <div className={styles.benefitTitle}>Global access</div>
              <ul>
                <li><div className={styles.benefitDesc}>International investment opportunity for retail investors </div></li>
                <li><div className={styles.benefitDesc}>Decentralized co-investments based across the world</div></li>
                <li><div className={styles.benefitDesc}>Custom portfolio management for institutional investors</div></li>
              </ul>
            </div>
            </div>
          </div> */}
          {/* <div className={styles.benefits}>
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
          </div> */}
          {/* <div className={styles.benefits}>
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
          </div> */}
          
          
          
          
          </div>
          
        
      </div>
      
      <div className={styles.randomAssets}>
        <div className={styles.randomAssetsColOne}>
          <img src="3.jpg" alt="Picture of the author" className={styles.coloneImg}/>
          <div className={styles.randomAssetsColOneData}>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" className={styles.coloneProfileImg}/>
            <div className={styles.placeDetail}>
              <p className={styles.placeDetailHeading}>Cannabis Farm</p>
              <p className={styles.placeDetailLoc}>Mumbai, India</p>
            </div>
            <div className={styles.priceDetail}>
              <p className={styles.priceDetailHeading}>Valuation</p>
              <p className={styles.priceDetailValue}>25000000EUR</p>
            </div>
          </div>
        </div>
        <div className={styles.randomAssetsColTwo}>
        <AssetCards name={"Tea Plantation"} percentage={"11"} loc={"Himachal, India"} image={"/5.jpg"} profileImg={'/p1.jpg'}/>
        <AssetCards name={"Vineyard"} percentage={"12.3"} loc={"1 of 8"} image={"/21.jpg"} profileImg={'/p2.jpg'}/>
        <AssetCards name={"Fiber Farms"} percentage={"2.5"} loc={"2 of 10"} image={"/22.jpg"} profileImg={'/p3.jpg'}/>
        </div>
        <div className={styles.randomAssetsColThree}>
          <p className={styles.colthreeheading}>Top Investments</p>
          <p className={styles.daysLeft} style={{color: '#3D00B7'}}>Last 7 days</p>
          <TopInvestCard no={"1"} name="Farm Estate" totInvest={"19739.39"} pnl={true} pnlVal={"25.53%"}
          image={"/1.jpeg"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"2"} name="Flower Plantation" totInvest={"2,769.39"} pnl={false} pnlVal={"10.52%"}
          image={"/7.jpg"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"3"} name="Palm Oil Plantation" totInvest={"9,232.39"} pnl={true} pnlVal={"2.52%"}
          image={"/18.jpg"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"4"} name="Herb plantation" totInvest={"3,769.39"} pnl={true} pnlVal={"1.52%"}
          image={"/19.jpg"} />
          <hr style={{color: 'white', width: '100%', height: '3px'}} />
          <TopInvestCard no={"5"} name="Cacao Plantation" totInvest={"10,769.39"} pnl={false} pnlVal={"2.52%"}
          image={"/17.jpg"} />
          {/* <Image src="/png/topinvest.png" width={400} height={550} /> */}
        </div>
      </div>
      <div className={styles.partnerOfferSection}>
        <img src="6.jpg" alt="Partner" width={600} height={600} style={{borderRadius: '5%'}} className={styles.partnerOfferImg}/>
        <div className={styles.partnerOfferContent}>
          <div className={styles.partnerOfferHeader}>How to Get Started with KriFin</div>
          <div className={styles.partnerOfferdescription} style={{ marginBottom: '30px' }}>Getting started with KriFin is easy. Simply create an account on our website and browse through the available investment opportunities. Once you find a project that you are interested in, you can invest in it directly using your preferred payment method.
KriFin is committed to making it easy and accessible for everyone to invest in land estates, agricultural plantations and farm projects. We believe that these asset classes have the potential to generate significant wealth for our investors, while also having a positive impact on the world.
</div>
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
