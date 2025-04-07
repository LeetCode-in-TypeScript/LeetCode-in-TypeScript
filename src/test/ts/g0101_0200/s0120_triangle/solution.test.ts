// tslint:disable:no-magic-numbers
import { minimumTotal } from 'src/main/ts/g0101_0200/s0120_triangle/solution'
import { expect, test } from 'vitest'

test('minimumTotal', () => {
    expect(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])).toEqual(11)
})

test('minimumTotal2', () => {
    expect(minimumTotal([[-10]])).toEqual(-10)
})
