import React, { useEffect } from 'react'
import styles from '../../styles/NFTContent.module.css'
import Image from 'next/image'
import SellerCards from '../cards/SellerCards'
// import {GoogleMap, useLoadScript, Marker} from 

const NFTContent = ({name, img, city, country, desp, valuation, perNFTValue, id, Type, pretaxYield, ae, seller, developedBy, }) => {
  
  return (
    <div className={styles.mainContent}>
        <div className={styles.aboutAsset}>
            <div className={styles.aboutAssetImage}>
                <div className={styles.aboutAssetTitle}>
                  <span><p style={{fontSize: '25px', fontWeight: '600'}}>{name ? name : 'Taj Mahal'}</p></span>
                  <span><p style={{marginLeft:'15px'}}>{city ? city : 'Agra, Uttar Pradesh'}, {country ? country : 'India'}</p></span>
                </div>
                <Image src={img ? img : "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} height={350} width={420} style={{borderRadius: '20px', objectFit: 'cover', border: '1.5px solid white'}}/>
            </div>
            <div className={styles.aboutAssetDescription}>
              <div className={styles.investButton} style={{textAlign: 'right'}} onClick={()=>{}}><span style={{background: '#292929', padding: '10px'}}>INVEST NOW</span></div>
              <div className={styles.aboutAssetDescriptionTitle} style={{margin: '10px 0px', fontSize: '20px', fontWeight: '400'}}>Description</div>
              <div className={styles.aboutAssetDescriptionContent} style={{}}>
              Owners of sneaker NFTs don't actually have a pair of physical sneakers but possess digital 
              avatars of the shoes in the virtual world. Sneaker NFTs are customisable, as per a report 
              by CBS News, and customers can purchase different pieces and colours to create their personalised 
              version... 
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{ flex: '1', marginBottom: '20px' }}>
        <p style={{fontSize: '20px', fontWeight: '450', marginTop: '12px'}}>Asset Valuation</p>
        <p style={{marginTop: '7px'}}>{valuation ? valuation : '450,000.00'} EUR</p>
      </div>
      <div style={{ flex: '1', marginBottom: '20px' }}>
        <p style={{fontSize: '20px', fontWeight: '450', marginTop: '12px'}}>Proposed Price per Token</p>
        <p style={{marginTop: '7px'}}>{perNFTValue ? perNFTValue : '980.00'} EUR</p>
      </div>
                </div>
      
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{ flex: '1', marginBottom: '20px' }}>
        <p style={{fontSize: '20px', fontWeight: '450', marginTop: '12px'}}>Number of tokens to Sell</p>
        <p style={{marginTop: '7px'}}>{id ? id : '2'}</p>
      </div>
      <div style={{ flex: '1', marginBottom: '20px' }}>
        <p style={{fontSize: '20px', fontWeight: '450', marginTop: '12px'}}>Asset Type</p>
        <p style={{marginTop: '7px'}}>{Type ? Type : 'Premium'}</p>
      </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{ flex: '1', marginBottom: '20px' }}>
        <p style={{fontSize: '20px', fontWeight: '450', marginTop: '12px'}}>Pre Tax Yield</p>
        <p style={{marginTop: '7px'}}>{pretaxYield ? pretaxYield : '...'}</p>
      </div>
      <div style={{ flex: '1', marginBottom: '20px' }}>
        <p style={{fontSize: '20px', fontWeight: '450', marginTop: '12px'}}>Active Earning</p>
        <p style={{marginTop: '7px'}}>{ae ? ae : '0'}</p>
      </div>
                </div>
    </div>
            </div>
        </div>
        <div className={styles.sellerInfoCards}>
          <SellerCards title="Developed By" info={developedBy ? developedBy : "Shah Jahn"}/>
          <SellerCards title="Seller" info={seller ? seller : "Frank Von De"}/>
          <SellerCards title="Active for selling since" info="12 May 2023, 14:25 GMT"/>
        </div>
        <div className={styles.map}>
          <div className={styles.mapHeader} style={{fontSize: '1.5rem', marginTop: '20px'}}>Location</div>
          <div className={styles.mapImage} style={{marginTop: '10px', objectFit: 'cover'}}>
            <Image src="/png/map.png" height={330} width={1100} style={{objectFit: 'cover'}}/>
          </div>
        </div>
    </div>
  )
}

export default NFTContent