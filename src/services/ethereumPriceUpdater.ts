import { coinPrice } from "../models/coinPriceModel";
import { ICryptoPrice } from "../types/types";
import * as coingeckoService from "../utils/coingeckoService";

export const updateEthereumPrice = async (): Promise<void> => {
  try {
    const { usd, usd_market_cap, usd_24h_change } =
      await coingeckoService.getCryptoPrice("ethereum", "usd", true, true);
    const newPrice = new coinPrice({
      coin: "ethereum",
      priceUsd: usd,
      usdMarketCap: usd_market_cap,
      usd24hChange: usd_24h_change,
    });
    await newPrice.save();
    console.log("Ethereum price updated successfully!");
  } catch (err) {
    console.error("Failed to update Ethereum price:", err);
  }
};

const interval = 120 * 60 * 1000; // 2 hours
setInterval(updateEthereumPrice, interval);
