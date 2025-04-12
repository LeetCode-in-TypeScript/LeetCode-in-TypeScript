// tslint:disable:no-magic-numbers
import { calculate } from 'src/main/ts/g0201_0300/s0224_basic_calculator/solution'
import { expect, test } from 'vitest'

test('calculate', () => {
    expect(calculate('1 + 1')).toEqual(2)
})

test('calculate2', () => {
    expect(calculate(' 2-1 + 2 ')).toEqual(3)
})

test('calculate3', () => {
    expect(calculate('(1+(4+5+2)-3)+(6+8)')).toEqual(23)
})
