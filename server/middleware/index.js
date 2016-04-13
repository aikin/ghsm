'use strict';

import compose from 'koa-compose'
import convert from 'koa-convert';
import helmet from 'koa-helmet';
import cors from 'koa-cors';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';

export default function middleware() {
  return compose([
    helmet(),
    logger(),
    convert(cors()),
    convert(bodyParser()),
    convert(session())
  ]);
}

