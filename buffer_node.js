var buf = new Buffer.alloc(10);
var buf2 = new Buffer.from([10,20,30,59]);
var buf3 = new Buffer.from('Study JS', 'utf-8')
var buf5 = new Buffer.from(" is not complicated")
var buf6 = Buffer.concat([buf3,buf5])

var buf4 = buf3.toJSON(buf3)


console.log(buf2.toString("hex"))
console.log(buf3.toString())

console.log(buf3.length)
console.log(buf4)

console.log(buf6 + " = " + buf3 + " +" +buf5)
