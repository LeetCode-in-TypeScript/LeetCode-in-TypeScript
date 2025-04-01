// tslint:disable:no-magic-numbers
import { myPow } from 'src/main/ts/g0001_0100/s0050_powx_n/solution'
import { expect, test } from 'vitest'

test('myPow', () => {
    expect(myPow(2.00000, 10)).toEqual(1024.00000)
})

test('myPow2', () => {
    expect(myPow(2.10000, 3)).toEqual(9.261000000000001)
})

test('myPow3', () => {
    expect(myPow(2.00000, -2)).toEqual(0.25000)
})
