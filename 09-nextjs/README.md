- create image

```bash
docker build -t it-incubator-next .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3000:3000 --name it-incubator-next-container it-incubator-next
```

