import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Alat from '../models/alatModel.js';
import { isAdmin, isAuth } from '../util.js';


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
        res.status(404).send({ message: 'Tidak Menemukan Data' });
      }
    })
  );

alatRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const alat = new Alat({
      nama: 'sample ' + Date.now(),
      tujuan: 'sample',
      masalah: 'sample',
      langkah: 'sample',
      tools: [
        {
          img:'/img/stetoskop.png',
          desc:'sample'
        },
      ]
    });
    const createdAlat = await alat.save();
    res.send({ message: 'Membuat Penelitian Baru', alat: createdAlat });
    if(createdAlat){
      return res.status(201).send({ message: "Membuat Penelitian Baru", data: createdAlat});
    }
    return res.status(500).send({ message: "Terjadi Kesalahan Dalam Membuat Data"})
  })
);

alatRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const alatId = req.params.id;
    const alat = await Alat.findById(alatId);
    if (alat) {
      alat.nama = req.body.nama;
      alat.tujuan = req.body.tujuan;
      alat.masalah = req.body.masalah;
      alat.langkah = req.body.langkah;
      alat.tools = [{
        img : req.body.img,
        desc : req.body.desc
      }];
      // alat.img = req.body.img;
      // alat.desc = req.body.desc;      
      const updatedAlat = await alat.save();
      res.send({ message: 'Alat Updated', alat: updatedAlat });
    } else {
      res.status(404).send({ message: 'Alat Tidak ditemukan' });
    }
  })
);

alatRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const alat = await Alat.findById(req.params.id);
    if (alat) {
      const deleteAlat = await alat.remove();
      res.send({ message: 'Menghapus Data', alat: deleteAlat });
    } else {
      res.status(404).send({ message: 'Data Tidak Ditemukan' });
    }
  })
);
  

export default alatRouter;