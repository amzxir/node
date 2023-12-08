import myModule from './module.cjs';
import { createRequire } from 'module';

const log = console.log;

const require = createRequire(import.meta.url);

const json = require('./data.json');

log(myModule.next());
log(myModule.next());
log(myModule.next());
log(myModule.prev());
log(myModule.square());


log(json)