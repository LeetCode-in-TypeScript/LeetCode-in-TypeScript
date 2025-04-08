// tslint:disable:no-magic-numbers
import { maxPoints } from 'src/main/ts/g0101_0200/s0149_max_points_on_a_line/solution'
import { expect, test } from 'vitest'

test('maxPoints', () => {
    expect(
        maxPoints([
            [1, 1],
            [2, 2],
            [3, 3],
        ]),
    ).toEqual(3)
})

test('maxPoints2', () => {
    expect(
        maxPoints([
            [1, 1],
            [3, 2],
            [5, 3],
            [4, 1],
            [2, 3],
            [1, 4],
        ]),
    ).toEqual(4)
})
