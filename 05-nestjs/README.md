- create image

```bash
docker build -t it-incubator-nest-app .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3003:3000 --name it-incubator-nest-container it-incubator-nest-app
```

