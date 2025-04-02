// tslint:disable:no-magic-numbers
import { longestCommonPrefix } from 'src/main/ts/g0001_0100/s0014_longest_common_prefix/solution'
import { expect, test } from 'vitest'

test('longestCommonPrefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
})

test('longestCommonPrefix2', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
})

test('longestCommonPrefix3', () => {
    expect(longestCommonPrefix([])).toEqual('')
})

test('longestCommonPrefix4', () => {
    expect(longestCommonPrefix(['dog'])).toEqual('dog')
})
