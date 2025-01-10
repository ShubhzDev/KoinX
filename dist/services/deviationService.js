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
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDeviation = void 0;
const deviationCalculator_1 = require("./deviationCalculator");
const calculateDeviation = (coin) => __awaiter(void 0, void 0, void 0, function* () {
    const prices = (yield (0, deviationCalculator_1.getPrices)(coin)).filter((price) => price !== null && price !== undefined);
    if (prices.length === 0) {
        throw new Error(`No price records found for the coin: ${coin}`);
    }
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
        prices.length;
    const standardDeviation = Math.sqrt(variance);
    return parseFloat(standardDeviation.toFixed(2));
});
exports.calculateDeviation = calculateDeviation;
