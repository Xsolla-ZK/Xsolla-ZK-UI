# @xsolla-zk/tokens

Пакет для генерации дизайн-токенов из Figma Tokens Studio в различные форматы.

## Установка

Перед установкой необходимо настроить доступ к GitHub npm registry:

1. Создайте персональный токен доступа (Personal Access Token) с правами `read:packages` на GitHub:
   - Перейдите в Settings → Developer settings → Personal access tokens
   - Создайте новый токен с правами `read:packages`
   - Сохраните токен в переменную окружения `GITHUB_TOKEN`
   - `GITHUB_TOKEN` так же будет использоваться для доступа к приватным репозиториям с дизайн-токенами

2. Создайте или обновите файл `.npmrc` в корне вашего проекта:
```
@xsolla-zk:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

3. Установите пакет одним из следующих способов:

```bash
# Используя npm
npm install @xsolla-zk/tokens

# Используя pnpm
pnpm install @xsolla-zk/tokens

# Используя yarn
yarn add @xsolla-zk/tokens
```

## Использование

### Базовое использование

```bash
xzkui-tokens generate [опции]
```

### Опции

| Опция | Алиас | Описание | Тип | По умолчанию |
|-------|--------|-----------|------|--------------|
| `--output` | `-o` | Путь для выходных файлов | string | `./tokens` |
| `--type` | `-t` | Тип генерации (object, tamagui) | string | `object` |
| `--source` | `-s` | Источник токенов (local или URL Git-репозитория) | string | `local` |
| `--input` | `-i` | Путь к локальным токенам или имя ветки в репозитории | string | `main` |
| `--private` | `-p` | Флаг для работы с приватным репозиторием | boolean | `false` |

### Примеры

```bash
# Генерация токенов из локальной директории
xzkui-tokens generate --source local --input ./my-tokens

# Генерация токенов из публичного репозитория
xzkui-tokens generate --source https://github.com/org/design-tokens --input main

# Генерация токенов из приватного репозитория
xzkui-tokens generate --source https://github.com/org/private-tokens --private

# Генерация токенов в формате Tamagui
xzkui-tokens generate --type tamagui

# Указание пользовательской директории для выходных файлов
xzkui-tokens generate --output ./src/styles/tokens
```

## Форматы генерации

### Object
Генерирует токены в виде JavaScript-объектов. Это формат по умолчанию. Поддерживает:
- Цвета
- Размеры
- Отступы
- Тени
- Радиусы скругления
- Типографику
- Компонентные токены

### Tamagui
Специальный формат для использования с UI-фреймворком Tamagui. Генерирует:
- Файлы тем (цвета)
- Размеры
- Отступы
- Тени
- Радиусы скругления
- Типографические токены
- Компонентные токены
- Конфигурацию шрифтов и их вариаций
- Медиа-запросы для адаптивного дизайна

## Структура проекта

```
src/
├── build.mjs          # Основная логика сборки
├── tamagui/          # Трансформации для Tamagui
├── templates/        # Шаблоны для генерации файлов
└── utils/           # Вспомогательные функции
    ├── config.mjs   # Конфигурация форматов
    ├── files.mjs    # Работа с файлами
    ├── format.mjs   # Форматирование токенов
    ├── parser.mjs   # Парсинг токенов
    └── values.mjs   # Обработка значений
```

## Требования к Git URL

При использовании Git-репозитория в качестве источника токенов (`--source`), URL должен соответствовать формату:
- HTTPS: `https://github.com/org/repo` или `https://github.com/org/repo.git`

Окончание `.git` будет добавлено автоматически, если отсутствует.

## Переменные окружения

| Переменная | Описание | Обязательная |
|------------|----------|--------------|
| `GITHUB_TOKEN` | Токен для доступа к приватным репозиториям | Только для приватных репозиториев |
