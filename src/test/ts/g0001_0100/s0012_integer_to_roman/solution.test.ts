// tslint:disable:no-magic-numbers
import { intToRoman } from 'src/main/ts/g0001_0100/s0012_integer_to_roman/solution'
import { expect, test } from 'vitest'

test('intToRoman', () => {
    expect(intToRoman(3749)).toEqual('MMMDCCXLIX')
})

test('intToRoman2', () => {
    expect(intToRoman(58)).toEqual('LVIII')
})

test('intToRoman3', () => {
    expect(intToRoman(1994)).toEqual('MCMXCIV')
})
