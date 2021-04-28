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

let ud: undefined = undefined
let ud1: void = undefined
let ud2: void = null

// let number: any = 'six'
// number = 6

// let number = 7
// number = 'seven'

enum Days {
    Mon = 1,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun = 10
}

console.log(Days.Mon);
console.log(Days[10]);

enum Colors {
    red = 'red',
    green = 'green',
    blue = 'blue'
}
console.log(Colors.blue)

declare enum Colorss {
    red = 'red',
    green = 'green',
    blue = 'blue'
}

// var be = Colorss.blue
// console.log(be)

enum Gender {
    Female = 'female',
    Male = 0,
    others
}
console.log(Gender.others);


enum Gender2 {
    others,
    Female = 'female',
    Male = 1
}
console.log(Gender2.others);  // 0


const enum Fruits {
    banana,
    apple
}
console.log(Fruits.apple);


