WITH recent_trades_usd AS (
    SELECT address, SUM(
        CASE denom
            WHEN 'usdc' THEN amount * 0.000001
            WHEN 'swth' THEN amount * 0.00000005
            WHEN 'tmz' THEN amount * 0.003
            ELSE 0
        END) AS total_trade_amount_usd
    FROM trades
    WHERE block_height > 730000
    GROUP BY address
),
balance_usd AS (
    SELECT address, SUM(
        CASE denom
            WHEN 'usdc' THEN amount * 0.000001
            WHEN 'swth' THEN amount * 0.00000005
            WHEN 'tmz' THEN amount * 0.003
            ELSE 0
        END) AS total_balance_usd
    FROM balances
    GROUP BY address
)
SELECT b.address
FROM balance_usd b
JOIN recent_trades_usd t ON b.address = t.address
WHERE b.total_balance_usd >= 500 AND t.total_trade_amount_usd IS NOT NULL;
