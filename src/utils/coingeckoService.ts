import axios from 'axios';
import { ICryptoPrice } from '../types/types';

export const getCryptoPrice = async (
  cryptoId: string,
  vsCurrency: string,
  includeMarketCap: boolean = false,
  include24HrChange: boolean = false
): Promise<any> => {
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=${vsCurrency}&include_market_cap=${includeMarketCap}&include_24hr_change=${include24HrChange}`;
  const response : ICryptoPrice = await axios.get(apiUrl);
  return response;
};