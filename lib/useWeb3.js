import { useEffect, useState } from "react";
import getWeb3 from "./getWeb3";
import {
  AIRDROPABI,
  FNFTABI,
  MARKETPLACEABI,
  DISCOUNTABI,
  TRADINGABI,
} from "./contractABI";

export default function useWeb3() {
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
    const tradingAddress = "0x84D816136DEfD99f8dcD2C9B53F1fbA6bBE26515";


    useEffect(() => {
        const init = async () => {
            const web3 = await getWeb3();
            setWeb3(web3);
        };

        if (!web3) {
            init();
        }
        if (web3) {
            console.log('web3')
            getAccount(web3);
            getTradingContract();
            getMarketplaceContract();
            getDiscountContract();
            getFnftContract();
        }
    }, [web3]);

    const getAccount = async () => {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
    };

    const getFnftContract = () => {
        const contract = getContract(FNFTABI, fnftAddress);
        setFnftContract(contract);
        return contract;
    }

    const getMarketplaceContract = () => {
        const contract = getContract(MARKETPLACEABI, marketplaceAddress);
        setMarketplaceContract(contract);
        return contract;
    }
    const purchaseToken = async (tokenId, quantity, price) => {
      price = web3.utils.toWei((parseFloat(price) * quantity).toString(), 'ether');
      const result = await marketplaceContract.methods.purchaseToken(tokenId, quantity).send({ from: account, value: price });
  }
    const getDiscountContract = () => {
        const contract = getContract(DISCOUNTABI, discountAddress);
        setDiscountContract(contract);
        return contract;
    }

    const getTradingContract = async () => {
        const contract = getContract(TRADINGABI, tradingAddress);
        setTradingContract(contract);
        return contract;
    };

    const getContract = (abi, address) => {
        if (web3) {
            const contract = new web3.eth.Contract(abi, address);
            return contract;
        }
        return null;
    };

    

    const getNFTs = async (tokenIds) => {
        const result = await fnftContract.methods.balanceOfBatch(tokenIds.map(e => account), tokenIds).call();
        const nfts = tokenIds.map((e, i) => {
            let quantity = result[i];
            return { id: e, quantity: parseInt(quantity) };
        }).filter(e => e.quantity > 0);
        console.log(nfts)
        return nfts;
    }

    const approval = async () => {
        const isApproved = await fnftContract.methods.isApprovedForAll(account, tradingAddress).call();
        if (isApproved) {
            return;
        }
        const result = await fnftContract.methods.setApprovalForAll(tradingAddress, true).send({ from: account });
        console.log("approval result is:", result);
    }

    const listOrder = async (tokenId, quantity, price) => {
        console.log("list order is:", tokenId, quantity, price)
        price = web3.utils.toWei((parseFloat(price)).toString(), 'ether');
        const owner = await marketplaceContract.methods.nftListings(tokenId).call();
        console.log(owner);
        const result = await tradingContract.methods.sell(owner.seller, tokenId, price, quantity).send({ from: account });
        console.log("list order result is:", result);
    }

    const trade = async (tokenId, quantity, price, seller) => {
        price = web3.utils.toWei((parseFloat(price) * parseInt(quantity)).toString(), 'ether');
        const result = await tradingContract.methods.purchase(tokenId, quantity, seller).send({ from: account, value: price });
    }

    const getOrders = async () => {
        const result = await tradingContract.methods.getAllOrders().call();
        return result.filter(e => e.seller !== "0x0000000000000000000000000000000000000000").map(e => {
            return { seller: e.seller, tokenId: parseInt(e.tokenId), price: web3.utils.fromWei(e.price, 'ether'), quantity: parseInt(e.quantity) };
        })
    };




    return { web3, marketplaceContract, fnftContract, discountContract, tradingContract, account, purchaseToken, getOrders, getNFTs, approval, listOrder, trade }

  }