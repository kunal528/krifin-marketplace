import React, { useEffect, useState } from "react";
import NFTCard from "../../components/cards/NFTCard";
import styles from "../../styles/Invest.module.css";
import Layout from "../../components/Layout";
import useWeb3 from "../../lib/useWeb3";
import useFirebase from "../../lib/useFirebase";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";

const Invest = () => {
  const [filters, setFilters] = useState([
    { name: "All Categories", selected: true },
    { name: "Land", selected: false },
    { name: "Commercial REITs", selected: false },
    { name: "Residential REITs", selected: false },
    { name: "Office rental", selected: false },
    { name: "Home rental", selected: false },
    { name: "Show more +", selected: false },
  ]);

  const { getNFTs, filterNFTs } = useFirebase();

  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getNFTs();
      setNFTs(res);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAllNFT = async () => {
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      selected: filter.name === "All Categories",
    }));

    setFilters(updatedFilters);
    fetchData();
  };

  const getParticularNFT = async (value) => {
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      selected: filter.name === value,
    }));

    setFilters(updatedFilters);

    let filteredNFT = await filterNFTs({ value });
    setNFTs(filteredNFT);
  };

  useEffect(() => {
    console.log("frontend filtered:", nfts);
  }, [nfts]);

  return (
    <div>
      <Navbar />
      <div className={styles.searchClass}>
        <Search />
      </div>
      <div className={styles.container}>
        <div className={styles.discoverSection}>
          <div className={styles.filters}>
            {filters.map((filter, index) => (
              <div
                key={index}
                className={
                  styles.filter + " " + (filter.selected && styles.active)
                }
                onClick={() => {
                  if (filter.name === "All Categories") {
                    getAllNFT();
                  } else {
                    getParticularNFT(filter.name);
                  }
                }}
              >
                {filter.name}
              </div>
            ))}
          </div>
          <div className={styles.nfts}>
            {loading ? (
              <div className={styles.loading}>
              <div className={styles.loader} />
              <h3 style={{marginLeft: '30px'}}>Loading</h3>
            </div>
            ) : nfts.length ? (
              nfts.map((nft, index) => (
                <NFTCard key={index} nft={nft} />
              ))
            ) : (
              <h1 style={{ color: "white" }}>No NFTs to show</h1>
            )}
          </div>
        </div>
      </div>
      <div className={styles.footerClass}>
        <Footer />
      </div>
    </div>
  );
};

export default Invest;
