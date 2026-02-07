# SPL Token Mint & Trade Project

## Objective

Mint, send, and trade SPL tokens on Solana devnet.

## What to Do

1. **Mint an SPL token** with a creative name
   - Use the `spl_init.ts` script to create your custom token
   - Configure token metadata (name, symbol, decimals)

2. **Send tokens to another wallet**
   - Transfer some of your newly minted tokens to a peer's devnet wallet
   - Document the transaction hash

3. **Trade SPL tokens**
   - Use Discord to negotiate and exchange tokens with other participants
   - Track your trades and interactions

## Project Structure

```
spl/
├── spl_init.ts           # Token minting script
├── spl_metadata.ts       # Metadata configuration script
├── turbin3-wallet.json   # Your devnet wallet keypair
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm package manager
- Solana CLI (optional, for additional tooling)

### Installation

```bash
pnpm install
```

### Running the Scripts

**Mint a token:**

```bash
npx ts-node spl_init.ts
```

**Add metadata:**

```bash
npx ts-node spl_metadata.ts
```

## Tips

- Use **Discord** to find trading partners and negotiate token exchanges
- Keep your wallet keypair secure (`turbin3-wallet.json`)
- Test on devnet before mainnet transactions
- Document all transaction hashes for verification

### Submission

**Token Details**

- **Mint Address**: CYFhL5XwqTcqVnzxfkogVX2VcmX1nmtXM4CK2Wbcwwdy
- **Token Name**: Pulse
- **Symbol**: PLS
- **Decimals**: 6

**Minting Transaction**

- **Hash**: [View on Solana Explorer](https://explorer.solana.com/tx/CYFhL5XwqTcqVnzxfkogVX2VcmX1nmtXM4CK2Wbcwwdy?cluster=devnet)
- **Screenshot**: ![alt text](<Screenshot From 2026-02-07 05-59-39-1.png>)

**Token Transfer Example**

- **Transfer Hash**: [View on Solana Explorer](https://explorer.solana.com/tx/5VLhhGozyqsXphBsWiDCkWQncFMxevdUV4tT264fKwncGutctRySZurJ7NoHpFDm3czQpLJoHjXYuCwgx7NTkXs8?cluster=devnet)
- **Recipient**: EF9kYRwBwavGiUuhQC9topj15cwVCCLNETb6HFMXGZhZ
- **Amount Transferred**: 100

## Resources

- [Solana Web3.js Documentation](https://docs.solana.com/developers)
- [SPL Token Program](https://spl.solana.com/token)
- [Metaplex Token Metadata](https://www.metaplex.com/)

## License

ISC
