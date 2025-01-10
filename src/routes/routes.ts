import express from 'express';
import getDeviation from '../controllers/deviationController';
import getStats from '../controllers/statsController';

const router = express.Router();

router.post('/stats/:coin', getStats);
router.get('/deviation/:coin', getDeviation);

export default router;