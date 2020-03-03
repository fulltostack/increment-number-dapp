import { getAccounts } from '../../utils/metamask'
import abi from './abi';

class IncrementContract {

  constructor() {
    this.contractAddress = '0x83000a553028c708d74e41c866e4bb187b7b042e';
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