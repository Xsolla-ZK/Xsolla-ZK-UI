import { spawn } from 'child_process';
import { resolve } from 'path';
import dotenv from 'dotenv';

const packageName = process.argv[2];
const scriptName = process.argv[3];
const args = process.argv.slice(4);

if (!packageName || !scriptName) {
  console.error('Usage: node scripts/root-exec.mjs <package> <script> <args>');
  process.exit(1);
}

const rootDir = process.cwd();

dotenv.config({ path: resolve(rootDir, '.env.local') });

const child = spawn('pnpm', ['--filter', `@xsolla-zk-ui/${packageName}`, scriptName, ...args], {
  env: {
    ...process.env,
    XSOLLA_ZK_UI_TOKENS_ROOT_DIR: rootDir,
  },
  stdio: 'inherit',
  shell: true,
});

child.on('close', (code) => {
  process.exit(code);
});
