import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardOne from '../components/Cardone/CardOne'
import data from '../data/Data.json'

export default function Home() {
  return (
    <div style={{textAlign: 'center', marginTop: '30px', color: 'white'}}>
      <h1>Dicover More Assets</h1>
    <div className={styles.container}>
      
      {data.map((data, i)=>(
        <CardOne key={i} image={data.image} name={data.name} rate={data.pretaxYield} city={data.City} country={data.Country} price={data.perNFTvalue}/>
      ))}
      
    </div>
    </div>
  )
}
