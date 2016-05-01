import Koa from 'koa';
import middleware from './middleware';
import api from './api';

const app = new Koa();

app.keys = ['ghsm secret'];

app
  .use(middleware())
  .use(api())
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      err.status = err.statusCode || err.status || 500;
      throw err;
    }
  });

export default app;
