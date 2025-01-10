// Controller: DeviationController.ts
import { Request, Response } from 'express';
import { calculateDeviation } from '../services/deviationService';

const getDeviation = async (req: Request, res: Response)=> {
    try {
        const coin = req.params.coin;

        if (!coin) {
           res.status(500).send({ message: "coin parameter is missing"});
           return;
        }

        const deviation = await calculateDeviation(coin);
        res.status(200).json({ deviation });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve deviation" });
    }
};

export default getDeviation;