// tslint:disable:no-magic-numbers
import { rob } from 'src/main/ts/g0101_0200/s0198_house_robber/solution'
import { expect, test } from 'vitest'

test('rob', () => {
    const nums1: number[] = [1, 2, 3, 1]
    expect(rob(nums1)).toBe(4)
})

test('rob2', () => {
    const nums2: number[] = [2, 7, 9, 3, 1]
    expect(rob(nums2)).toBe(12)
})

test('rob3', () => {
    expect(rob([])).toBe(0)
})

test('rob4', () => {
    expect(rob([1])).toBe(1)
})

test('rob5', () => {
    expect(rob([1, 2])).toBe(2)
})
