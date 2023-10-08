// tslint:disable:no-magic-numbers
import { maxProduct } from 'src/main/ts/g0101_0200/s0152_maximum_product_subarray/solution'
import { expect, test } from 'vitest'

test('maxProduct', () => {
    expect(maxProduct([2, 3, -2, 4])).toEqual(6)
})

test('maxProduct2', () => {
    expect(maxProduct([-2, 0, -1])).toEqual(0)
})
