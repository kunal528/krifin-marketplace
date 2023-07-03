import { useEffect, useState } from "react";
import getWeb3 from "./getWeb3";
import {
  AIRDROPABI,
  FNFTABI,
  MARKETPLACEABI,
  DISCOUNTABI,
  TRADINGABI,
} from "./contractABI";

export default function useWeb3(onOrderPlaced) {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [airdropContract, setAirdropContract] = useState(null);
  const [fnftContract, setFnftContract] = useState(null);
  const [marketplaceContract, setMarketplaceContract] = useState(null);
  const [discountContract, setDiscountContract] = useState(null);
  const [tradingContract, setTradingContract] = useState(null);
  const airdropAddress = "0x4166D860F77bF73C436B01b1550EDdef4Fb6495c";
  const fnftAddress = "0x4043e6ECc97cE9857a837C5B2F99573d8e83bf54";
  const marketplaceAddress = "0x3A7061Ba3c346986819E74a36E8178b324E9055e";
  const discountAddress = "0xd8ea158eBd0aC6B98bEF5a62F59bBAFC559C6e08";
  const tradingAddress = "0xb71457BF1B1C28Aee458891961e75F6492604bd5";

  useEffect(() => {
    const init = async () => {
      const web3Instance = await getWeb3();
      setWeb3(web3Instance);
      await getAccount(web3Instance);
      getTradingContract();
    };
    

    if (!web3) {
      init();
    }
  }, [web3]);

  useEffect(() => {
    if (tradingContract) {
        listenToOrderPlacedEvent(); // Start listening to OrderPlaced event
        listenToOrderBuyEvent(); // Start listening to OrderBuy event
    }
  }, [tradingContract]);

  const getAccount = async (web3Instance) => {
    if (web3Instance) {
      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);
    }
  };

  const getFnftContract = () => {
    const contract = getContract(FNFTABI, fnftAddress);
    setFnftContract(contract);
    return contract;
  };

  const getMarketplaceContract = () => {
    const contract = getContract(MARKETPLACEABI, marketplaceAddress);
    setMarketplaceContract(contract);
    return contract;
  };

  const getDiscountContract = () => {
    const contract = getContract(DISCOUNTABI, discountAddress);
    setDiscountContract(contract);
    return contract;
  };

  const getContract = (abi, address) => {
    if (web3) {
      console.log("web3 inside the useWeb3 is:", web3);
      const contract = new web3.eth.Contract(abi, address);
      return contract;
    }
    return null;
  };

  const getTradingContract = async () => {
    if (web3) {
      const contract = getContract(TRADINGABI, tradingAddress);
      console.log("getTradingcontract set");
      setTradingContract(contract);
    }
  };

  const purchaseToken = async (tokenId, quantity, price) => {
    price = web3.utils.toWei(
      (parseFloat(price) * quantity).toString(),
      "ether"
    );
    const contract = getMarketplaceContract();
    const result = await contract.methods
      .purchaseToken(tokenId, quantity)
      .send({ from: account, value: price });
  };

  const allOrders = async () => {
    await getTradingContract(); // Call getTradingContract here
    if (tradingContract) {
      console.log("contract is:", tradingContract);
      const result = await tradingContract.methods.getAllOrders().call();
      console.log("all orders are:", result);
      return result;
    }
    return null;
  };

  const listenToOrderPlacedEvent = async () => {
    await getTradingContract();
    if (tradingContract) {
        contract.events.OrderPlaced()
        .on('data', () => {
          console.log('OrderPlaced event received'); 
          if (onOrderPlaced) {
            onOrderPlaced(true); // Call the callback function with the desired value and 
            //return to NFTContentSell.js and will trigger an alert
          }
        })
        .on('error', (error) => {
          console.error('Error listening to OrderPlaced event:', error);
        });
        
    }
  };
  

  
  const getUserNFTs = async () => {
    await getFnftContract(); // Call getFnftContract here as it stores information about who owns
    // how much nft and what nft
    if (fnftContract) {
      const balanceBatchPromises = Array.from({ length: 100 }, (_, i) =>
        fnftContract.methods.balanceOfBatch([account], [i]).call()
      );
      const balanceBatchResults = await Promise.all(balanceBatchPromises);

      // Fetch information about each token
      const nftPromises = balanceBatchResults.map(async (balances, index) => {
        const tokenId = index;
        const quantity = balances[0];
        const uri = await fnftContract.methods.uri(tokenId).call();
        const totalSupply = await fnftContract.methods
          .totalSupply(tokenId)
          .call();
        return { tokenId, uri, totalSupply, quantity };
      });

      const userNFTs = await Promise.all(nftPromises);
      return userNFTs;
    }
    return null;
  };

  //for selling the NFT, we need to approve the trading contract to sell the NFT on behalf of the user
  const setapproval = async () => {
    await getFnftContract();
    if (fnftContract) {
      await fnftContract.methods
        .setApprovalForAll(tradingAddress, true)
        .send({ from: account });
    return true;
    }
  };

  //once the setapproval is done, we can call the sellOrder function from frontend
  const sellOrder = async (tokenId, price, quantity) => {
    await getTradingContract(); // Call getTradingContract here
    if (tradingContract) {
      await tradingContract.methods
        .sell(account, tokenId, price, quantity)
        .send({ from: account });
    }
  };

  //will be continuously listening to the this buy event order
  const listenToOrderBuyEvent = async () => {
    await getTradingContract();
    if (tradingContract) {
      contract.events.OrderPurchased()
        .on('data', () => {
          console.log('OrderPlaced event received'); 
          if (onOrderPlaced) {
            onOrderPlaced(true); // Call the callback function with the desired value and 
            //return to NFTContentSell.js and will trigger an alert
          }
        })
        .on('error', (error) => {
          console.error('Error listening to OrderPlaced event:', error);
        });
    }
  };

  const buyOrder = async (tokenId, quantity, seller) => {
    await getTradingContract(); // Call getTradingContract here
    if (tradingContract) {
      await tradingContract.methods
        .buy(tokenId, quantity, seller)
        .send({ from: account});
    }
  }

  return {
    account,
    web3,
    purchaseToken,
    allOrders,
    sellOrder,
    getUserNFTs,
    setapproval,
    buyOrder
  };
}
