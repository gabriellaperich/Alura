import express from 'express';

// inicia o express
const app = express();
// .listen(porta, função)
app.listen(3000, () => {
    console.log('Servidor executando...');
});

app.get('/api', (req, res) => {
    res.status(200).send('Boas vindas!');
});