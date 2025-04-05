// tslint:disable:no-magic-numbers
import { merge } from 'src/main/ts/g0001_0100/s0088_merge_sorted_array/solution'
import { expect, test } from 'vitest'

test('merge', () => {
    const nums1 = [1,2,3,0,0,0]
    merge(nums1, 3, [2,5,6], 3)
    expect(nums1).toEqual([1,2,2,3,5,6])
})

test('merge2', () => {
    const nums1 = [1]
    merge(nums1, 1, [], 0)
    expect(nums1).toEqual([1])
})

test('merge3', () => {
    const nums1 = [0]
    merge(nums1, 0, [1], 1)
    expect(nums1).toEqual([1])
})
