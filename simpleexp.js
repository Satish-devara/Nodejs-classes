import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('hello from express');
});

app.listen(3000, () => {
    console.log('Server runing on http://localhost:3000');
})