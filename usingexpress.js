import express from 'express';
const app = express();

app.get('/', (req,res) => {
    res.status(200).send('home page');
});

app.get('/about',  (req,res) => {
    res.status(200).json({message : 'About Page'});
});

app.use((req, res) => {
    res.status(404).send('page not found');
});