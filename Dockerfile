FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN npm install -g pnpm@9.15.0

RUN pnpm install --ignore-scripts

COPY . .

RUN pnpm build:storybook:react
RUN pnpm build:storybook:vue

FROM builder AS final

WORKDIR /srv/ui-kit/

COPY --from=builder /app/storybook-build/react react/
COPY --from=builder /app/storybook-build/vue vue/

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
