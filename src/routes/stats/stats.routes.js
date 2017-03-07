import koaRouter from 'koa-router';
import { root, players } from './stats.controller';

/**
 * Root routes: just return the API name.
 */
export const statsRouter = koaRouter()
  .get('/', root)
  .get('/players', players);
