// tslint:disable:no-magic-numbers
import { threeSum } from 'src/main/ts/g0001_0100/s0015_3sum/solution'
import { expect, test } from 'vitest'

test('threeSum', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
        [-1, -1, 2],
        [-1, 0, 1],
    ])
})

test('threeSum2', () => {
    expect(threeSum([])).toEqual(new Array())
})

test('threeSum3', () => {
    expect(threeSum([0])).toEqual(new Array())
})
