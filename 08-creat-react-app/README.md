- create image

```bash
docker build -t it-incubator-cra .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3000:80 --name it-incubator-cra-container it-incubator-cra
```

