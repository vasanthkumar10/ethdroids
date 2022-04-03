import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
//Web3Modal = window.Web3Modal.default;
//const WalletConnectProvider = window.WalletConnectProvider.default;
let provider;
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: { infuraId: "20ff7c8c89ef400fbf77dac3c4544d46" },
  },
};
const web3Modal = new Web3Modal({ cacheProvider: false, providerOptions });
async function onConnect() {
  try {
    provider = await web3Modal.connect();
  } catch (e) {
    return;
  }
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
  fetchAccountData();
}

const ABI = JSON.parse(
  `[{"inputs":[ { "internalType":"string", "name":"baseURI", "type":"string" } ], "stateMutability":"nonpayable", "type":"constructor" }, { "anonymous":false, "inputs":[ { "indexed":true, "internalType":"address", "name":"owner", "type":"address" }, { "indexed":true, "internalType":"address", "name":"approved", "type":"address" }, { "indexed":true, "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"Approval", "type":"event" }, { "anonymous":false, "inputs":[ { "indexed":true, "internalType":"address", "name":"owner", "type":"address" }, { "indexed":true, "internalType":"address", "name":"operator", "type":"address" }, { "indexed":false, "internalType":"bool", "name":"approved", "type":"bool" } ], "name":"ApprovalForAll", "type":"event" }, { "anonymous":false, "inputs":[ { "indexed":true, "internalType":"address", "name":"previousOwner", "type":"address" }, { "indexed":true, "internalType":"address", "name":"newOwner", "type":"address" } ], "name":"OwnershipTransferred", "type":"event" }, { "anonymous":false, "inputs":[ { "indexed":true, "internalType":"address", "name":"from", "type":"address" }, { "indexed":true, "internalType":"address", "name":"to", "type":"address" }, { "indexed":true, "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"Transfer", "type":"event" }, { "inputs":[ ], "name":"_badBoyPaused", "outputs":[ { "internalType":"bool", "name":"", "type":"bool" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"_badBoyStartCount", "outputs":[ { "internalType":"uint256", "name":"", "type":"uint256" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"_paused", "outputs":[ { "internalType":"bool", "name":"", "type":"bool" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"address", "name":"to", "type":"address" }, { "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"approve", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"address", "name":"owner", "type":"address" } ], "name":"balanceOf", "outputs":[ { "internalType":"uint256", "name":"", "type":"uint256" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"getApproved", "outputs":[ { "internalType":"address", "name":"", "type":"address" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"address", "name":"owner", "type":"address" }, { "internalType":"address", "name":"operator", "type":"address" } ], "name":"isApprovedForAll", "outputs":[ { "internalType":"bool", "name":"", "type":"bool" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"name", "outputs":[ { "internalType":"string", "name":"", "type":"string" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"owner", "outputs":[ { "internalType":"address", "name":"", "type":"address" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"ownerOf", "outputs":[ { "internalType":"address", "name":"", "type":"address" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"renounceOwnership", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"address", "name":"from", "type":"address" }, { "internalType":"address", "name":"to", "type":"address" }, { "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"safeTransferFrom", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"address", "name":"from", "type":"address" }, { "internalType":"address", "name":"to", "type":"address" }, { "internalType":"uint256", "name":"tokenId", "type":"uint256" }, { "internalType":"bytes", "name":"_data", "type":"bytes" } ], "name":"safeTransferFrom", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"address", "name":"operator", "type":"address" }, { "internalType":"bool", "name":"approved", "type":"bool" } ], "name":"setApprovalForAll", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"bytes4", "name":"interfaceId", "type":"bytes4" } ], "name":"supportsInterface", "outputs":[ { "internalType":"bool", "name":"", "type":"bool" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"symbol", "outputs":[ { "internalType":"string", "name":"", "type":"string" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"uint256", "name":"index", "type":"uint256" } ], "name":"tokenByIndex", "outputs":[ { "internalType":"uint256", "name":"", "type":"uint256" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"address", "name":"owner", "type":"address" }, { "internalType":"uint256", "name":"index", "type":"uint256" } ], "name":"tokenOfOwnerByIndex", "outputs":[ { "internalType":"uint256", "name":"", "type":"uint256" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"tokenURI", "outputs":[ { "internalType":"string", "name":"", "type":"string" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"totalSupply", "outputs":[ { "internalType":"uint256", "name":"", "type":"uint256" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"address", "name":"from", "type":"address" }, { "internalType":"address", "name":"to", "type":"address" }, { "internalType":"uint256", "name":"tokenId", "type":"uint256" } ], "name":"transferFrom", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"address", "name":"newOwner", "type":"address" } ], "name":"transferOwnership", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"uint256", "name":"num", "type":"uint256" } ], "name":"purchase", "outputs":[ ], "stateMutability":"payable", "type":"function", "payable":true }, { "inputs":[ { "internalType":"address", "name":"_owner", "type":"address" } ], "name":"walletOfOwner", "outputs":[ { "internalType":"uint256[]", "name":"", "type":"uint256[]" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"uint256", "name":"_newPrice", "type":"uint256" } ], "name":"setPrice", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"uint256", "name":"_newPrice", "type":"uint256" } ], "name":"setBadBoyPrice", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"string", "name":"baseURI", "type":"string" } ], "name":"setBaseURI", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ ], "name":"getPrice", "outputs":[ { "internalType":"uint256", "name":"", "type":"uint256" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ ], "name":"getQubinatorPrice", "outputs":[ { "internalType":"uint256", "name":"", "type":"uint256" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"address", "name":"_to", "type":"address" }, { "internalType":"uint256", "name":"_amount", "type":"uint256" } ], "name":"giveAway", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"uint256", "name":"tokenId", "type":"uint256" }, { "internalType":"bool", "name":"val", "type":"bool" } ], "name":"unboxQubit", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"uint256", "name":"id", "type":"uint256" } ], "name":"isUnboxed", "outputs":[ { "internalType":"bool", "name":"", "type":"bool" } ], "stateMutability":"view", "type":"function", "constant":true }, { "inputs":[ { "internalType":"uint256", "name":"qubit1", "type":"uint256" }, { "internalType":"uint256", "name":"qubit2", "type":"uint256" } ], "name":"sendQubinator", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"bool", "name":"val", "type":"bool" } ], "name":"pause", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ { "internalType":"bool", "name":"val", "type":"bool" } ], "name":"qubinatorPause", "outputs":[ ], "stateMutability":"nonpayable", "type":"function" }, { "inputs":[ ], "name":"withdrawAll", "outputs":[ ], "stateMutability":"payable", "type":"function", "payable":true }, { "inputs":[ { "internalType":"uint256", "name":"amount", "type":"uint256" } ], "name":"withdraw", "outputs":[ ], "stateMutability":"payable", "type":"function", "payable":true } ]`
);
let account_global;
let connected;
let contract;
const metamaskButton = document.getElementById("connectMeta");
const mintButton = document.getElementById("mintButton");
const salesProgress = document.getElementById("salesProgress");
const loaded = false;
let contractAddress = "0x272CAcA9a987744506Ab277B1E5A160fb48428eF";
let proxyAddress = "0x272CAcA9a987744506Ab277B1E5A160fb48428eF";
window.web3 = new Web3(
  "https://rinkeby.infura.io/v3/20ff7c8c89ef400fbf77dac3c4544d46"
);

