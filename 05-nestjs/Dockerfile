# 🔥 ккакие строик переставить, чтобы кеширование лучше работало?
# Используем официальный образ Node.js LTS
FROM node:lts

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем файлы зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем pnpm
RUN npm install -g pnpm

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Копируем исходный код
COPY . .

# Собираем приложение
RUN pnpm build

# Открываем порт приложения
EXPOSE 3000

# Запускаем приложение
CMD [ "node", "dist/main.js" ]
