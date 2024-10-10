- create image

```bash
docker build -t my-nginx-image .
```

- Запустите Docker-контейнер
```bash
docker run -d -p 3014:80 --name my-nginx-container my-nginx-image
```

> -d запускает контейнер в фоновом режиме. 

> -p 8080:80 перенаправляет порт 80 внутри контейнера на порт 8080 вашего компьютера.

> --name my-nginx-container задает имя контейнеру для удобства управления.

- Чтобы остановить контейнер, выполните:
```bash
docker stop my-nginx-container
```
- Для удаления контейнера:
```bash
docker rm my-nginx-container
```