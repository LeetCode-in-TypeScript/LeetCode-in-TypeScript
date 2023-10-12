// tslint:disable:no-magic-numbers
import { countSubstrings } from 'src/main/ts/g0601_0700/s0647_palindromic_substrings/solution'
import { expect, test } from 'vitest'

test('countSubstrings', () => {
    expect(countSubstrings('abc')).toEqual(3)
})

test('countSubstrings2', () => {
    expect(countSubstrings('aaa')).toEqual(6)
})
