import Koa from 'koa';
import helmet from 'koa-helmet';
import koaRouter from 'koa-router';

import { rootRouter } from './routes/root.routes';
import { statsRouter } from './routes/stats/stats.routes';

export const app = new Koa();

const api = koaRouter()
  .use('/', rootRouter.routes())
  .use('/stats', statsRouter.routes());

app
  .use(helmet())
  .use(api.routes())
  .use(api.allowedMethods());

app.listen(3000);
