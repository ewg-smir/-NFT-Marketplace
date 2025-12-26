# NFT Marketplace Test Assignment

Адаптивная верстка лендинга NFT маркетплейса с использованием Next.js, Redux Toolkit и Framer Motion.

## Технологии

- **Framework:** Next.js 14 (App Router)
- **State:** Redux Toolkit
- **Styles:** SCSS (Glassmorphism design)
- **Animations:** Framer Motion
- **API:** CoinGecko Public API

## Запуск проекта локально

1. Установите зависимости:
   npm install

2. Запустите сервер разработки:
npm run dev

3. Откройте приложение в браузере: http://localhost:3000

## Запуск через Docker
Проект полностью контейнеризирован. Для запуска выполните следующие команды в корне проекта:

1. Соберите Docker-образ:
docker build -t nft-marketplace .

2. Запустите контейнер:
docker run -p 3000:3000 nft-marketplace
Приложение будет доступно по адресу http://localhost:3000.

## Особенности реализации
1. Верстка полностью адаптивна под Desktop, Tablet и Mobile устройства.

2. Реализован кастомный слайдер на Framer Motion с поддержкой свайпов (drag-gestures) и инерции.

## Данные:

-Названия NFT подтягиваются из CoinGecko API.

-Цены и время окончания аукциона генерируются на клиенте (Mock data).

-Изображения берутся из локальных ассетов для стабильности отображения.

-Настроен Dockerfile с использованием standalone режима Next.js для уменьшения размера итогового образа.
