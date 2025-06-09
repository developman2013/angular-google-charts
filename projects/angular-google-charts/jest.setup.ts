import { randomUUID } from 'crypto';

// Mock crypto.randomUUID for JSDom environment
Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: () => randomUUID()
  }
});
