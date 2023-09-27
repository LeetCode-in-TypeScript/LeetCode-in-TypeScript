// tslint:disable:no-magic-numbers
import { nextPermutation } from 'src/main/ts/g0001_0100/s0031_next_permutation/solution'
import { expect, test } from 'vitest'

test('mergeTwoLists', () => {
    const n = [1, 2, 3]
    nextPermutation(n)
    expect(n).toEqual([1, 3, 2])
})

test('mergeTwoLists2', () => {
    const n = [3, 2, 1]
    nextPermutation(n)
    expect(n).toEqual([1, 2, 3])
})

test('mergeTwoLists3', () => {
    const n = [1, 1, 5]
    nextPermutation(n)
    expect(n).toEqual([1, 5, 1])
})
