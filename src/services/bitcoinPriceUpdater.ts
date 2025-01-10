import { coinPrice } from "../models/coinPriceModel";
import * as coingeckoService from "../utils/coingeckoService";

export const updateBitcoinPrice = async (): Promise<void> => {
  try {
    const { coin, price, marketCap, change24Hr } =
      await coingeckoService.getCryptoPrice("bitcoin", "usd", true, true);
    const newPrice = new coinPrice({
      coin: coin,
      priceUsd: price,
      usdMarketCap: marketCap,
      usd24hChange: change24Hr,
    });
    await newPrice.save();
    console.log("Ethereum price updated successfully!");
  } catch (err) {
    console.error("Failed to update Ethereum price:", err);
  }
};

const interval = 120 * 60 * 1000; // 2 hours
setInterval(updateBitcoinPrice, interval);
