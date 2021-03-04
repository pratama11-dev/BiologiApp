import express from 'express';
import data from './data.js';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/alat/:id', (req, res) => {
    const alat = data.alat.find((x) => x._id === req.params.id);
    if (alat) {
        res.send(alat);
    } else {
        res.status(404).send({ message: 'Alat Not Found'})
    };
});

const __dirname = path.resolve();

app.get('/api/alat', (req,res) => {
    res.send(data.alat);
});

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// app.get('/', ( req, res ) => {
//     res.send('Server  is ready');
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
