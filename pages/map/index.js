import React, { useState } from 'react'
import dynamic from "next/dynamic";
import Navbar from '../../components/Navbar/Navbar';
import styles from '../../styles/Map.module.css'
import Image from 'next/image';
import Layout from '../../components/Layout';

// import styles from '../../styles/Map.module.css'
const MapComponent = () => {
    const [filters, setFilters] = useState([
        { name: 'All Categories', selected: true },
        { name: 'Land', selected: false },
        { name: 'Commercial complex', selected: false },
        { name: 'Residential complex', selected: false },
        { name: 'Office rental', selected: false },
        { name: 'Home rental', selected: false },
        { name: 'Show more +', selected: false },
    ])
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search operation with the entered search term
    // ...
  };
    const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), {
        ssr: false
      });
    
  return (
    <div >
        {/* <Navbar /> */}
        <div className={styles.content}>
        <div className={styles.data}>
        <p style={{fontSize: '30px'}}>CADASTRAL MAPPING </p>
        </div>
        <p className={styles.mapContent}>
        a digital form of global land records that show all the boundaries of different parts of land pieces based on their length, area, and direction. With these maps, 
    you can view the ownership status of land pieces in different regions based on your requirements.
        </p>
        <div style={{ display: 'flex', flexDirection:'row', alignItems: 'center', margin: '0 auto'}} className={styles.searchdisp}>
      <div style={{ paddingRight: '10px' }}>
      </div>
      
      <input type="search" placeholder="Search for the best real estate investment across the  globe..... " className={styles.search} onClick={() => {
                
            }} />
        


    </div>
    <div className={styles.filters}>
                    {
                        filters.map((filter, index) => (
                            <div key={index} className={styles.filter + ' ' + (filter.selected && styles.active)}>{filter.name}</div>
                        ))
                    }
                </div>
      <div id="map">
        <div className={styles.mapFrame}>
        
        {/* <Image src="/png/map.png" width={1000} height={450} style={{opacity: '0.7', borderRadius: '20px'}}/> */}
        <MapWithNoSSR />
        </div>
        
        
      </div>
      </div>
    </div>
  )
}

export default MapComponent
MapComponent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
