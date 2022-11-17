import {
    add,mul
} from './helper.js';
test("function (add works",()=> {
    expect(add(2,2)).toBe(4)
})
test("function (add works",()=> {
    expect(add(2,6)).toBe(8)
})
test("function (add works",()=> {
    expect(mul(2,6)).toBe(12)
})