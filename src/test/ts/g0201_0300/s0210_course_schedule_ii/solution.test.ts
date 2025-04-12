// tslint:disable:no-magic-numbers
import { findOrder } from 'src/main/ts/g0201_0300/s0210_course_schedule_ii/solution'
import { expect, test } from 'vitest'

test('findOrder', () => {
    expect(findOrder(2, [[1, 0]])).toEqual([0, 1])
})

test('findOrder2', () => {
    expect(
        findOrder(4, [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2],
        ]),
    ).toEqual([0, 1, 2, 3])
})

test('findOrder2', () => {
    expect(findOrder(1, [])).toEqual([0])
})
