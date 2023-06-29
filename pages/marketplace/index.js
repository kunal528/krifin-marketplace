import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/Marketplace.module.css";
import Image from "next/image";
import NFTOptionCard from "../../components/cards/NFTOptionCard";
import NFTContent from "../../components/NFTContent";

const Marketplace = () => {
  const [data, setData] = useState(null);
  const [object, setObject] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    //why async function ?
    //as everytime we make a request to the server, it takes some time to get the response and returns a promise
    //and promise needs to be resolved
    const fetchData = async () => {
      try {
        const response = await fetch("/api/retrieveData");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDocumentClick = async (item) => {
    try {
      console.log("item is:", item);
      setObject(item);
      // console.log("item set is:", object)
    } catch (error) {
      console.error("Failed to retrieve document:", error);
    }
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredData =
    data && data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  useEffect(() => {
    console.log("object:", object);
  }, [object]);
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
                  <Image src="/png/search.png" height={20} width={20} />
                </button>
                <input
                  type="search"
                  className={styles.searchInput}
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <Image
                src="/png/filter.png"
                height={30}
                width={30}
                style={{ margin: "5px 20px" }}
              />
            </div>
          </div>
          <hr
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "white",
              border: "none",
              margin: "4px 0px",
            }}
          />
          <div className={styles.allnfts}>
            <div className={styles.allnftscard}>
              {filteredData &&
                filteredData.map((item, i) => (
                  <div
                    key={item.id}
                    onClick={() => handleDocumentClick(item)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* {console.log(item)} */}
                    <NFTOptionCard
                      img={item.image}
                      title={item.name}
                      sellprice={item.perNFTvalue}
                      pretaxYield={item.pretaxYield}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.displayAsset}>
          {object ? (
            <NFTContent
              name={object.name}
              img={object.image}
              city={object.City}
              country={object.Country}
              valuation={object.assetValution}
              perNFTValue={object.perNFTvalue}
              id={object.id}
              Type={object.Type}
              pretaxYield={object.pretaxYield}
              ae={object.AE}
              developedBy={object.Developer}
              seller={object.seller}
            />
          ) : (
            <NFTContent />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
