const Web3 = require('web3');

export const isMetamaskInstalled = () => {
  return !!window.ethereum || !!window.web3;
}

export const initializeWeb3 = async () => {
  if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          console.log('-----Initialising-----');
          await window.ethereum.enable();
          console.log('-----Done-----');
          // Acccounts now exposed

        } catch (error) {
          // User denied account access...
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

export const getBalance = async address => window.web3.eth.getBalance(address);

// window.addEventListener('load', async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     window.web3 = new Web3(ethereum);
//     try {
//       // Request account access if needed
//       await ethereum.enable();
//       // Acccounts now exposed
//     } catch (error) {
//       // User denied account access...
//     }
//   }
//   // Legacy dapp browsers...
//   else if (window.web3) {
//     window.web3 = new Web3(web3.currentProvider);
//     // Acccounts always exposed
//   }
//   // Non-dapp browsers...
//   else {
//     console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//   }
// });



// export const isUserLoggedIn = () => {
//   web3.eth.getAccounts(function(err, accounts){
//     if (err != null) {
//        console.log(err)
//     }
//     else if (accounts.length === 0) {
//        console.log('MetaMask is locked')
//     }
//     else {
//        console.log('MetaMask is unlocked')
//     }
//  });
// }