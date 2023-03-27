-- Select the addresses from the balances table
SELECT balances.address
FROM balances
-- Join the balances and trades table on the address column
JOIN trades 
ON balances.address = trades.address
-- Filter the trades that have been made after block height 730000
WHERE trades.block_height > 730000
-- Group the results by address
GROUP BY balances.address
-- Calculate the total balance of each wallet by converting the denom to USD and summing the amount
HAVING SUM(CASE 
              WHEN balances.denom = 'usdc' THEN balances.amount * 0.000001
              WHEN balances.denom = 'swth' THEN balances.amount * 0.00000005
              WHEN balances.denom = 'tmz' THEN balances.amount * 0.003
           END) >= 500;
-- Select only the addresses whose total balance is at least $500.