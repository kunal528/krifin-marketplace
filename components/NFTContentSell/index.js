import React, { useEffect, useState } from "react";
import styles from "../../styles/NFTContentSell.module.css";
import Image from "next/image";
import useWeb3 from "../../lib/useWeb3";
import { useRouter } from "next/router";
// import {GoogleMap, useLoadScript, Marker} from



const NFTContentSell = ({
  name,
  img,
  city,
  country,
  desp,
  valuation,
  perNFTValue,
  id,
  Type,
  pretaxYield,
  ae,
  seller,
  developedBy,
  tokenId
}) => {
  const router = useRouter();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handleOrderPlaced = (value) => {
    setOrderPlaced(value); //will be getting the value from useWeb3 hook
    alert("Order Placed Successfully!");
    router.reload();
  };
    const {sellOrder, setapproval} = useWeb3({ onOrderPlaced: handleOrderPlaced });
    const [sellPrice, setSellPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState("Total Amount");
    useEffect(() => {
        const newTotalPrice = sellPrice * quantity;
        setTotalPrice(newTotalPrice);
      }, [totalPrice, quantity]);
      const sellTokens = async (tokenId, totalPrice, quantity) => {
        try {
          console.log("setapproval called!");
          const doneApproval = await setapproval();
          if (doneApproval){
            console.log("approval done!")
          }
          await sellOrder(tokenId, totalPrice, quantity);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
  return (
    <div className={styles.mainContent}>
      <div className={styles.aboutAsset}>
        <div className={styles.aboutAssetImage}>
          <div className={styles.aboutAssetTitle}>
            <span>
              <p style={{ fontSize: "25px", fontWeight: "600" }}>
                {name ? name : "Taj Mahal"}
              </p>
            </span>
            <span>
              <p style={{ marginLeft: "15px" }}>
                {city ? city : "Agra, Uttar Pradesh"},{" "}
                {country ? country : "India"}
              </p>
            </span>
          </div>
          <Image
            src={
              img
                ? img
                : "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            height={350}
            width={420}
            style={{
              borderRadius: "20px",
              objectFit: "cover",
              border: "1.5px solid white",
            }}
          />
        </div>
        <div className={styles.sellNow}>
            <div className={styles.sellNowHeading}>
                Set Selling Details
            </div>
            <div className={styles.sellingDetailsFields}>
                <div className={styles.sellingPrice}>
                    <div className={styles.sellingPriceHeading}><Image src="/png/maticnobg.png" width={30} height={30}/>
                    <p style={{marginLeft: '5px'}}>MATIC</p>
                    
                    </div>
                    <hr className={styles.verticalLine} />
                    <input type="number" className={styles.sellingPriceInput} style={{background: 'transparent',padding: "3px", color: 'white', border:'0px', 
                    height: '40px', fontWeight: '500', fontSize: '15px', marginLeft: '10px', outline: 'none', width: '100%'}} placeholder="Enter Price" onChange={(e)=>setSellPrice(e.target.value)}/>
                </div>
                <div className={styles.sellingPrice}>
                    <div className={styles.sellingPriceHeading}><p style={{marginLeft: '3px'}}>Quantity</p>
                    
                    </div>
                    <hr className={styles.verticalLine} />
                    <input type="number" className={styles.sellingPriceInput} style={{background: 'transparent',padding: "3px", color: 'white', border:'0px', 
                    height: '40px', fontWeight: '500', fontSize: '15px', marginLeft: '10px', outline: 'none', width: '100%'}} placeholder="Enter Quantity you want to sell" onChange={(e)=>setQuantity(e.target.value)}/>
                </div>
                <div className={styles.sellingPrice}>
                    <div className={styles.sellingPriceHeading}><p style={{marginLeft: '5px'}}>Total</p>
                    
                    </div>
                    <hr className={styles.verticalLine} />
                    <input type="text" className={styles.sellingPriceInput} style={{
                    background: 'transparent',padding: "3px", color: 'white', border:'0px', 
                    height: '40px', fontWeight: '500', fontSize: '15px', marginLeft: '10px', 
                    outline: 'none', width: '100%'}} placeholder={totalPrice ? totalPrice : "Total Amount"}
                    readOnly/>
                </div>
            </div>
            <div className={styles.sellNowButton}>
                <div className={styles.fee}>Fee : 0.472%</div>
                <div className={styles.sellButton} onClick={()=>sellTokens(tokenId,totalPrice, quantity)}>Sell Now</div>
            </div>
        </div>
      </div>
      <div className={styles.aboutAssetDescription}>
        <div
          className={styles.investButton}
          style={{ textAlign: "right" }}
          onClick={() => {}}
        >
          
        </div>
        <div
          className={styles.aboutAssetDescriptionTitle}
          style={{ margin: "10px 0px", fontSize: "20px", fontWeight: "400" }}
        >
          Description
        </div>
        <div className={styles.aboutAssetDescriptionContent} style={{}}>
          Owners of sneaker NFTs don't actually have a pair of physical sneakers
          but possess digital avatars of the shoes in the virtual world. Sneaker
          NFTs are customisable, as per a report by CBS News, and customers can
          purchase different pieces and colours to create their personalised
          version...
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "450",
                  marginTop: "12px",
                }}
              >
                Asset Valuation
              </p>
              <p style={{ marginTop: "7px" }}>
                {valuation ? valuation : "450,000.00"} EUR
              </p>
            </div>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "450",
                  marginTop: "12px",
                }}
              >
                Proposed Price per Token
              </p>
              <p style={{ marginTop: "7px" }}>
                {perNFTValue ? perNFTValue : "980.00"} EUR
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "450",
                  marginTop: "12px",
                }}
              >
                Number of tokens to Sell
              </p>
              <p style={{ marginTop: "7px" }}>{id ? id : "2"}</p>
            </div>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "450",
                  marginTop: "12px",
                }}
              >
                Asset Type
              </p>
              <p style={{ marginTop: "7px" }}>{Type ? Type : "Premium"}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "450",
                  marginTop: "12px",
                }}
              >
                Pre Tax Yield
              </p>
              <p style={{ marginTop: "7px" }}>
                {pretaxYield ? pretaxYield : "..."}
              </p>
            </div>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "450",
                  marginTop: "12px",
                }}
              >
                Active Earning
              </p>
              <p style={{ marginTop: "7px" }}>{ae ? ae : "0"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTContentSell;
