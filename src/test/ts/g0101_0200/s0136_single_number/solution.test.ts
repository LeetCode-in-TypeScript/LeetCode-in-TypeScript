// tslint:disable:no-magic-numbers
import { singleNumber } from 'src/main/ts/g0101_0200/s0136_single_number/solution'
import { expect, test } from 'vitest'

test('singleNumber', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1)
})

test('singleNumber2', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4)
})

test('singleNumber3', () => {
    expect(singleNumber([1])).toEqual(1)
})
