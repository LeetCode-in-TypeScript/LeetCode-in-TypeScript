// tslint:disable:no-magic-numbers
import { subsets } from 'src/main/ts/g0001_0100/s0078_subsets/solution'
import { expect, test } from 'vitest'

test('subsets', () => {
    expect(subsets([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
})

test('subsets2', () => {
    expect(subsets([0])).toEqual([[], [0]])
})
