import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Alat from '../models/alatModel.js';

const alatRouter = express.Router();

alatRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const alat = await Alat.find({});
      res.send(alat);
    })
  );

alatRouter.get('/seed', 
    expressAsyncHandler( async(req, res) => {
        // await Alat.remove({});
        const createdAlat = await Alat.insertMany(data.alat);
        res.send({ createdAlat });
    })
);

alatRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const alat = await Alat.findById(req.params.id);
      if (alat) {
        res.send(alat);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

export default alatRouter;