// var fs = require("fs");

// var data = fs.readFileSync("/Users/libaige/Desktop/libaige.txt");

// console.log(data.toString());


// var fs = require("fs");

// fs.readFile('/Users/libaige/Desktop/libaige.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// });

'use strict';

console.log('程序执行开始!');

const events = require('events');

let eventEmitter = new events.EventEmitter();

let connectHandlder = function connected() {

  console.log(' success ');

  eventEmitter.emit('xutian');
};

eventEmitter.on('libaige', connectHandlder);

eventEmitter.on('xutian', function() {
  console.log('chufa le zhege shijian');
});


eventEmitter.emit('libaige');

console.log(' xutian he libaige dou zhxingle');






















