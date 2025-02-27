FROM node:20-alpine AS base
RUN npm install -g pnpm@10.3.0

FROM base AS builder
WORKDIR /app

COPY . .

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store pnpm install --ignore-scripts --frozen-lockfile

RUN pnpm build:storybook:react
# RUN pnpm build:storybook:vue

FROM builder AS final
WORKDIR /srv/ui-kit

COPY --from=builder /app/server/storybook ./
COPY --from=builder /app/storybook-build/react ./react
# COPY --from=builder /app/storybook-build/vue ./vue

RUN pnpm install

EXPOSE 3003

CMD ["node", "server.js"]
