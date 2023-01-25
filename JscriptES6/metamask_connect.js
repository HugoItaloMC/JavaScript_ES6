// Conectando à MetaMask
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// Obtendo o endereço da carteira
web3.eth.getAccounts(function(error, accounts) {
    if (error) {
        console.log(error);
    } else {
        var fromAddress = accounts[0];
        console.log("Endereço da carteira: " + fromAddress);
    }
});

// Obtendo o contrato inteligente
var myTokenContract = web3.eth.contract(contractABI).at(contractAddress);

// Transferindo tokens para a carteira
myTokenContract.transfer(fromAddress, 100, { from: fromAddress }, function(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log("Transação enviada. Hash: " + result);
    }
});
