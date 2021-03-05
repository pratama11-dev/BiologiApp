import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import alatRouter from './routers/alatRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/virtualbiologilab', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();

app.use('/api/users', userRouter);
app.use('/api/alat', alatRouter);

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// app.get('/', ( req, res ) => {
//     res.send('Server  is ready');
// });

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
