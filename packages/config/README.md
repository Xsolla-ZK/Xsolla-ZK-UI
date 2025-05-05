# @xsolla-zk/config

Пакет содержит конфигурацию Tamagui для приложений Xsolla ZK UI, включая темы, токены, анимации и другие настройки стилей. Поддерживает различные платформы (web, iOS, Android) и предоставляет типизированный доступ к дизайн-системе.

## Установка

Перед установкой необходимо настроить доступ к GitHub npm registry:

1. Создайте персональный токен доступа (Personal Access Token) с правами `read:packages` на GitHub:
   - Перейдите в Settings → Developer settings → Personal access tokens
   - Создайте новый токен с правами `read:packages`
   - Сохраните токен в переменную окружения `GITHUB_TOKEN`
   - `GITHUB_TOKEN` так же будет использоваться для доступа к репозиторию с дизайн-токенами

2. Создайте или обновите файл `.npmrc` в корне вашего проекта:
```
@xsolla-zk:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

3. Установите пакет одним из следующих способов:

```bash
# Используя npm
npm install @xsolla-zk/config

# Используя pnpm
pnpm install @xsolla-zk/config

# Используя yarn
yarn add @xsolla-zk/config
```

## Использование

### Базовая конфигурация

```tsx
import { createTamagui } from '@tamagui/core';
import { webConfig } from '@xsolla-zk/config/web';
// или для мобильных платформ:
// import { iosConfig } from '@xsolla-zk/config/ios';
// import { androidConfig } from '@xsolla-zk/config/android';

export const config = createTamagui(webConfig);

// Для правильной типизации
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends typeof config {}
}
```

### Доступные конфигурации

Пакет экспортирует три основные конфигурации для разных платформ:

- `webConfig` - конфигурация для веб-приложений
- `iosConfig` - конфигурация для iOS приложений
- `androidConfig` - конфигурация для Android приложений

### Структура конфигурации

Каждая конфигурация включает:

1. **Темы**
   - Светлая и темная темы
   - Цветовые токены для различных состояний
   - Семантические цвета (brand, content, background и т.д.)

2. **Типографика**
   - Шрифты (Onest)
   - Размеры текста (от 150 до 900)
   - Высота строк
   - Жирность шрифта

3. **Размеры и отступы**
   - Размеры компонентов (size)
   - Отступы (space)
   - Радиусы скругления (radius)
   - Толщина обводки (stroke)

4. **Анимации**
   - Предустановленные анимации для состояний
   - Функции плавности (easing functions)

5. **Медиа-запросы**
   - Брейкпоинты для адаптивного дизайна
   - Специфичные настройки для разных платформ

### Утилиты

```tsx
import { styled, Text } from '@tamagui/core';
import { getTypographyPreset } from '@xsolla-zk/config';

const TextComponent = styled(
  Text,
  {
    name: 'SemanticText',
    // Получение предустановленных стилей типографики
    ...getTypographyPreset('display.500.accent'),
  }
);
```

### Сокращения (Shorthands)

Пакет включает набор сокращений для часто используемых свойств:

```tsx
{
  m: 'margin',
  p: 'padding',
  bg: 'backgroundColor',
  rounded: 'borderRadius',
  // и другие...
}
```

## Генерация токенов

Токены генерируются автоматически из дизайн-системы с помощью пакета `@xsolla-zk/tokens`:

```bash
# Генерация новых токенов
pnpm generate
```

## Структура пакета

```
src/
├── tokens/         # Сгенерированные токены
│   ├── fonts.ts    # Настройки шрифтов
│   ├── media/      # Медиа-запросы для разных платформ
│   ├── themes.ts   # Темы (светлая/темная)
│   └── tokens.ts   # Основные токены
├── web.ts         # Конфигурация для веб
├── ios.ts         # Конфигурация для iOS
├── android.ts     # Конфигурация для Android
└── shared.ts      # Общие настройки
```
