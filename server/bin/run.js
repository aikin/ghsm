import 'babel-register';
import 'babel-polyfill';

import app from '../index';

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`listening on port ${port}`);


// require("babel-register");
// require('babel-polyfill');
// require('../index.js').default.listen(3000);

