FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

FROM base AS builder
WORKDIR /app

COPY . .

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store pnpm install --ignore-scripts --frozen-lockfile

RUN pnpm build:storybook:react
RUN pnpm build:storybook:vue

FROM builder AS final
COPY --from=builder /app/storybook-build/react /srv/ui-kit/react

# WORKDIR /srv/ui-kit/

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
