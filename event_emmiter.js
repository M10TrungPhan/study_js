var events = require('events')
var eventEmitter = new events.EventEmitter()

var listener_1 = function listener_1 (){
    console.log('Listener 1 executed')
};

var listener_2 = function listener_2 (){
    console.log('Listener 2 executed')
};

eventEmitter.addListener('connection', listener_1)
eventEmitter.addListener('connection', listener_2)

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection')

console.log(eventListeners + ' Event Listener is listening')

eventEmitter.emit('connection')

eventEmitter.removeListener('connection', listener_1);
console.log("Bay gio, Listner1 se khong lang nghe.");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Event Listner dang lang nghe su kien connection");   

console.log("Ket thuc chuong trinh.");