# 🔥 ккакие строик переставить, чтобы кеширование лучше работало?
# Используем официальный образ Node.js LTS
FROM node:20

# Устанавливаем pnpm
RUN npm install -g pnpm

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем файлы зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Собираем приложение
#RUN pnpm build

# Открываем порт приложения
EXPOSE 3000

# Запускаем приложение
CMD [ "pnpm", "start:dev" ]
