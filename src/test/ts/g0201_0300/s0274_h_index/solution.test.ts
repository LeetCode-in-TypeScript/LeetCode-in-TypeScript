// tslint:disable:no-magic-numbers
import { hIndex } from 'src/main/ts/g0201_0300/s0274_h_index/solution'
import { expect, test } from 'vitest'

test('hIndex', () => {
    expect(hIndex([3, 0, 6, 1, 5])).toEqual(3)
})

test('hIndex2', () => {
    expect(hIndex([1, 3, 1])).toEqual(1)
})
