import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './src/config/database';
import router from './src/routes/routes';
import dotenv from 'dotenv';
import { updateEthereumPrice } from './src/services/ethereumPriceUpdater';
import { updateBitcoinPrice } from './src/services/bitcoinPriceUpdater';
import { updateMaticPrice } from './src/services/maticPriceUpdater';

dotenv.config();

const app = express();
app.use(bodyParser.json());

connectDB();

app.use('/api', router);
app.use('/api', router);

updateEthereumPrice();
updateBitcoinPrice();
updateMaticPrice();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});