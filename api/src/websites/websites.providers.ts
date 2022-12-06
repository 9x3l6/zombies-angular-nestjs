import { DataSource } from 'typeorm';
import { Website } from './website.entity';

export const websiteProviders = [
  {
    provide: 'WEBSITE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Website),
    inject: ['DATA_SOURCE'],
  },
];