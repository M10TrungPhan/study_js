var events = require('events')

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('Tạo kết nối thành công');
    eventEmitter.emit('data_received')
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log('Du lieu duoc tiep nhan thanh cong.');
});

eventEmitter.emit('data_received')
eventEmitter.emit('connection');

console.log('Ket thuc chuong trinh.')

