import {mult, sum} from "./App";

//data
let a: number;
let b: number;
let c: number;
beforeEach(()=>{
  a = 1;
  b = 2;
  c = 3;
})

test('sum shout be correct', ()=>{
  //action
  const result1 = sum(a, b)
  const result2 = sum(b, c)
  //expect result
  expect(result1).toBe(3)
  expect(result2).toBe(5)
})

test('multiply shout be correct', ()=>{
  //action
  const  result1 = mult(a, b)
  const  result2 = mult(a, b)
  //expect result
  expect(result1).toBe(2)
  expect(result2).toBe(2)

})
