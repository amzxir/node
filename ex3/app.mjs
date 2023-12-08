import myModule from './module.cjs';

const log = console.log;

log(myModule.next());
log(myModule.next());
log(myModule.next());
log(myModule.prev());
log(myModule.square());