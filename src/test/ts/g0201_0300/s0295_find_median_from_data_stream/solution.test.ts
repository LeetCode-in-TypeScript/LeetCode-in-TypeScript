// tslint:disable:no-magic-numbers
import { MedianFinder } from 'src/main/ts/g0201_0300/s0295_find_median_from_data_stream/solution'
import { expect, test } from 'vitest'

test('medianFinder', () => {
    const medianFinder = new MedianFinder()
    medianFinder.addNum(1)
    medianFinder.addNum(2)
    expect(medianFinder.findMedian()).toEqual(1.5)
    medianFinder.addNum(3)
    expect(medianFinder.findMedian()).toEqual(2.0)
})

test('medianFinder2', () => {
    const medianFinder = new MedianFinder()
    medianFinder.addNum(1)
    medianFinder.addNum(3)
    medianFinder.addNum(-1)
    expect(medianFinder.findMedian()).toEqual(1.0)
})

test('medianFinder3', () => {
    const medianFinder = new MedianFinder()
    medianFinder.addNum(-1)
    medianFinder.addNum(-2)
    medianFinder.addNum(-3)
    medianFinder.addNum(-4)
    medianFinder.addNum(-5)
    expect(medianFinder.findMedian()).toEqual(-3.0)
})
