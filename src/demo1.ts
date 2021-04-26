let isDone = true
console.log(isDone);

let age: number = 23;
// 十六进制
let hexLiteral: number = 0xf00d
// 二进制
let binaryLiteral: number = 0b1010
// 八进制
let octalLiteral: number = 0o744
let notAnumber: number = NaN
let infinityNumber: number = Infinity

let helloWorld: string = 'Hello World'
let myName: string = 'zhanghao'
let helloMyName: string = `${helloWorld}:${myName}`

// 空值 void 表示没有任何返回值的函数：

function sayHello(): void {
    console.log('hello world')
}