
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
            drawCharts();
        } catch (err) {
            console.error("Wallet connect failed:", err);
        }
    } else {
        alert("Please install MetaMask");
    }
});

function drawCharts() {
    new Chart(document.getElementById('stakingChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Day 1','Day 2','Day 3','Day 4'],
            datasets: [{
                label: 'Total Staked',
                data: [10000, 15000, 30000, 45000],
                borderColor: '#00c2ff',
                borderWidth: 2
            }]
        }
    });

    new Chart(document.getElementById('rewardsChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Day 1','Day 2','Day 3','Day 4'],
            datasets: [{
                label: 'Rewards Claimed',
                data: [0, 1200, 2800, 3500],
                borderColor: 'lime',
                borderWidth: 2
            }]
        }
    });
}
