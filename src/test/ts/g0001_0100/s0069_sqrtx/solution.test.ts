// tslint:disable:no-magic-numbers
import { mySqrt } from 'src/main/ts/g0001_0100/s0069_sqrtx/solution'
import { expect, test } from 'vitest'

test('mySqrt', () => {
    expect(mySqrt(4)).toEqual(2)
})

test('mySqrt2', () => {
    expect(mySqrt(8)).toEqual(2)
})
