import { Connection, clusterApiUrl, PublicKey } from '@_koi/web3.js';

const testK2SDK = async () => {
  try {
    const connection = new Connection(clusterApiUrl('testnet'));
    const publicKey = new PublicKey('6J9ZnwQnZGYV3Uyk6wq1XCJfSvgLXqxrM5fd8SBdGNac');
    const balance = await connection.getBalance(publicKey);
  
    console.log('balance', balance);
  } catch (err) {
    console.error(err);
  }
};

testK2SDK();
