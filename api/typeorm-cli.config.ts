import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'zombies',
  password: process.env.DATABASE_PASSWORD || 'zombies123',
  database: process.env.DATABASE_NAME || 'zombies',
  entities: [__dirname + '/**/*.entity.js'],
  migrations: [__dirname + '/src/migrations/*.js'],
});
