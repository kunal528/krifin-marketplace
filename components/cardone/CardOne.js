"use client";
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Cardone.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CardOne = ({image, name, rate, city, country, price, type}) => {
  const [variable, setVariable] = useState(false);

  useEffect(() => {
    setVariable(prevVariable => {
      if (type === "") {
        return false;
      } else {
        return true;
      }
    });
  }, [type]);
  
  return (
    
    <div className={styles.cardoneContainer}>
        {variable && <span className={styles.ribbon}>
          <p style={{marginLeft: '3px'}}>{type}</p></span>}
          
        <div className={styles.image}>
        {/* {variable && <span className={styles.ribbonTwo}>
          <p style={{marginLeft: '5px', marginRight: '5px'}}>Commercial</p></span>} */}
          <Image src={image} alt="Picture of the author" width={250} height={250} style={{borderRadius: '20px'}}/>
          
          <div className={styles.overImg}>
            <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={30} height={30} style={{borderRadius: '100%', top: '-25px', marginLeft: '-130px',position: 'absolute', zIndex: '3', border: '0.7px solid black'}}/>
            <Image src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={30} height={30} style={{borderRadius: '100%', top: '-25px', marginLeft: '-110px',  position: 'absolute', zIndex: '4', border: '0.7px solid black'}}/>
            <Image src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={30} height={30} style={{borderRadius: '100%',  top: '-25px', marginLeft: '-90px', position: 'absolute',zIndex: '5', border: '0.7px solid black'}}/>
            <Image src="https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={30} height={30} style={{borderRadius: '100%',  top: '-25px', marginLeft: '-70px',position: 'absolute', zIndex: '6', border: '0.7px solid black'}}/>
          </div>
        </div>
        <div className={styles.content}>
          <p style={{color: 'white', fontSize: '25px'}} className='heading'>{name}</p>
          <div>
            <div className='place' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', margin: '10px 0px'}}>
                <p style={{color: '#00AC4F', fontSize: '15px'}}><FontAwesomeIcon icon="fa-duotone fa-diamond-half" rotation={90} />{rate}</p>
              <p style={{color: 'white', fontSize: '15px'}}>{city}, {country}</p>
              
            </div>
            <hr style={{color: 'white', fontSize:'3px'}}></hr>
            <div className='invest' style={{marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
              <button style={{cursor: 'pointer', padding: '10px', gap: '10.97px',textDecoration: 'none', padding: '3px', borderRadius: '20px', background: 'white', color: '#5539A8'}}><b>EUR  {price}</b></button>
              <p style={{color: 'white', fontSize: '15px'}}>Invest Now</p>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default CardOne