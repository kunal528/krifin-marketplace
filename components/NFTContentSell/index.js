/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/NFTContentSell.module.css";
import useWeb3 from "../../lib/useWeb3";
import { toast } from 'react-toastify';

const NFTContentSell = ({ nft }) => {
  const [sellPrice, setSellPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState("Total Amount");

  const { approval, listOrder } = useWeb3();
  useEffect(() => {
    const newTotalPrice = sellPrice * quantity;
    setTotalPrice(newTotalPrice);
  }, [sellPrice, quantity]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  await toast.promise(approval(), {
    pending: "Waiting for Approval",
    success: "Approved",
    error: "Error Approving",
  });
  await toast.promise(listOrder(nft.id, quantity, sellPrice), {
    pending: "Waiting for Approval",
    success: "Approved",
    error: "Error Approving",
  });
}


return (
  <div className={styles.container}>
    <div className={styles.row}>
      <div>
        <div className={styles.title}>
          {nft.name}
          <span className={styles.place}>
            {nft.city},{" "}
            {nft.country}
          </span>
        </div>
        <img
          src={nft.image}
          alt="NFT Image"
          className={styles.image}
        />
      </div>
      <div>
        <div className={styles.sellNowHeading}>
          Set Selling Details
        </div>
        <div className={styles.inputBox}>
          <div className={styles.inputLabel}>Price</div>
          <hr className={styles.verticalLine} />
          <input type="number" className={styles.input} placeholder="Enter Price" onChange={(e) => setSellPrice(e.target.value)} />
        </div>
        <div className={styles.inputBox}>
          <div className={styles.inputLabel}>Quantity</div>
          <hr className={styles.verticalLine} />
          <input type="number" className={styles.input} max={nft.quantity} min={1} placeholder="Enter Quantity you want to sell" onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className={styles.inputBox}>
          <div className={styles.inputLabel}>Total</div>
          <hr className={styles.verticalLine} />
          <input type="text" className={styles.input} placeholder={totalPrice ? totalPrice : "Total Amount"} readOnly />
        </div>
        <div className={styles.sellNowButton}>
          <div className={styles.fee}>Fee : 0.472%</div>
          <div className={styles.sellButton} onClick={handleSubmit}>Sell Now</div>
        </div>
      </div>
    </div>
    <div className={styles.details}>
      <div className={styles.header}>
        Description
      </div>
      <div className={styles.content} style={{ marginBottom: '30px' }}>
        {nft.description}
      </div>
      <div
        className={styles.stats}
      >
        <div className={styles.stat}>
          <div className={styles.header}>Asset Valuation</div>
          <div className={styles.content}>{nft.totalAssetValue} EUR</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.header}>Asset Type</div>
          <div className={styles.content}>{nft.assetType}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.header}>Pre Tax Yield</div>
          <div className={styles.content}>{nft.apy ?? '5%'}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.header}>Active Earning</div>
          <div className={styles.content}>{nft.activeEarning ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  </div >
);
};

export default NFTContentSell;
