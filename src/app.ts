import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database';
import router from './routes/routes';
import dotenv from 'dotenv';
import { updateEthereumPrice } from './services/ethereumPriceUpdater';
import { updateBitcoinPrice } from './services/bitcoinPriceUpdater';
import { updateMaticPrice } from './services/maticPriceUpdater';

dotenv.config();

const app = express();
app.use(bodyParser.json());

connectDB();

app.use('/api', router);

updateEthereumPrice();
updateBitcoinPrice();
updateMaticPrice();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});