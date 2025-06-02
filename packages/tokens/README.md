# @xsolla-zk/tokens

A powerful CLI package for generating design tokens from Figma Tokens Studio into various formats. This package transforms design tokens into TypeScript objects, Tamagui configurations, and other formats for seamless integration with the Xsolla ZK design system.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install @xsolla-zk/tokens

# Using pnpm
pnpm install @xsolla-zk/tokens

# Using yarn
yarn add @xsolla-zk/tokens
```

## Usage

### Basic Usage

```bash
xzkui-tokens generate [options]
```

### Command Options

| Option | Alias | Description | Type | Default |
|--------|-------|-------------|------|---------|
| `--output` | `-o` | Output directory for generated files | string | `./tokens` |
| `--type` | `-t` | Generation type (object, tamagui) | string | `object` |
| `--source` | `-s` | Token source (local or Git repository URL) | string | `local` |
| `--input` | `-i` | Path to local tokens or branch name in repository | string | `main` |
| `--private` | `-p` | Flag for working with private repositories | boolean | `false` |

### Examples

```bash
# Generate tokens from local directory
xzkui-tokens generate --source local --input ./my-tokens

# Generate tokens from public repository
xzkui-tokens generate --source https://github.com/org/design-tokens --input main

# Generate tokens from private repository
xzkui-tokens generate --source https://github.com/org/private-tokens --private

# Generate tokens in Tamagui format
xzkui-tokens generate --type tamagui

# Specify custom output directory
xzkui-tokens generate --output ./src/styles/tokens
```

## Generation Formats

### Object Format

The default format that generates tokens as JavaScript objects. Supports:

- **Colors** - Brand colors, semantic colors, state colors
- **Sizes** - Component dimensions, spacing values
- **Spacing** - Margins, paddings, gaps
- **Shadows** - Box shadows, text shadows
- **Borders** - Border radius, border widths
- **Typography** - Font families, sizes, weights, line heights
- **Component Tokens** - Button styles, input styles, etc.

Example output:

```typescript
export const colors = {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    900: '#0c4a6e',
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
};

export const spacing = {
  1: '4px',
  2: '8px',
  4: '16px',
  8: '32px',
};
```

### Tamagui Format

Specialized format for Tamagui framework integration. Generates:

- **Theme Files** - Light and dark color themes
- **Size Tokens** - Component sizing system
- **Space Tokens** - Spacing and layout values
- **Shadow Tokens** - Elevation and shadow effects
- **Border Tokens** - Radius and border configurations
- **Typography Tokens** - Complete typography system
- **Component Tokens** - Pre-styled component configurations
- **Font Configuration** - Font families and variations
- **Media Queries** - Responsive breakpoints

Example Tamagui output:

```typescript
export const themes = {
  light: {
    background: '#ffffff',
    surface: '#f8fafc',
    primary: '#0ea5e9',
    text: '#1e293b',
  },
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    primary: '#38bdf8',
    text: '#f1f5f9',
  },
};

export const tokens = {
  space: {
    1: 4,
    2: 8,
    4: 16,
    8: 32,
  },
  size: {
    1: 20,
    2: 24,
    4: 32,
    8: 64,
  },
};
```

## Advanced Configuration

### Local Token Generation

For local token files:

```bash
# Generate from local JSON files
xzkui-tokens generate --source local --input ./tokens --output ./src/design-system

# Generate with specific format
xzkui-tokens generate --source local --input ./tokens --type tamagui
```

### Git Repository Integration

For tokens stored in Git repositories:

```bash
# Public repository
xzkui-tokens generate \
  --source https://github.com/your-org/design-tokens \
  --input main \
  --output ./src/tokens

# Private repository (requires GITHUB_TOKEN)
xzkui-tokens generate \
  --source https://github.com/your-org/private-tokens \
  --input develop \
  --private \
  --output ./generated-tokens
```

### Integration with Package Scripts

Add token generation to your `package.json`:

```json
{
  "scripts": {
    "tokens:generate": "xzkui-tokens generate --type tamagui --output ./src/design-system",
    "tokens:local": "xzkui-tokens generate --source local --input ./design-tokens",
    "tokens:remote": "xzkui-tokens generate --source https://github.com/org/tokens --input main",
    "build": "npm run tokens:generate && next build"
  }
}
```

## Project Structure

```
src/
├── build.mjs          # Main build logic
├── tamagui/          # Tamagui-specific transformations
│   ├── themes.mjs    # Theme generation
│   ├── tokens.mjs    # Token transformation
│   └── fonts.mjs     # Font configuration
├── templates/        # File generation templates
│   ├── index.hbs     # Index file template
│   ├── theme.hbs     # Theme file template
│   └── tokens.hbs    # Token file template
└── utils/           # Utility functions
    ├── config.mjs   # Format configurations
    ├── files.mjs    # File system operations
    ├── format.mjs   # Token formatting
    ├── parser.mjs   # Token parsing
    └── values.mjs   # Value processing
```

## Token File Structure

Expected input token structure:

```json
{
  "global": {
    "colors": {
      "brand": {
        "primary": { "value": "#0ea5e9" },
        "secondary": { "value": "#64748b" }
      }
    },
    "spacing": {
      "xs": { "value": "4px" },
      "sm": { "value": "8px" },
      "md": { "value": "16px" }
    }
  },
  "light": {
    "colors": {
      "background": { "value": "#ffffff" },
      "text": { "value": "#1e293b" }
    }
  },
  "dark": {
    "colors": {
      "background": { "value": "#0f172a" },
      "text": { "value": "#f1f5f9" }
    }
  }
}
```

## Git URL Requirements

When using Git repositories as token sources:

- **HTTPS URLs**: `https://github.com/org/repo` or `https://github.com/org/repo.git`
- **SSH URLs**: Not currently supported
- **Automatic .git suffix**: Added automatically if missing

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_TOKEN` | Personal access token for private repositories | Only for private repos |

### Setting up GITHUB_TOKEN

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Create a new token with `repo` or `read:packages` permissions
3. Set the environment variable:

```bash
# In .env file
GITHUB_TOKEN=your_personal_access_token

# Or export in shell
export GITHUB_TOKEN=your_personal_access_token
```

## CI/CD Integration

Example GitHub Actions workflow:

```yaml
name: Generate Design Tokens

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  generate-tokens:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Generate tokens
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          npx xzkui-tokens generate \
            --source https://github.com/org/design-tokens \
            --type tamagui \
            --output ./src/design-system

      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add ./src/design-system
          git commit -m "Update design tokens" || exit 0
          git push
```

## Troubleshooting

### Common Issues

1. **Permission Denied**: Ensure GITHUB_TOKEN has correct permissions
2. **Invalid URL**: Check Git repository URL format
3. **Token Parsing Errors**: Verify JSON token file structure
4. **Output Directory**: Ensure output directory is writable

### Debug Mode

Enable verbose logging:

```bash
DEBUG=xzkui-tokens xzkui-tokens generate --source local --input ./tokens
```

## Development

To contribute or develop with this package:

```bash
# Clone the repository
git clone https://github.com/Xsolla-ZK/Xsolla-ZK-UI.git

# Install dependencies
pnpm install

# Navigate to tokens package
cd packages/tokens

# Run in development mode
pnpm dev

# Build the package
pnpm build

# Test locally
pnpm test
```

## License

This package is part of the Xsolla ZK UI design system and is licensed under the MIT License.
