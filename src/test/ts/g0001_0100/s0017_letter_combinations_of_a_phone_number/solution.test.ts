// tslint:disable:no-magic-numbers
import { letterCombinations } from 'src/main/ts/g0001_0100/s0017_letter_combinations_of_a_phone_number/solution'
import { expect, test } from 'vitest'

test('letterCombinations', () => {
    expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('letterCombinations2', () => {
    expect(letterCombinations('')).toEqual([])
})

test('letterCombinations3', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
})

test('letterCombinations4', () => {
    expect(letterCombinations('4')).toEqual(['g', 'h', 'i'])
})

test('letterCombinations5', () => {
    expect(letterCombinations('5')).toEqual(['j', 'k', 'l'])
})

test('letterCombinations6', () => {
    expect(letterCombinations('6')).toEqual(['m', 'n', 'o'])
})

test('letterCombinations7', () => {
    expect(letterCombinations('7')).toEqual(['p', 'q', 'r', 's'])
})

test('letterCombinations8', () => {
    expect(letterCombinations('8')).toEqual(['t', 'u', 'v'])
})

test('letterCombinations9', () => {
    expect(letterCombinations('9')).toEqual(['w', 'x', 'y', 'z'])
})
