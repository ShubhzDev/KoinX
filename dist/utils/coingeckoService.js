"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoPrice = void 0;
const axios_1 = __importDefault(require("axios"));
const getCryptoPrice = (cryptoId_1, vsCurrency_1, ...args_1) => __awaiter(void 0, [cryptoId_1, vsCurrency_1, ...args_1], void 0, function* (cryptoId, vsCurrency, includeMarketCap = false, include24HrChange = false) {
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=${vsCurrency}&include_market_cap=${includeMarketCap}&include_24hr_change=${include24HrChange}`;
    const response = yield axios_1.default.get(apiUrl);
    const resData = response.data[cryptoId];
    console.log(resData);
    return resData;
});
exports.getCryptoPrice = getCryptoPrice;
