// tslint:disable:no-magic-numbers
import { plusOne } from 'src/main/ts/g0001_0100/s0066_plus_one/solution'
import { expect, test } from 'vitest'

test('plusOne', () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4])
})

test('plusOne2', () => {
    expect(plusOne([4,3,2,1])).toEqual([4,3,2,2])
})

test('plusOne3', () => {
    expect(plusOne([9])).toEqual([1,0])
})
