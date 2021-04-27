let arr: number[] = [1,2,3,4]
let arr2:Array<number> = [1,2,3,4]
let arr3 = new Array<number>(4)

interface NumberArray {
    [index: number]: number
}
let arr4: NumberArray = [1,2,3]

let arron: [string, number, boolean] = ['arron', 28, true]

console.log(arron[1])