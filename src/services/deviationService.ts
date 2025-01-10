import { getPrices } from "./databaseService";

export const calculateDeviation = async (coin: string): Promise<number> => {
  const prices = (await getPrices(coin)).filter(
    (price): price is number => price !== null && price !== undefined
  );

  if (prices.length === 0) {
    throw new Error(`No price records found for the coin: ${coin}`);
  }

  const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const variance =
    prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
    prices.length;
  const standardDeviation = Math.sqrt(variance);

  return parseFloat(standardDeviation.toFixed(2));
};
