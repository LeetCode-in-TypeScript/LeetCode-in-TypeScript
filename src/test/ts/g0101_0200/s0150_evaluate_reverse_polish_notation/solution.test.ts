// tslint:disable:no-magic-numbers
import { evalRPN } from 'src/main/ts/g0101_0200/s0150_evaluate_reverse_polish_notation/solution'
import { expect, test } from 'vitest'

test('evalRPN', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toEqual(9)
})

test('evalRPN2', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toEqual(6)
})

test('evalRPN3', () => {
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toEqual(22)
})
