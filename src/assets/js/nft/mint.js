import Web3 from 'web3';
import Swal from 'sweetalert2';
import abi from './abi.json';

let account = null;
let contract = null;

function Connect(callback) {
  if (typeof window.ethereum === 'undefined') {
    Swal.fire({
      icon: 'warning',
      title: '需先安裝MetaMask',
    });
  } else {
    const { ethereum } = window;
    ethereum.enable().catch((reason) => {
      if (reason === 'User rejected provider access') {
        Swal.fire({
          icon: 'error',
          title: '拒絕登入',
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: '登入發生問題，請稍後在試試',
        });
      }
    }).then((accounts) => {
      // eslint-disable-next-line prefer-destructuring
      account = accounts[0];
      callback(accounts[0]);
      const web3 = new Web3(window.ethereum);
      contract = new web3.eth.Contract(abi, '0x3b6977f10bA2A1eD5AaDa250B0CDf84A6b01Ed2c');
    });
  }
}

function Mint() {
  if (account == null) {
    Swal.fire({
      icon: 'error',
      title: '尚未連接MetaMask',
    });
    return;
  }
  contract.methods.whiteListMintSoftCats(1).send({ from: account, value: 35000000000000000 }).then(() => {
    Swal.fire({
      icon: 'success',
      text: 'Mint成功！',
    });
  });
}

function GetAccount() {
  return account;
}

export default {
  Connect,
  Mint,
  GetAccount,
};
