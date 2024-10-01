- create image

```bash
docker build -t it-incubator-express-ts-app .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3000:3000 --name it-incubator-express-ts-container it-incubator-express-ts-app
```

