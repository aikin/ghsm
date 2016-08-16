'use strict';

import importDir from 'import-dir';
import supertest from 'supertest-as-promised';
import app from '../../index';


const routes = importDir('./routes');
const request = supertest.agent(app.listen());

describe('routes', () => {
  Object.keys(routes).forEach(name => routes[name](request));
});

