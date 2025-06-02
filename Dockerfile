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

# Set production mode for standalone build
ENV NODE_ENV=production

# Generate tokens and icons before building
RUN pnpm generate:all

# Build all workspace packages first
RUN pnpm build

# Then build the documentation
RUN pnpm build:docs

# Final image with minimal size
FROM node:20-alpine AS runner
WORKDIR /srv/ui-kit

# Create a user without root privileges for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only necessary files for standalone build
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/.next/static ./packages/docs/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/public ./packages/docs/public

USER nextjs

EXPOSE 3003

CMD ["node", "packages/docs/server.js"]
