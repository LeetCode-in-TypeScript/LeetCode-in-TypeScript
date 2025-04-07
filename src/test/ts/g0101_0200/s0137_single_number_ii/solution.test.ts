// tslint:disable:no-magic-numbers
import { singleNumber } from 'src/main/ts/g0101_0200/s0137_single_number_ii/solution'
import { expect, test } from 'vitest'

test('singleNumber', () => {
    expect(singleNumber([2, 2, 3, 2])).toEqual(3)
})

test('singleNumber2', () => {
    expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toEqual(99)
})
