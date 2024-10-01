// server.js
const express = require('express');
const app = express();
const port = 3010;

// Указываем Express использовать папку 'public' для статических файлов
app.use(express.static('public'));

// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});