import { getAccounts } from '../../utils/metamask'
import abi from './abi';

class IncrementContract {

  constructor(contractAddress) {
    this.contractAddress = contractAddress;
    this.contract = new window.web3.eth.Contract(abi, this.contractAddress);
  }

  async getState() {
    const incrementer = await this.contract.methods.incrementer().call();
    const incrementedValue = await this.contract.methods.i().call();
    return { 
      incrementer,
      incrementedValue,
    }
  }

  async incrementVar() {
    const fromAccounts = await getAccounts();
    const from = fromAccounts[0];
    const txHash = await this.contract.methods.incrementVar().send({ from });
    return txHash;
  }
}

export default IncrementContract;