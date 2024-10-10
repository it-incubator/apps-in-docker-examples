- create image

```bash
docker build -t it-incubator-express-app-image .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3011:3010 --name it-incubator-express-container it-incubator-express-app-image
```

```bash
 docker run --rm -it  it-incubator-express-app-image  ls -R /usr/src/app/src  
```