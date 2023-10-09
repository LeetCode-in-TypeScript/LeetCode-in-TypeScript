// tslint:disable:no-magic-numbers
import { majorityElement } from 'src/main/ts/g0101_0200/s0169_majority_element/solution'
import { expect, test } from 'vitest'

test('majorityElement', () => {
    const nums1: number[] = [3, 2, 3]
    expect(majorityElement(nums1)).toEqual(3)
})

test('majorityElement2', () => {
    const nums2: number[] = [2, 2, 1, 1, 1, 2, 2]
    expect(majorityElement(nums2)).toEqual(2)
})
