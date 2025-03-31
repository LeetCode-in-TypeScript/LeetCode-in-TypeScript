// tslint:disable:no-magic-numbers
import { longestCommonPrefix } from 'src/main/ts/g0001_0100/s0014_longest_common_prefix/solution'
import { expect, test } from 'vitest'

test('longestCommonPrefix', () => {
    expect(longestCommonPrefix(['flower','flow','flight'])).toEqual('fl')
})

test('longestCommonPrefix2', () => {
    expect(longestCommonPrefix(['dog','racecar','car'])).toEqual('')
})
