// tslint:disable:no-magic-numbers
import { firstMissingPositive } from 'src/main/ts/g0001_0100/s0041_first_missing_positive/solution'
import { expect, test } from 'vitest'

test('firstMissingPositive', () => {
    expect(firstMissingPositive([1, 2, 0])).toEqual(3)
})

test('firstMissingPositive2', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toEqual(2)
})

test('firstMissingPositive3', () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toEqual(1)
})
