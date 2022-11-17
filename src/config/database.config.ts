import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const devConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '2222',
  database: 'project1',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