addPercentages();

async function addPercentages() {
  contractAddress = new window.web3.eth.Contract(ABI, contractAddress);
  const supply = await contractAddress.methods.totalSupply().call();
  const total = 9999;
  //salesProgress.innerHTML = supply;
  const progresspercent = supply ? ((supply / total) * 100).toFixed(2) : 0;
}

//
const ethEnabled = async () => {
  if (await window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    return true;
  }
  return false;
};

export async function connect() {
  return new Promise(async (resolve, reject) => {
    await connectMeta(resolve, reject);
  });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchAccountData() {
  window.web3 = new Web3(provider);
  const chainId = await window.web3.eth.getChainId();
  const accounts = await window.web3.eth.getAccounts();
  account_global = accounts[0];
  window.web3.eth.defaultAccount = account_global;
  connected = true;
  proxyAddress = new window.web3.eth.Contract(ABI, proxyAddress);
  mintButton.style.display = "block";
  connect.style.display = "none";
}

export async function connectMeta(resolve, reject) {
  if (await ethEnabled()) {
    let wei;
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    account_global = accounts[0];
    window.web3.eth.defaultAccount = account_global;
    connected = true;
    contract = new window.web3.eth.Contract(ABI, contractAddress);
    localStorage.setItem("isWalletConnected", true);
    resolve(true);
  } else {
    alert(
      "You will need MetaMask and a compatible browser with it to access this dApp."
    );
    localStorage.setItem("isWalletConnected", false);
    reject(false);
  }
}

export async function mint() {
  const numberQubits = document.getElementById("crusader-number");
  const number = numberQubits.value;
  console.log(numberQubits, number);
  const status = document.getElementById("status");
  status.style.display = "block";
  status.innerHTML = `Transaction is being processed <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;
  if (number !== "" && number <= 20) {
    try {
      await proxyAddress.methods
        .purchase(number)
        .send({
          from: account_global,
          value: 45000000000000000 * parseInt(number, 10),
        })
        .then((txHash) => {
          status.innerHTML = `Check out your transaction on Etherscan: https://etherscan.io/tx/${txHash.transactionHash}`;
        });
    } catch (error) {
      status.innerHTML = `There was an error with the transaction:${error.message}`;
    }
  } else if (number > 20) {
    status.innerHTML = `Maximum number of NFTs you can buy is 20.`;
  } else {
    alert("Please enter an amount before it runs out.");
  }
}

export async function mintHero() {
  const numberQubits = document.getElementById("hero-number");
  const number = numberQubits.value;
  const status = document.getElementById("status");
  status.style.display = "block";
  status.innerHTML = `Transaction is being processed <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;
  if (number !== "" && number <= 20) {
    try {
      await proxyAddress.methods
        .purchase(number)
        .send({
          from: account_global,
          value: 45000000000000000 * parseInt(number, 10),
        })
        .then((txHash) => {
          status.innerHTML = `Check out your transaction on Etherscan: https://etherscan.io/tx/${txHash.transactionHash}`;
        });
    } catch (error) {
      status.innerHTML = `There was an error with the transaction:${error.message}`;
    }
  } else if (number > 20) {
    status.innerHTML = `Maximum number of NFTs you can buy is 20.`;
  } else {
    alert("Please enter an amount before it runs out.");
  }
}