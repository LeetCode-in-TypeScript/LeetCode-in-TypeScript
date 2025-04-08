// tslint:disable:no-magic-numbers
import { findPeakElement } from 'src/main/ts/g0101_0200/s0162_find_peak_element/solution'
import { expect, test } from 'vitest'

test('findPeakElement', () => {
    expect(findPeakElement([1,2,3,1])).toEqual(2)
})

test('findPeakElement2', () => {
    expect(findPeakElement([1,2,1,3,5,6,4])).toEqual(5)
})
