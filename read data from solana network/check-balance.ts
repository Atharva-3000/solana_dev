import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
require('dotenv').config();

const connection = new Connection(clusterApiUrl("devnet"));

// const keypair = Keypair.generate();

// console.log(`The public key is: `, keypair.publicKey.toBase58());
const address = new PublicKey(process.env.PUBLIC_KEY ?? '');

if (PublicKey.isOnCurve(address)) {
    const balance = await connection.getBalance(address);

    const balanceInSol = balance / LAMPORTS_PER_SOL;

    console.log(`the Balance of the account at ${address} : ${balanceInSol} SOL`);
    console.log(`✅ Finished!`);
}
else{
    console.log(`❌ The address is not valid`);
    console.log(`✅ Finished!`);
}