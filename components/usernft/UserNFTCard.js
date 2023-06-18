"use client"
import React, { useEffect, useState } from 'react'
import styles from '../../styles/UserNFTCard.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const UserNFTCard = ({assets}) => {
  console.log("asset 2 are :", assets)

  const [variable, setVariable] = useState(false);

  useEffect(() => {
    setVariable(prevVariable => {
      if (assets.type === "Premium") {
        return true;
      } else {
        return false;
      }
    });
  }, [assets.type]);
  return (
    <div className={styles.userNFTcardContainer}>
     
        
        <div className={styles.image}>
        {variable && <span className={styles.ribbonTwo}>
          <p style={{marginLeft: '10px', marginBottom: '-10px', paddingTop: '5.5px'}}>{assets.type}</p></span>}
          {variable ? <Image src={assets.img} alt="Picture of the author" width={250} height={200} style={{borderRadius: '20px'}}/> : 
          <Image src={assets.img} alt="Picture of the author" width={250} height={200} style={{borderRadius: '20px', marginTop: '35px'}}/>}
          
          
        </div>
        
        <div className={styles.content}>
          <p style={{color: 'white', fontSize: '20px'}} className='heading'>{assets.name}</p>
          <div>
            <div className='place' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', margin: '10px 0px'}}>
            <button style={{cursor: 'pointer', padding: '10px', gap: '10.97px',textDecoration: 'none', padding: '3px', borderRadius: '20px', background: 'white', color: '#5539A8'}}><b>{assets.priceperNFT} </b></button>
                <p style={{color: '#00AC4F', fontSize: '15px'}}>{assets.numberofTokens} tokens</p>
              
            </div>
            <hr style={{color: 'white', fontSize:'3px'}}></hr>
            <div className='invest' style={{marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '5px'}}>
              <button style={{cursor: 'pointer', padding: '10px', gap: '10.97px',textDecoration: 'none', padding: '3px', borderRadius: '20px', background: 'white', color: '#5539A8'}}><b>EUR  {assets.priceperNFT} </b></button>
              <p style={{color: 'white', fontSize: '15px'}}>Invest Now</p>
            </div>
          </div>
        </div>
        
      
        
    </div>
    
   
  )
}

export default UserNFTCard