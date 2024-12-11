const person = {
  name: '李四',
  age: 18
}
console.log(`我叫${person.name},我今年${person.age}岁`)


let a: string
let b: number
let c: boolean

a = 'hello'
b = -99
c = true
console.log(a, b, c)

function count(x: number, y: number): number {
  return x + y
}

let result = count(1, 2)
console.log(result)


const src = [1, 2, 3];
const dst = [0];
console.log(src)

src.forEach((el) => dst.push(el))

console.log(dst)