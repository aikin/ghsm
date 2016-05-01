export default (router) => {
  router
    .get('/init', (ctx, next) => {
      ctx.status = 200;
    });
};
