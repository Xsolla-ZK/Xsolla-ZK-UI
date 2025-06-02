# Build stage
FROM node:20-alpine AS deps

# Install pnpm
RUN npm install -g pnpm@10.3.0

WORKDIR /app

# Copy workspace configuration
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml .npmrc ./

# Copy root configuration files
COPY tsconfig.json eslint.config.mjs prettier.config.mjs ./

# Copy package.json for all packages to resolve dependencies
COPY packages/ ./packages/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN npm install -g pnpm@10.3.0

WORKDIR /app

# Copy from deps stage
COPY --from=deps /app ./

# First build workspace packages (config, icons, react)
RUN pnpm --filter @xsolla-zk/config build
RUN pnpm --filter @xsolla-zk/icons build
RUN pnpm --filter @xsolla-zk/react build

# Now build documentation
RUN pnpm --filter @xsolla-zk/docs build

# Runtime stage with minimal size
FROM node:20-alpine AS runner

WORKDIR /srv/ui-kit

# Install only minimal dependencies and clean up in single layer
RUN apk add --no-cache tini && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    rm -rf /var/cache/apk/*

# Copy only standalone build
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/.next/static ./packages/docs/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/packages/docs/public ./packages/docs/public

USER nextjs

EXPOSE 3003

# Use tini for proper signal handling
ENTRYPOINT ["tini", "--"]
CMD ["node", "packages/docs/server.js"]
