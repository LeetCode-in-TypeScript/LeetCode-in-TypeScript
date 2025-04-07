// tslint:disable:no-magic-numbers
import { isInterleave } from 'src/main/ts/g0001_0100/s0097_interleaving_string/solution'
import { expect, test } from 'vitest'

test('isInterleave', () => {
    expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true)
})

test('isInterleave2', () => {
    expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toEqual(false)
})
