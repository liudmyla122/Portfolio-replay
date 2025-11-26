# Portfolio replay

В этом каталоге находится проект **Re-play** (React + Vite) и собранный сайт, готовый к публикации.

## Структура
- `re-play/` — исходники проекта. Установите зависимости и запускайте через `npm run dev` или `npm run build`.
- `docs/` — результат `npm run build`, сконфигурированный под GitHub Pages (`https://liudmyla122.github.io/Portfolio-replay/`).

## Как работать с проектом
```bash
cd re-play
npm install
npm run dev      # запуск локального сервера
npm run build    # сборка в папку dist
```
Затем собранное содержимое можно копировать обратно в корневую `docs/` для публикации.

## Публикация
1. Соберите сайт: `npm run build`.
2. Скопируйте `re-play/dist` в корневую `docs/`.
3. На GitHub включите Pages с источником `main / docs`.
4. Готовый URL: `https://liudmyla122.github.io/Portfolio-replay/`.
