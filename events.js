const { EventEmitter } = require('events');

const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
}

// // TODO 2
const myEventEmitter = new EventEmitter();


myEventEmitter.on('birthday', birthdayEventListener);
myEventEmitter.emit('birthday', {name: 'Nur Khairiyah'});

// const { EventEmitter } = require('events');

// const birthdayEventListener = (name) => {
//   console.log(`Happy birthday ${name}!`);
// }

// const myEmitter = new EventEmitter();

// myEmitter.on('birthday', birthdayEventListener);

// myEmitter.emit('birthday', 'Dimas');
// TODO 3

// TODO 4

//   TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
//   TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
//   TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.

//   TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.