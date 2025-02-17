# XSolla-ZK UI-Kit
---------------------

A comprehensive design system and UI component library that provides:

- **Design Tokens**: Centralized design variables (colors, typography, spacing, etc.)
- **Core Components**: A collection of reusable React components built with Tamagui
- **Documentation**: Interactive Storybook with component examples and guidelines
- **Theme Support**: Built-in light/dark modes and customizable themes
- **Type Safety**: Written in TypeScript for better development experience
- **Package Management**: Monorepo structure using pnpm workspaces

## Key Features
- 🎨 Consistent design language across applications
- 📦 Modular architecture for selective component usage
- 🔧 Easy customization and theming
- 📱 Cross-platform support (Web & React Native)
- 🚀 Performance optimized
- 💻 Developer-friendly with strong TypeScript support

Built and maintained by XSolla-ZK team to streamline UI development across projects.
---------------------
## Генерация компонентов

Для генерации компонентов используется [Hygen](https://www.hygen.io/).

Так генерируется новый компонент для `react`:
```
pnpm hygen react new --name <component-name>
```
Для `vue`:
```
pnpm hygen vue new --name <component-name>
```
Где `component-name` это имя нового компонента, и оно должно быть в **kebab-case**.
Генератор создаст файлы для компонента, стилей, тестов и сторибука.
---------------------
## Генерация иконок

Для генерации иконок используется [svgr](https://react-svgr.com/).

Исходники иконок хранятся в `raw-icons`

Так генерируются компоненты иконок для `react`:
```
pnpm icons:react
```
Сгенерированне компоненты иконок будут скомпилированны в `packages/react/src/components/svg-icons`