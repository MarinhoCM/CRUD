import { config } from 'dotenv';
import { enum as zEnum, object as zObject, string as zString } from 'zod';
import * as process from 'process';

class Env {
  constructor() {
    switch (process.env.NODE_ENV) {
      case 'PRD':
        break;
      default:
        console.log('Carregando variáveis de ambiente de .env');
        config({ path: '.env' });
    }
  }

  private _envSchema = zObject({
    NODE_ENV: zEnum(['DEV', 'PRD', 'TEST', 'HOM']).default('DEV'),
    MONGO_USERNAME: zString(),
    MONGO_PASSWORD: zString(),
    MONGO_SERVER: zString(),
    MONGO_PORT: zString(),
    MONGO_DATABASE: zString(),
    SRV_PORT: zString()
  });

  private get _env() {
    return this._envSchema.safeParse(process.env);
  }

  static getInstance(): Env {
    if (!Env.instance) Env.instance = new Env();
    return Env.instance;
  }

  private static instance: Env = null;

  get env() {
    const env = Env.getInstance()._env;
    return env.success === true ? env.data : null;
  }
}

export const env = Env.getInstance().env;