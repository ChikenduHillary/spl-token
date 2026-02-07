import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import wallet from "./turbin3-wallet.json";
import {
  getOrCreateAssociatedTokenAccount,
  mintTo,
  transfer,
  getMint,
} from "@solana/spl-token";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const mint = new PublicKey("CYFhL5XwqTcqVnzxfkogVX2VcmX1nmtXM4CK2Wbcwwdy");
const recipient = new PublicKey("EF9kYRwBwavGiUuhQC9topj15cwVCCLNETb6HFMXGZhZ");

(async () => {
  try {
    // Check mint decimals
    const mintInfo = await getMint(connection, mint);
    const decimals = mintInfo.decimals;
    console.log("Token decimals:", decimals);

    // Get your ATA
    const ataFrom = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey,
    );

    // Mint 100 tokens to your wallet if balance = 0
    const balance = Number(ataFrom.amount);
    console.log("Your current token balance:", balance);

    if (balance === 0) {
      const amountToMint = 100 * 10 ** decimals; // 100 tokens
      await mintTo(
        connection,
        keypair,
        mint,
        ataFrom.address,
        keypair.publicKey,
        amountToMint,
      );
      console.log(`Minted ${100} tokens to your wallet!`);
    }

    // Get recipient ATA
    const ataTo = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      recipient,
    );

    // Transfer 15 tokens
    const amountToSend = 15 * 10 ** decimals;
    const tx = await transfer(
      connection,
      keypair,
      ataFrom.address,
      ataTo.address,
      keypair.publicKey,
      amountToSend,
    );

    console.log("Transfer successful! TxId:", tx);
    console.log(
      `View on Solana Explorer: https://explorer.solana.com/tx/${tx}?cluster=devnet`,
    );
  } catch (err) {
    console.error("Error:", err);
  }
})();
