// server.js
const http = require('http');

let counter = 0;

const server = http.createServer((req, res) => {
    console.log('request: ' + (++counter))

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/hello') {
        res.statusCode = 200;
        res.end('Привет от it-incubator.io сервера!');
    } else if (req.url === '/error') {
        throw new Error('Fatal error, samurai')
    } else {
        res.statusCode = 404;
        res.end('Страница не найдена');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен по адресу ${port}/`);
});
