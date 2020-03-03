const Web3 = require('web3');

export const CHROME_INSTALLATION = "https://www.google.com/chrome/browser/desktop/"
export const METAMASK_CHROME_EXTENSTION = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"

export const isMetamaskInstalled = () => {
  return !!window.ethereum || !!window.web3;
}

export const initializeWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed

    } catch (error) {
      throw new Error("User Denied Access")
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    // Acccounts always exposed
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
}

export const getAccounts = async () => window.web3.eth.getAccounts();

export const getBalance = async address => {
  const result = await window.web3.eth.getBalance(address)
  return Number(window.web3.utils.fromWei(result, 'ether'))
};