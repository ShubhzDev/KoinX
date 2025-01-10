"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const ethereumPriceUpdater_1 = require("./services/ethereumPriceUpdater");
const bitcoinPriceUpdater_1 = require("./services/bitcoinPriceUpdater");
const maticPriceUpdater_1 = require("./services/maticPriceUpdater");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
(0, database_1.default)();
app.use('/api', routes_1.default);
(0, ethereumPriceUpdater_1.updateEthereumPrice)();
(0, bitcoinPriceUpdater_1.updateBitcoinPrice)();
(0, maticPriceUpdater_1.updateMaticPrice)();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
