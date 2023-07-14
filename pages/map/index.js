import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import Navbar from '../../components/Navbar/Navbar';
import styles from '../../styles/Map.module.css'
import Image from 'next/image';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import useFirebase from '../../lib/useFirebase';

// import styles from '../../styles/Map.module.css'
const MapComponent = () => {
  const [allnftsdata, setAllnftsdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const {getNFTs, filterNFTs} = useFirebase();
  const fetchData = async () => {
    const allnfts = await getNFTs();
    setAllnftsdata(allnfts);
    setLoading(false);
  }
  useEffect(() => {
    
    fetchData();
  },[])
    const [filters, setFilters] = useState([
        { name: 'All Categories', selected: true },
        { name: 'Land', selected: false },
        { name: 'Commercial REITs', selected: false },
        { name: 'Residential REITs', selected: false },
        { name: 'Office REITs', selected: false },
        { name: 'Home rental', selected: false },
        { name: 'Show more +', selected: false },
    ])
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search operation with the entered search term
    // ...
  };
  useEffect(() => {
    console.log("frontend filtered:", allnftsdata);
  }, [allnftsdata]);

  const getAllNFT = async () => {
    setLoading(true);
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      selected: filter.name === "All Categories",
    }));

    setFilters(updatedFilters);
    fetchData();
    setLoading(false);
  };

  const getParticularNFT = async (value) => {
    setLoading(true);
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      selected: filter.name === value,
    }));

    setFilters(updatedFilters);

    let filteredNFT = await filterNFTs({ value });
    setAllnftsdata(filteredNFT);
    setLoading(false);
  };
    const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), {
        ssr: false
      });
    
  return (
    <div >
        <Navbar />
        <div className={styles.content}>
        <div className={styles.data}>
        <p style={{fontSize: '30px'}}>CADASTRAL MAPPING </p>
        </div>
        <p className={styles.mapContent}>
        A digital form of global land records that show all the boundaries of different parts of land pieces based on their length, area, and direction. With these maps, 
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
                            <div key={index} className={styles.filter + ' ' + (filter.selected && styles.active)}
                            onClick={() => {
                              if (filter.name === "All Categories") {
                                getAllNFT();
                              } else {
                                getParticularNFT(filter.name);
                              }
                            }}>{filter.name}</div>
                        ))
                    }
                </div>
      <div id="map">
        <div className={styles.mapFrame}>
        
        {loading ? <div className={styles.loading}>
              <div className={styles.loader} />
              <h3 style={{marginLeft: '30px'}}>Loading</h3>
    </div> :
        <MapWithNoSSR allnftsdata={allnftsdata}/>}
        </div>
        
        
      </div>
      </div>
      <div className={styles.footerClass}>
        <Footer />
      </div>
    </div>
  )
}

export default MapComponent
// MapComponent.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>
// }
