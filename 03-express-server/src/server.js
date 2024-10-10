// server.js
import express from 'express';
const app = express();
const port = 3010;

// Указываем Express использовать папку 'public' для статических файлов
app.use(express.static('src/public'));

// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});