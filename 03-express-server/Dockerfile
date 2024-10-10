# Используем официальный образ Node.js
FROM node:20.9.0

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json
COPY package.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY src ./src

# Открываем порт
EXPOSE 3010

# Запускаем приложение
CMD [ "npm", "start" ]
