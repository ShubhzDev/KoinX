import { Document } from 'mongoose';

export interface ICryptoPrice extends Document {
  coin : string,
  priceUsd: number,
  usdMarketCap: number,
  usd24hChange: number,
}

export interface IFailure {
  message: string;
}