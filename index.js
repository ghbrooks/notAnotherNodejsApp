// RUNTIME

// console.log("Hello George!");

// global.luckyNum = '23';

// console.log(global.luckyNum);

// console.log(process.platform);

// console.log(process.env);

// console.log(process.env.USER);

// EVENTS

// process.on('exit', function () {
//     // do something!
// });

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('hiya', () => {
//     console.log('Hello to you, good Sir!')
// });

// eventEmitter.emit('hiya');

// FILESYSTEM

// const { readFile, readFileSync } = require('fs'); //blocking

// const txt = readFileSync('./hello.txt', 'utf8');

// // non blocking callback version
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// })

// // non blocking promise version

// const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }

// console.log(hello)
// console.log(txt)
// console.log('do this ASAP')

// MODULES - nothing more than js file that exports it code

// const myModule = require('./dat-module');

// console.log(myModule)

// NPM AND PACKAGES

const express = require('express');

const app = express()

// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if (err) {
//             response.status(500).send('sorry, it ent working!');
//         }
//         response.send(html);
//     })
// });

const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8'));
})

app.listen(process.env.PORT || 3030, () => console.log('App availble on http://localhost:3030'));

