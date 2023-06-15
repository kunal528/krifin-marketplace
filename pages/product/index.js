import React from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const product = () => {
  return (
    <div style={{display: "flex", height: '100%', width: '100%'}}>
        <div className={styles.description}>
            <h3 style={{fontSize: '25px', marginLeft: '190px', letterSpacing: '5px', color: 'white', marginBottom: '20px'}}>Sundar Luxury Villa</h3>
            <Image src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" 
            width={400} height={450} 
            style={{borderRadius: '20px', border: '2px solid white', marginLeft: '190px'}}/>
            <div className={styles.descriptionData}>
                <p style={{fontSize: '15px', marginBottom: '5px'}}>SUNDAR LUXURY VILLA</p>
                <p style={{fontSize: '12px'}}>Owners of villa NFTs don't actually have a pair of physical villa
but possess digital avatars of the villa . Mention details about the property. </p>
            </div>
            <div className={styles.endDetails}>
                <p style={{marginBottom: '20px'}}>Developer</p>
                <p>Management</p>
            </div>
        </div>
        
            <div className={styles.card}>
                <div className={styles.topHeading}>SUNDAR LUXURY VILLA</div>
                <p>Owners of villa NFTs don't actually have a pair of physical villa
but possess digital avatars of the villa </p>

                <div className={styles.cardContent}>
                    <div className={styles.cardContentData}>
                        <div className={styles.heading}><b>City, Country</b></div>
                        <p><b>Vienna, Austria</b></p>
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading}><b>Asset Type</b></div>
                        <p><b>Utility Token</b></p>
                    
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading} ><b>City, Country</b></div>
                        <p style={{border: '1px solid #323232', padding: '10px', borderRadius: '10px', background: '#323232', marginTop: '10px'}}>
                            <b style={{color: '#ffffff', color: 'grey'}}>EUR 2,654,000.0</b>
                        </p>
                    
                    </div>
                </div>
                <hr style={{color: 'white', fontSize:'3px'}}></hr>
                <div className={styles.cardContent}>
                    <div className={styles.cardContentData}>
                        <div className={styles.heading}>Average Pre-Tax Yield</div>
                        <p></p>
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading} >Investment value</div>
                        <p></p>
                    
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading} >Active <br />Earnings (AE)</div>
                        <p></p>
                    
                    </div>
                </div>
                <hr style={{color: 'white', fontSize:'3px'}}></hr>
                <div className={styles.cardContent}>
                    <div className={styles.cardContentData}>
                        <div className={styles.heading}>AE Repayment <br />Period</div>
                        <p><b>Vienna, Austria</b></p>
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading}>AE Stability period</div>
                        <p></p>
                    
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading} >AE Type</div>
                        <p><b>House Rental</b></p>
                    
                    </div>
                </div>
                <hr style={{color: 'white', fontSize:'3px'}}></hr>
                <div className={styles.cardContent}>
                    <div className={styles.cardContentData}>
                        <div className={styles.heading}>Address : </div>
                        {/* <p><b>Vienna, Austria</b></p> */}
                    </div>
                    {/* <div className={styles.cardContentData}>
                    
                        <div className={styles.heading}><b>Asset Type</b></div>
                        <p><b>Utility Token</b></p>
                    
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading} ><b>City, Country</b></div>
                        <p style={{border: '1px solid #323232', padding: '10px', borderRadius: '10px', background: '#323232', marginTop: '-10px'}}>
                            <b style={{color: '#ffffff', color: 'grey'}}>EUR 2,654,000.0</b>
                        </p>
                    
                    </div> */}
                </div>
                <hr style={{color: 'white', fontSize:'3px'}}></hr>
                <div className={styles.cardContent}>
                    <div className={styles.cardContentData}>
                        <div className={styles.heading}>Number of Tokens</div>
                        {/* <p><b>Vienna, Austria</b></p> */}
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading}>Majority Stakeholder</div>
                        <p></p>
                    
                    </div>
                    <div className={styles.cardContentData}>
                    
                        <div className={styles.heading} >Carpet Area</div>
                        {/* <p><b>House Rental</b></p> */}
                    
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <button className={styles.buttonFav}>Add now<FontAwesomeIcon icon={faHeart} style={{color: "#faf9f9", marginLeft :'10px', height: '15px'}} /></button>
                    <button className={styles.buttonBuy}><b>BUY NOW</b></button>
                </div>
            </div>
        
    </div>
  )
}

export default product