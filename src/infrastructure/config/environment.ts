import { config } from 'dotenv';
import { cleanEnv, num, port, str } from 'envalid';

config();
config({
  path: '.env',
  override: true,
});

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'test', 'production'],
  }),
  PORT: port({
    desc: 'App port value',
    devDefault: 3000,
  }),
  ATSECRET: str({
    desc: 'Secret for access token',
    devDefault: 'superdupersecret',
  }),
  ATEXPIREIN: str({
    desc: 'Access token expiry time',
    devDefault: '1d',
  }),
  RTSECRET: str({
    desc: 'Secret for refresh token',
    devDefault: 'superdupersecret',
  }),
  RTEXPIREIN: str({
    desc: 'Refresh token expiry time',
    devDefault: '7d',
  }),
  PROD_URL: str({
    desc: 'Production URL',
    devDefault: '',
  }),
  SALT_OR_ROUNDS: num({
    desc: 'Salt rounds for hashing',
    devDefault: 10,
  }),
  AWS_S3_BUCKET: str({
    desc: 'AWS S3 bucket name',
    devDefault: '',
  }),
  ACCESS_KEY_ID: str({
    desc: 'AWS access key ID',
    devDefault: '',
  }),
  SECRET_ACCESS_KEY: str({
    desc: 'AWS secret access key',
    devDefault: '',
  }),
  ENDPOINT_URL: str({
    desc: 'AWS endpoint URL',
    devDefault: '',
  }),
  DATABASE_URL: str({
    desc: 'Database connection URL',
    devDefault: '',
  }),
  DB_HOST: str({
    desc: 'Database host',
    devDefault: '',
  }),
  DB_PORT: port({
    desc: 'Database port',
    devDefault: 5432,
  }),
  DB_USERNAME: str({
    desc: 'Database username',
    devDefault: '',
  }),
  DB_PASSWORD: str({
    desc: 'Database password',
    devDefault: '',
  }),
  DB_NAME: str({
    desc: 'Database name',
    devDefault: '',
  }),
  POSTGRES_USER: str({
    desc: 'Postgres user',
    devDefault: '',
  }),
  POSTGRES_PASSWORD: str({
    desc: 'Postgres password',
    devDefault: '',
  }),
  POSTGRES_DB: str({
    desc: 'Postgres database name',
    devDefault: '',
  }),
  PGADMIN_DEFAULT_EMAIL: str({
    desc: 'PgAdmin default email',
    devDefault: '',
  }),
  PGADMIN_DEFAULT_PASSWORD: str({
    desc: 'PgAdmin default password',
    devDefault: '',
  }),
  REDIS_HOST: str({
    desc: 'Redis host',
    devDefault: '',
  }),
  REDIS_PORT: port({
    desc: 'Redis port',
    devDefault: 6379,
  }),
});
