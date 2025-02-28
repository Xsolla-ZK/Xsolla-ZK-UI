# @xsolla-zk-ui/icons-generator

CLI пакет для генерации React Native компонентов иконок из SVG файлов. Пакет преобразует SVG файлы в React Native компоненты, оптимизированные для использования в приложениях Xsolla ZK UI.

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

3. Установите пакет одним из следующих способов:

```bash
# Используя npm
npm install @xsolla-zk-ui/icons-generator

# Используя pnpm
pnpm install @xsolla-zk-ui/icons-generator

# Используя yarn
yarn add @xsolla-zk-ui/icons-generator
```

## Использование

### Командная строка

Пакет предоставляет CLI команду `xzkui-icons` для генерации иконок:

```bash
# Базовое использование
xzkui-icons generate --input <путь_к_svg_файлам> --output <путь_для_сохранения>

# Сокращенный вариант
xzkui-icons gen -i <путь_к_svg_файлам> -o <путь_для_сохранения>
```

### Параметры команды

| Параметр | Сокращение | Описание | Обязательный |
|----------|------------|----------|--------------|
| `--input` | `-i` | Директория с SVG файлами | Да |
| `--output` | `-o` | Директория для сохранения сгенерированных компонентов | Да |

### Использование в package.json

Вы можете добавить скрипт в ваш `package.json` для удобного запуска генератора:

```json
{
  "scripts": {
    "generate-icons": "xzkui-icons generate --input ./assets/icons --output ./src/components/icons"
  }
}
```

## Особенности генерации

Генератор выполняет следующие преобразования SVG файлов:

1. **Оптимизация SVG** с помощью SVGO:
   - Удаление лишних атрибутов (class, data-name, id, style)
   - Преобразование цветов в currentColor
   - Удаление размеров и XML-пространств имен
   - Установка стандартных размеров (24x24)

2. **Преобразование в React Native компоненты**:
   - Замена SVG тегов на компоненты из react-native-svg
   - Добавление поддержки props для изменения цвета и размера
   - Создание мемоизированных компонентов с поддержкой темизации

3. **Генерация индексного файла** для удобного импорта всех иконок

## Структура сгенерированных файлов

После выполнения команды генератор создаст:

1. Директорию с компонентами иконок (каждая иконка в отдельном файле)
2. Индексный файл (`index.ts`) для экспорта всех иконок

## Использование сгенерированных иконок

```tsx
import { IconName } from 'your-output-path-to-icons';

function MyComponent() {
  return (
    <IconName
      size={16} // number | SizeTokens | undefined
      color="red" // GetThemeValueForKey<"color"> | undefined
    />
  );
}
```

## Требования к SVG файлам

Для наилучших результатов SVG файлы должны:

1. Иметь размер 24x24 пикселя
2. Использовать атрибуты `fill="black"` или `stroke="black"` для элементов, цвет которых должен меняться
3. Иметь уникальные имена файлов в формате kebab-case (они будут преобразованы в PascalCase для имен компонентов)
