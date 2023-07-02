import { useEffect, useState } from "react";
import getWeb3 from "./getWeb3";
import { AIRDROPABI, FNFTABI, MARKETPLACEABI, DISCOUNTABI, TRADINGABI } from "./contractABI";

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
    const tradingAddress = "0xb71457BF1B1C28Aee458891961e75F6492604bd5";


    useEffect(() => {
        const init = async () => {
            const web3 = await getWeb3();
            setWeb3(web3);
        };
        if (!web3)
            init();
        if (web3) {
            getAccount();
        }
    }
        , [web3]);

    const getAccount = async () => {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
    }

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

    const getDiscountContract = () => {
        const contract = getContract(DISCOUNTABI, discountAddress);
        setDiscountContract(contract);
        return contract;
    }


    const getContract = (abi, address) => {
        const contract = new web3.eth.Contract(abi, address);
        return contract;
    }

    const getTradingContract = () =>{
        const contract = getContract(TRADINGABI, tradingAddress);
        setTradingContract(contract);
        return contract;
    }


    const purchaseToken = async (tokenId,quantity, price) => {
        price = web3.utils.toWei((parseFloat(price) * quantity).toString(), 'ether');
        const contract = getMarketplaceContract();
        const result = await contract.methods.purchaseToken(tokenId, quantity).send({ from: account, value: price });
    }

    


    return { web3, purchaseToken, }
}