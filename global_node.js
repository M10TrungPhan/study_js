// GLOBAL 

console.log(__filename)
console.log(__dirname)

function printHello(){
    console.log("Hello World")
}
t = setTimeout(printHello,1000)
console.log(process.argv)
// clearTimeout(t)