function sam() {

    console.log("Sample Module");
    const os = require('os');
    const fs = require('fs');
    var totalMemory = os.totalmem;
    var freeMomory = os.freemem;
    const files = fs.readdirSync('../sample');
    fs.readdir('./', function(){})
    console.log(`Total Memory: ${totalMemory}`);
    console.log(`Free Memory: ${freeMomory}`);
    console.log(files);

}

module.exports = sam;



// var url ="https://my-blog.com.au"

// function log(message){
//     console.log(message);
// }

// module.exports = log;