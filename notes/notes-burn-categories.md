# Background on Burn Categories in Ethereum

In Ethereum, **burn categories** refer to different classifications of transactions that contribute to ETH being burned as part of network fees. 
This mechanism was introduced with **EIP-1559** in the **London Hark Fork**(Aug. 2021), fundamentally changing Ethereum's gas fee model by introducing a **base fee** that is burned, reducing ETH supply over time. 

## Key Components in the Code 
###  **categoryId**: Defines different transaction categories, including **CEX(centrailized exchange transactions)**, **DeFi**, **L1/L2** activity, **NFTS**, **MEV**, **ETH transfers**, and **contract creations**. 

### BurnCategory Type: Represents key burn metrics per category, including: 
- Fees(ETH & USD): Total ETH burned in this category. 
- Transaction Count: Number of transactions contributing to burn. 
- Percent of Total Burn: Contribution of this category to overcall ETH burn. 

## Summarize 
- ETH Supply & Deflation: Burned ETH directly affects the supply-demand balance, reducing inflationary pressure. 
- Economic & Security Insights: Tracking which sectors (DeFi, gaming, MEV, etc.) drive ETH burns provides insights into **Ethereum's usage and security costs**. 
- Dashboard && Analysis: These categories enable visualizing burn trends, help researchers, developers, and users understand Ethereum's economic activity. 