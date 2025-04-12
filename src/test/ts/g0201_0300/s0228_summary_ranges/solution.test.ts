// tslint:disable:no-magic-numbers
import { summaryRanges } from 'src/main/ts/g0201_0300/s0228_summary_ranges/solution'
import { expect, test } from 'vitest'

test('summaryRanges', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7'])
})

test('summaryRanges2', () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(['0', '2->4', '6', '8->9'])
})
