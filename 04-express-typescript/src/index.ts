import express from 'express';

const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Привет, it-incubator, TypeScript и Express!' });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
