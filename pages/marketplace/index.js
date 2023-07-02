import React, { useEffect, useState } from "react";
import styles from "../../styles/Marketplace.module.css";
import Image from "next/image";
import NFTOptionCard from "../../components/cards/NFTOptionCard";
import NFTContentBuy from "../../components/NFTContentBuy";
import NFTContentSell from "../../components/NFTContentSell";
import Layout from '../../components/Layout';
import NFTtemplate from "../../components/cards/NFTtemplate";
import useWeb3 from "../../lib/useWeb3";
// import getWeb3 from "../../lib/getWeb3";

const Marketplace = () => {
  const [data, setData] = useState(null);
  const [object, setObject] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState("buy");
  const [loading, setLoading] = useState(true);
  const [isWeb3, setisWeb3] = useState(false);

  const { allOrders } = useWeb3();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/retrieveData");
        const responseData = await response.json();
        setData(responseData);
        const orders = await allOrders();
        console.log("orders are:", orders);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);


  const sellData = async (email) => {
    try {
      const response = await fetch("/api/retrieveData/");
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

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
          <div className={styles.options}>
            <div className={styles.option} onClick={()=>setActive("buy")}>BUY</div>
            <div className={styles.option} onClick={()=>setActive("sell")}>SELL</div>
          </div>
          <hr className={active === "buy" ? styles.activeLineBuy : styles.activeLineSell} />
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
    active === "buy" ? (
      <NFTContentBuy
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
      <NFTContentSell 
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
        seller={object.seller}/>
    )
  ) : (
    <NFTtemplate />
  )}
</div>

      </div>
    </div>
  );
};

export default Marketplace;
Marketplace.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  )
}
