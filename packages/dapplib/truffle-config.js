require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stomach razor remember unknown include problem metal gasp'; 
let testAccounts = [
"0x6e5703159522d37b5f3810cf8f2c5bcbf22f9083121f96c68c4da1c8afd27d8e",
"0x8fdd5603c112ccae8a876ed6037f23760965181de78c11712f5cbada6b372c0b",
"0xd02bcae1b0f92949baf92615515a072c39deec972937dffb340bbb98ac8f1c7d",
"0x1d03bdfcfcce21419d4b69b36035fe06ee274fae7009c44e5daec74f601cdd2c",
"0xef1c951f6d6d6025a549735592f7bc3e66cd41ca37cfe4ea89b0f405d79b62de",
"0xb11bbd67259795f725327aff099d6fe9d49a5fac06d8907eadbc8cad1f9f20ed",
"0x0c5c5f9bafd5af97ea724c56d71e7142c00443f8a9052d596fd0e63e1748d6c1",
"0xae55ce6920e61f1779d8955e8b0cfbc962466f9665866ab4a7249eae536c1b3b",
"0xe3cb2faffa4b4d1ba9350b9e1d9ed0e7deeb497817f5aa0725d176afd4cce0a8",
"0x94afc0f7a6b24f5885ee0fb4aa855d8e65efa18548657c0ab9728c6895ad4f70"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
