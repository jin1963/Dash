
let web3;
let contract;
const contractAddress = "0x27d82cc200033d8ecf6b5558ebe60ca212338a4f";

window.addEventListener("load", async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
            const accounts = await web3.eth.getAccounts();
            const user = accounts[0];
            contract = new web3.eth.Contract(stakingABI, contractAddress);
            document.getElementById("walletInfo").innerText = "✅ Connected: " + user;
        } catch (err) {
            console.error(err);
        }
    } else {
        alert("⚠️ MetaMask not detected.");
    }
});
