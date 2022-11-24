import {mult, sum} from "./App";

test('sum shout be correct', ()=>{
  const a = 1;
  const b = 2;
  const c = 3;

  const result = sum(1, 2)

  expect(result).toBe(3)
})

test('multiply shout be correct', ()=>{
  const a = 1;
  const b = 2;
  const c = 3;

  const  result = mult(a, b)

  expect(result).toBe(2)

})
