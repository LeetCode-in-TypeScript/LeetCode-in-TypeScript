// tslint:disable:no-magic-numbers
import { productExceptSelf } from 'src/main/ts/g0201_0300/s0238_product_of_array_except_self/solution'
import { expect, test } from 'vitest'

test('productExceptSelf', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
})

test('productExceptSelf2', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0])
})
