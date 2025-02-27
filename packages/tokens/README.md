# @xsolla-zk-ui/tokens

Пакет для генерации дизайн-токенов из Figma Tokens Studio в различные форматы.


## Установка

Перед установкой необходимо настроить доступ к GitHub npm registry:

1. Создайте персональный токен доступа (Personal Access Token) с правами `read:packages` на GitHub:
   - Перейдите в Settings → Developer settings → Personal access tokens
   - Создайте новый токен с правами `read:packages`
   - Сохраните токен в переменную окружения `GITHUB_TOKEN`
   - `GITHUB_TOKEN` так же будет использоваться для доступа к репозиторию с дизайн-токенами

2. Создайте или обновите файл `.npmrc` в корне вашего проекта:
```
@xsolla-zk-ui:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

1. Установите пакет одним из следующих способов:

```bash
# Используя npm
npm install @xsolla-zk-ui/tokens

# Используя pnpm
pnpm install @xsolla-zk-ui/tokens

# Используя yarn
yarn add @xsolla-zk-ui/tokens
```

## Использование

### Базовое использование

```bash
tokens generate [опции]
```

### Опции

| Опция | Алиас | Описание | Тип | По умолчанию |
|-------|--------|-----------|------|--------------|
| `--output` | `-o` | Путь для выходных файлов | string | `./tokens` |
| `--type` | `-t` | Тип генерации (object, tamagui) | string | `object` |
| `--input` | `-i` | Путь к локальным токенам или имя ветки в репозитории [Design-Tokens](https://github.com/Xsolla-ZK/Design-Tokens) | string | `main` | other-repo-branch |
| `--source` | `-s` | Источник токенов (local или repo) | string | `repo` |

### Примеры

```bash
# Генерация токенов из репозитория (ветка main)
tokens generate

# Генерация токенов из определенной ветки репозитория
tokens generate --input feature/new-tokens

# Генерация токенов из локальной директории
tokens generate --source local --input ./my-tokens

# Генерация токенов в формате Tamagui
tokens generate --type tamagui

# Указание пользовательской директории для выходных файлов
tokens generate --output ./src/styles/tokens
```

## Форматы генерации

### Object
Генерирует токены в виде JavaScript-объектов. Это формат по умолчанию.

### Tamagui
Специальный формат для использования с UI-фреймворком Tamagui. Генерирует:
- Файлы тем
- Типографические пресеты
- Шрифты и их вариации

## Структура выходных файлов

```
tokens/
├── common/           # Общие токены
├── themes/           # Файлы тем
├── fonts.js         # Конфигурация шрифтов
└── presets.ts       # Типографические пресеты
```

### Структура проекта

```
src/
├── build.mjs        # Основная логика сборки
├── typography.mjs   # Трансформация типографических токенов
├── templates/       # Шаблоны для генерации файлов
└── utils/          # Вспомогательные функции
```
