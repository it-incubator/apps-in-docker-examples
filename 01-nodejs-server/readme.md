- create image

```bash
docker build -t it-incubator-nodejs-server .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3010:3000 --name it-incubator-nodejs-container it-incubator-nodejs-server
```
```bash
docker run -d -p 3011:3000 --name it-incubator-nodejs-container2 it-incubator-nodejs-server
```
```bash
docker rm -f it-incubator-nodejs-container
```

