'use strict';

const EventEmitter = require('events');

const Logger = require('./2-logger');
const logger = new Logger();

//Register listener
logger.on('messageLogged', (arg) => console.log('Listener called!', arg));

logger.log('Merry Christmas!');