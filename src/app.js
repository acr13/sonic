import Koa from 'koa';
import helmet from 'koa-helmet';
import koaRouter from 'koa-router';
import mongo from 'koa-mongo';

import { rootRouter } from './routes/root.routes';
import { statsRouter } from './routes/stats/stats.routes';

export const app = new Koa();

const api = koaRouter()
  .use('/', rootRouter.routes())
  .use('/stats', statsRouter.routes());

app
  .use(helmet())
  .use(mongo({
    host: 'localhost',
    port: 27017,
    // user: 'admin',
    // pass: '123456',
    db: 'sonic',
    // max: 100,
    // min: 1,
  }))
  .use(api.routes())
  .use(api.allowedMethods());

app.listen(3000);
