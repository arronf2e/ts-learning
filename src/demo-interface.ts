// interface Student {
//   name: string;
//   age: number;
//   address: string;
//   sayName(): string;
// }

// const xiaoming: Student = {
//   name: 'xiaoming',
//   age: 20,
//   address: 'shanghai',
//   sayName: () => 'good'
// }

// console.log(xiaoming);

// 可选属性
// interface Student {
//   name: string;
//   age?: number;
//   eat(): void;
// }

// const xiaoming: Student = {
//   name: 'xiaoming',
//   eat: () => {}
// }

// 只读属性
// interface Student {
//   name: string;
//   readonly age: number;
// }
// const xiaoming: Student = {
//   name: 'xiaoming',
//   age: 20
// }
// xiaoming.age = 30

// 任意属性
// interface Student {
//   name: string;
//   age: number;
//   [propName: string]: string | number;
// }

// const xiaoming: Student = {
//   name: 'xiaoming',
//   age: 20,
//   sex: 'male'
// }

// 函数类型
// interface CompareFunc {
//   (source: string, target: string): boolean;
// }

// let myCompare: CompareFunc;

// myCompare = function(source: string, target: string): boolean {
//   return source === target
// }

// myCompare('1', '2')

// 可索引的类型
// interface NameArray {
//   [index: number]: string;
// }

// let names: NameArray = ['a', 'b', 'c']
// console.log(names[1]);

// 接口继承
interface Animal {
  age: number;
}

interface Dog extends Animal {
  color: string;
  makeSound(): void;
}
const ahuang: Dog = {
  age: 1,
  color: 'red',
  makeSound() {}
}
const gouzi = <Dog>{}
gouzi.age = 3
gouzi.color = 'white'
gouzi.makeSound = () => {}




