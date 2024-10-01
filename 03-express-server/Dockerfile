# Используем официальный образ Node.js
FROM node:latest

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Открываем порт
EXPOSE 3010

# Запускаем приложение
CMD [ "npm", "start" ]
