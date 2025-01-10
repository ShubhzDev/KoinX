import mongoose, { Schema } from 'mongoose';
import { ICryptoPrice } from '../types/types';

export const coinPriceModel = new Schema({
  coin : String,
  priceUsd: Number,
  usdMarketCap: Number,
  usd24hChange: Number,
});

 export const coinPrice = mongoose.model<ICryptoPrice>('BitcoinPrice', coinPriceModel);
