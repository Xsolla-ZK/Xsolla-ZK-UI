FROM node:20-alpine AS base
RUN npm install -g pnpm@10.3.0

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/docs/package.json ./packages/docs/
COPY packages/config/package.json ./packages/config/
COPY packages/icons/package.json ./packages/icons/
COPY packages/react/package.json ./packages/react/
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages/docs/node_modules ./packages/docs/node_modules
RUN pnpm build:docs

# Финальный образ с минимальным размером
FROM node:20-alpine AS runner
WORKDIR /srv/ui-kit

# Создаем пользователя без прав root для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимые файлы для standalone сборки
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/.next/static ./packages/docs/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/public ./packages/docs/public

USER nextjs

EXPOSE 3003

ENV PORT 3003
ENV HOSTNAME "0.0.0.0"

CMD ["node", "packages/docs/server.js"]
