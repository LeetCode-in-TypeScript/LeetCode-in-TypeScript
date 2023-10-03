// tslint:disable:no-magic-numbers
import { numTrees } from 'src/main/ts/g0001_0100/s0096_unique_binary_search_trees/solution'
import { expect, test } from 'vitest'

test('numTrees', () => {
    expect(numTrees(3)).toEqual(5)
})

test('numTrees2', () => {
    expect(numTrees(1)).toEqual(1)
})
