require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stool response mean protect gloom dry flock gauge'; 
let testAccounts = [
"0x7cdb9f357934e79c519e8154e81e6d13ffc67c34796e9f6f2e17903e1b6cc740",
"0xfc200d4d2cbfad0e0f76dd0ceac7618f38f318d6f57e4ee70c12c1d18be652b8",
"0x88bc5efd9bad0c88e191161d1489f5c8c43e89ea4f88f2c2368d8aee8bff92d6",
"0x11ac287123a301f8e44c494e41b55cd3076fdbcf8da08b71dded1f0275c20836",
"0x00cc25e864d6c1a047ac2cda286607caceddaad209b48dee4423e309d5464196",
"0xb2124c501c4d5eb4a4fe309fb19094545f8ceb3a018c9854ff48f9c799ea4b96",
"0x92d85bad4d4781f34912948b7e61d308b6d0feef138949739eca517957f840e6",
"0xce6582b80f3b4041bda97b83c920e2e5ecb0f5cbe0c0ee46142d8fd86f6be55e",
"0x2258ef50aa6b2a55f3037087db9956e0ff22b6e90b6ce58299dc69af9b1a272e",
"0xbcfde940c81959ac564f4a73de2cca333c94c1c80e5b812dfec8eaad18a47bea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

