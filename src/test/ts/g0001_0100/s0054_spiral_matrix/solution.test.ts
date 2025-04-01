// tslint:disable:no-magic-numbers
import { spiralOrder } from 'src/main/ts/g0001_0100/s0054_spiral_matrix/solution'
import { expect, test } from 'vitest'

test('spiralOrder', () => {
    expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5])
})

test('spiralOrder2', () => {
    expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7])
})
