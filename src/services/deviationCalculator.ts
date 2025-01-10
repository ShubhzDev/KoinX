import { coinPrice } from "../models/coinPriceModel";

export const getPrices = async (
  coin: string
): Promise<(number | null | undefined)[]> => {
  const records = await coinPrice.find({ coin }).limit(100).exec();

  return records.map((record) => record.priceUsd);
};
