import React, { useEffect, useState } from "react";
import styles from "../../styles/Marketplace.module.css";
import Image from "next/image";
import NFTOptionCard from "../../components/cards/NFTTradeCard";
import NFTContentBuy from "../../components/NFTContentBuy";
import NFTContentSell from "../../components/NFTContentSell";
import Layout from '../../components/Layout';
import NFTtemplate from "../../components/cards/NFTtemplate";
import useWeb3 from "../../lib/useWeb3";
import useFirebase from "../../lib/useFirebase";
// import getWeb3 from "../../lib/getWeb3";

const Marketplace = () => {
    const [orders, setOrders] = useState(null);
    const [nft, setNFT] = useState(null);
    const [buyNFT, setBuyNFT] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [active, setActive] = useState("buy");
    const [userNFT, setUserNFT] = useState([]);

    const { getOrders, getNFTs: getBalance, web3, fnftContract, account, tradingContract } = useWeb3();
    const { getNFTs, getNFTsBatch } = useFirebase();

    useEffect(() => {
        if (web3 && fnftContract && account) {
            console.log('getting user nft')
            getNFTs().then((res) => {
                console.log(res);
                getBalance(res.map((nft) => nft.id)).then((nfts) => {
                    setUserNFT(nfts.map(e => {
                        return {
                            ...e,
                            ...res.find(nft => nft.id === e.id)
                        }
                    }))
                });
            });
        }
    }, [web3, fnftContract, account]);


    useEffect(() => {
        if (web3 && account && tradingContract) {
            console.log('getting orders')
            getOrders().then((res) => {
                const tokenIds = res.map((order) => order.tokenId.toString());
                // remove duplicates
                const uniqueTokenIds = [...new Set(tokenIds)];
                getNFTsBatch(uniqueTokenIds).then((nfts) => {
                    console.log()
                    const nftsWithOrders = nfts.map((nft) => {
                        const orders = res.filter((order) => order.tokenId === parseInt(nft.id));
                        return {
                            ...nft,
                            orders,
                        };
                    });
                    console.log(nftsWithOrders)
                    setOrders(nftsWithOrders);
                });
            });
        }
    }, [web3, account, tradingContract]);


    const handleDocumentClick = async (item) => {
        try {
            console.log("item is:", item);
            setBuyNFT(item);
            // console.log("item set is:", nft)
        } catch (error) {
            console.error("Failed to retrieve document:", error);
        }
    };
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.title}>Krifin Marketplace</div>
                <div className={styles.filters}>
                    <div className={styles.searchBox}>
                        <input
                            type="search"
                            className={styles.searchInput}
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <img src="/png/search.png" className={styles.searchButton} />
                    </div>
                    <img
                        src="/png/filter.png"
                        height={30}
                        width={30}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                        border: "none",
                        margin: "10px 0px",
                    }}
                />
                <div className={styles.options}>
                    <div className={styles.option} onClick={() => setActive("buy")}>BUY</div>
                    <div className={styles.option} onClick={() => setActive("sell")}>SELL</div>
                </div>
                <div className={styles.activeLine + " " + (active === "buy" ? styles.buy : styles.sell)} />
                <div className={styles.nfts}>
                    {active == "buy" ? orders &&
                        orders.map((item, i) => (
                            <NFTOptionCard
                                nft={item}
                                key={item.id}
                                onClick={() => setBuyNFT(item)}
                            />
                        )) :
                        userNFT &&
                        userNFT.map((item, i) => (
                            <NFTOptionCard
                                nft={item}
                                key={item.id}
                                onClick={() => setNFT(item)}
                            />
                        ))
                    }
                </div>
            </div>
            {active === "buy" ? (
                buyNFT && (
                    <NFTContentBuy
                        nft={buyNFT}
                    />
                )
            ) : (
                nft && <NFTContentSell
                    nft={nft}
                />
            )
            }
        </div>

    );
};

export default Marketplace;
Marketplace.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}
