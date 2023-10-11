// tslint:disable:no-magic-numbers
import { topKFrequent } from 'src/main/ts/g0301_0400/s0347_top_k_frequent_elements/solution'
import { expect, test } from 'vitest'

test('topKFrequent', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
})

test('topKFrequent2', () => {
    expect(topKFrequent([1], 1)).toEqual([1])
})
