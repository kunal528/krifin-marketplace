import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardOne from '../components/Cardone/CardOne'
import data from '../data/Data.json'

export default function Home() {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
      
      {data.map((data, i)=>(
        <CardOne onClick={()=>{
          
        }} key={i} image={data.image} name={data.name} rate={data.pretaxYield} city={data.City} country={data.Country} price={data.perNFTvalue} type={data.Type}/>
      ))}

      
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
      </div>
    </div>
  )
}
