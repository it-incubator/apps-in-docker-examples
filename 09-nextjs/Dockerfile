# Dockerfile

FROM node:20

# Устанавливаем pnpm глобально
RUN npm install -g pnpm

WORKDIR /app

# Копируем файлы зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Открываем порт приложения
EXPOSE 3000

# Запускаем приложение
CMD ["pnpm", "dev"]
