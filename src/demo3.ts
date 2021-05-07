/**
 * get two number sum
 * @param {number} x - The title of the book.
 * @param {number} x - The author of the book.
 */
function sum(x: number, y: number): number {
    return x + y
}

sum(1, 2)

let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
}

// 默认参数
function sayName(firstName: string, lastName: string = 'hao'): string {
    return firstName + lastName
}
let result = sayName('zhang', 'jie')

console.log(result)

// 剩余参数
function testRest(a: number, ...rest: number[]): void {
    console.log(a, 'a')
    rest.forEach(item => {
        console.log(item, 'item')
    })
}

testRest(0,1,23,5)

// 可选参数

function getName(firstName: string, lastName?:string) {
    console.log(firstName + lastName)
}
getName('zhang', 'hao')
getName('zhang')