// tslint:disable:no-magic-numbers
import { removeElement } from 'src/main/ts/g0001_0100/s0027_remove_element/solution'
import { expect, test } from 'vitest'

test('removeElement', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toEqual(2)
})

test('removeElement2', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5)
})

test('removeElement3', () => {
    const nums: number[] = []
    const val = 1
    expect(removeElement(nums, val)).toEqual(0)
})

test('removeElement4', () => {
    const nums = [1, 1, 1, 1]
    const val = 1
    expect(removeElement(nums, val)).toEqual(0)
})

test('removeElement5', () => {
    const nums = [4, 5]
    const val = 4
    expect(removeElement(nums, val)).toEqual(1)
    expect(nums[0]).toEqual(5)
})
