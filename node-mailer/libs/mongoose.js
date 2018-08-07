/**
 * this file must be required at lease once.
 * after it's done, one can use require('mongoose')
 *
 * in web-app: ctx is done at init phase
 * in tests: in mocha.opts
 * in gulpfile: in beginning
 */

const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = Promise;

if (process.env.MONGOOSE_DEBUG) {
    mongoose.set('debug', true);
}

mongoose.connect(config.mongoose.url, config.mongoose.options);

modules.exports = mongoose;
