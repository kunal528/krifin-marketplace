import React, { useEffect, useState } from "react";
import NFTCard from "../../components/cards/NFTCard";
import styles from "../../styles/Invest.module.css";

import useFirebase from "../../lib/useFirebase";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";

const Invest = () => {
  const [filters, setFilters] = useState([
    { name: "All Categories", selected: true, isVisible: true },
    { name: "Farms", isVisible: true },
    { name: "Farm Estates", isVisible: true },
    { name: "Coffee Estates", isVisible: true },
    { name: "Orchards", isVisible: true },
    { name: "Vineyards", isVisible: true },
    { name: "Fiber farms", },
    { name: "Forestry plantations" },
    { name: "Timber plantations" },
    { name: "Bamboo plantations" },
    { name: "Rubber plantations" },
    { name: "Palm oil plantations" },
    { name: "Sugar cane plantations" },
    { name: "Cotton plantations" },
    { name: "Tea plantations" },
    { name: "Cacao plantations" },
    { name: "Herb medicinal plantations" },
    { name: "Fruit plantations" },
    { name: "Flower plantations" },
    { name: "Cannabis farms" },
    { name: "Maple sugar farms" },
    { name: "Wildflower farms" },
    { name: "Agritourism farms" },
    { name: "Educational farms" },
    { name: "Ecotourism farms" },
    { name: "Research farms" },
    { name: "Rehabilitation farms" },
    { name: "Sustainable farms" },
    { name: "Organic farms" },
    { name: "Land" },
    { name: "Commercial REITs" },
    { name: "Residential REITs" },
    { name: "Office REITs" },
    { name: "Home rental" },
  ]);

  const { getNFTs, filterNFTs } = useFirebase();

  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);

  const onHandleSelect = (name) => {
    setFilters(prevFilters => {
      let updatedFilters = [...prevFilters];
      let filters = updatedFilters.filter(e => e.isVisible)

      updatedFilters.find(filters => filters.selected).selected = false

      updatedFilters.find(filter => filter.name == filters[filters.length - 1].name).isVisible = false;

      let clickedFilter = updatedFilters.find(filter => filter.name === name);

      if (clickedFilter) {
        clickedFilter.isVisible = true;
        clickedFilter.selected = true;
      }

      return updatedFilters;
    });
  }

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
            {filters.filter(e => e.isVisible).map((filter, index) => (
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
            <div className={styles.dropdown}>
              <div
                className={
                  styles.filter
                }
                onClick={() => {

                }}
              >
                Show More +
              </div>
              <select
                className={styles.showMoreButton}
                onChange={(e) => {
                  onHandleSelect(e.target.value)
                  getParticularNFT(e.target.value);
                }}
              >
                {filters.filter(e => !e.isVisible).map((option, index) => (
                  <option key={index} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.nfts}>
            {loading ? (
              <div className={styles.loading}>
                <div className={styles.loader} />
                <h3 style={{ marginLeft: '30px' }}>Loading</h3>
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
