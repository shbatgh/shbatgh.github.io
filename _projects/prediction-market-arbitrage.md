---
layout: page
title: "Prediction-market arbitrage monitor"
description: "Semantic market matching, live WebSocket order books, fee-aware hedging math, and user-gated execution across Kalshi and Polymarket."
importance: 5
category: systems
---

This is a real-time cross-exchange arbitrage monitor for Kalshi and Polymarket. The simple math is that two binary contracts covering opposite sides of the same event can lock a payout if their combined cost plus fees is less than one dollar. The hard part is proving that two messy market listings actually resolve on the same event, then reacting before the order books move.

The system pulls market metadata from both exchanges, embeds titles/questions for candidate retrieval, and uses Gemini verification to reject pairs with mismatched dates, thresholds, resolution rules, or inverted outcomes. Verified pairs feed a live detector that streams both exchanges over WebSockets, normalizes YES/NO books into a common format, models Kalshi taker fees, filters stale books, and sends Telegram alerts with ROI, annualized ROI, expected profit, quantities, expiries, and links.

Execution is user-gated rather than fully autonomous. I added guardrails for minimum liquidity, minimum profit, maximum expiry, stale-book cutoffs, duplicate-alert suppression, reconnect handling, latency logging, and hedge-status audits.

I also collected Polymarket L2 order-book updates for the top 2,000 markets over roughly four months, producing a 100M+ update dataset for backtesting and microstructure analysis.

**Tools:** Python, AsyncIO, WebSockets, REST APIs, sentence embeddings, Gemini API verification, order-book normalization, fee-aware ROI calculation.
