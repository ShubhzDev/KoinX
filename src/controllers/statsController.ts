import { Request, Response } from 'express';

const getStats = async (req: Request, res: Response) => {
  try {
    const coin = req.params.coin;

    if (!coin) {
       res.status(500).send({ message: "coin parameter is missing"});
       return;
    }
    res.status(200).send(coin);
  } catch (err) {
    res.status(500).send({ message: "Failed to retrieve stats" });
  }
};

export default getStats;