const Web3 = require('web3');

export const isMetamaskInstalled = () => {
  return !!window.ethereum || !!window.web3;
}

export const initializeWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (error) {
      throw error;
    }
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
}

export const getAccounts = async () => window.web3.eth.getAccounts();

export const getBalance = async address => window.web3.eth.getBalance(address);

export const isUserLoggedIn = () => new Promise((resolve, reject) => {
  window.web3.eth.getAccounts((err, accounts) => {
    if (err != null) {
       console.log(err)
       reject(err);
    }
    resolve(accounts.length !== 0)
 });
});

export const getEstimateGas = async txn => window.web3.eth.estimateGas(txn);

export const getGasPrice = async () => window.web3.eth.getGasPrice();


