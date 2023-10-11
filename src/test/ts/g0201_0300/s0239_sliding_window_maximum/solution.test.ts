// tslint:disable:no-magic-numbers
import { maxSlidingWindow } from 'src/main/ts/g0201_0300/s0239_sliding_window_maximum/solution'
import { expect, test } from 'vitest'

test('maxSlidingWindow', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7])
})

test('maxSlidingWindow2', () => {
    expect(maxSlidingWindow([1], 1)).toEqual([1])
})
