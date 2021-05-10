// class Person {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   sayName() {
//     console.log(this.name)
//   }
// }

// class Student extends Person {
//   name: string
//   constructor(name) {
//     super(name)
//   }
//   sing() {
//     console.log(`${this.name} singing now!`)
//   }
// }

// const p = new Student('Steven')

// console.log(p.name)

// p.sing()

// 访问修饰符
// class Person {
//   public name: string
//   public constructor(name: string) {
//     this.name = name
//   }
//   public sayName() {
//     console.log(this.name)
//   }
// }

// const p = new Person('Steven')
// p.sayName()

// class Person {
//   protected name: string
//   public constructor(name: string) {
//     this.name = name
//   }
//   public sayName() {
//     console.log(this.name)
//   }
// }

// class Student extends Person {
//   constructor(name) {
//     super(name)
//     console.log(this.name)
//   }
// }

// const p = new Student('Steven')
// console.log(p.name)
// p.sayName()

class Person {
  private name: string
  static age: number = 20
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
  static sing() {
    console.log(`singing now !`)
  }
}
Person.sing()
console.log(Person.age);



abstract class Animal {
  name: string
  constructor(name) {
    this.name = name
  }
  abstract eat()  // 抽象方法，在抽象类中不需要实现
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  eat() {
    console.log(this.name)
  }
}

const dog = new Dog('xiaohuang')
dog.eat()