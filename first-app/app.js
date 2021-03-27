 
// const sm = require('./sample');
// const log = require('./logger');
// log('message');
// sm();

const EventEmitters = require('events');

const Logger = required('./logger')
const logger = new Logger();


  
//Register a listener 
logger.on('MessageLogged', (args) => {
    console.log('Listener called', args);
});
 
logger.log('message');



