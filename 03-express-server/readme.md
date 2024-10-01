- create image

```bash
docker build -t it-incubator-express-app .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3011:3010 --name it-incubator-express-container it-incubator-express-app
```

