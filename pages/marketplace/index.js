import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from '../../styles/Marketplace.module.css'
import Image from 'next/image'
import NFTOptionCard from '../../components/cards/NFTOptionCard'
import NFTContent from '../../components/NFTContent'

const Marketplace = () => {
    const [data, setData] = useState(null);
  useEffect(() => {
    //why async function ?
    //as everytime we make a request to the server, it takes some time to get the response and returns a promise
    //and promise needs to be resolved
    const fetchData = async () => {
      try {
        const response = await fetch('/api/retrieveData');
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  // const handleDocumentClick = async (documentId) => {
  //   try {
  //     const response = await fetch(`/api/retrieveData/${documentId}`);
  //     const responseData = await response.json();
  //     console.log("response data is:", responseData);
  //   } catch (error) {
  //     console.error('Failed to retrieve document:', error);
  //   }
  // };
  const handleDocumentClick = async (documentId) => {
    try {
      const response = await fetch(`/api/retrieveData/${documentId}`);
      const responseData = await response.json();
      console.log("response data is:", responseData);
    } catch (error) {
      console.error('Failed to retrieve document:', error);
    }
  };
  return (
    <div>
        <Navbar />
        <div className={styles.container}>
            <div className={styles.searchAssets}>
                <p className={styles.title}>Krifin Marketplace</p>
                
                <div className={styles.searchBox}>
    
                    <div className={styles.searchBackground}>
                        
                        <div className={styles.searchContainer}>
                        <button className={styles.searchButton}>
    <Image src='/png/search.png' height={20} width={20} />
  </button>
  <input type="search" className={styles.searchInput} placeholder="Search" />
  

</div>
<Image src='/png/filter.png' height={30} width={30} style={{margin: '5px 20px'}}/>
                    </div>
                </div>
                <hr style={{width: '100%', height: '2px', backgroundColor: 'white', border: 'none', margin: '4px 0px'}} />
                <div className={styles.allnfts}>
                    <div className={styles.allnftscard}>
                    {data && data.map((item, i) => (
                        
        <div key={item.id} onClick={() => handleDocumentClick(item.id)} style={{cursor: 'pointer'}}>
            {console.log(item)}
          <NFTOptionCard img={item.image} title={item.name} sellprice={item.perNFTvalue} pretaxYield={item.pretaxYield}/>
        </div>
      ))}
      {console.log("data is:", data)}
                        
                        
                        
                    </div>
                </div>
            </div>
            <div className={styles.displayAsset}>
                <NFTContent />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Marketplace