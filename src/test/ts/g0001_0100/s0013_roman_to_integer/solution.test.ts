// tslint:disable:no-magic-numbers
import { romanToInt } from 'src/main/ts/g0001_0100/s0013_roman_to_integer/solution'
import { expect, test } from 'vitest'

test('romanToInt', () => {
    expect(romanToInt('III')).toEqual(3)
})

test('romanToInt2', () => {
    expect(romanToInt('LVIII')).toEqual(58)
})

test('romanToInt3', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994)
})
