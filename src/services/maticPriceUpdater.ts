import { coinPrice } from "../models/coinPriceModel";
import * as coingeckoService from "../utils/coingeckoService";

export const updateMaticPrice = async (): Promise<void> => {
  try {
    const { usd, usd_market_cap, usd_24h_change } =
      await coingeckoService.getCryptoPrice("matic-network", "usd", true, true);
    const newPrice = new coinPrice({
      coin: "matic-network",
      priceUsd: usd,
      usdMarketCap: usd_market_cap,
      usd24hChange: usd_24h_change,
    });
    await newPrice.save();
    console.log("Matic price updated successfully!");
  } catch (err) {
    console.error("Failed to update Matic price:", err);
  }
};

const interval = 120 * 60 * 1000; // 2 hours
setInterval(updateMaticPrice, interval);
