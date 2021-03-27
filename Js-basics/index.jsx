 import moment from './node_modules/moment-timezone';
 console.log('Hello World!');
 let person = {
     name:"rama",
     id:45
 };
 person.id
 console.log(person.name);
 var a = moment.tz("2013-11-18 11:55", "Asia/Taipei");
var b = moment.tz("2013-11-18 11:55", "America/Toronto");

a.format(); // 2013-11-18T11:55:00+08:00
b.format(); // 2013-11-18T11:55:00-05:00

a.utc().format(); // 2013-11-18T03:55Z
b.utc().format(); // 2013-11-18T16:55Z

