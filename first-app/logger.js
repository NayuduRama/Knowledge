var url ="https://my-blog.com.au"
const EventEmitters = require('events');

class Logger extends EventEmitters {

     log(message){
        console.log(message);
        this.emit('MessageLogged', {id:1, url:`${url}`});;

    }

}

module.exports = Logger;