// tslint:disable:no-magic-numbers
import { isSubsequence } from 'src/main/ts/g0301_0400/s0392_is_subsequence/solution'
import { expect, test } from 'vitest'

test('isSubsequence', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toEqual(true)
})

test('isSubsequence2', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toEqual(false)
})
