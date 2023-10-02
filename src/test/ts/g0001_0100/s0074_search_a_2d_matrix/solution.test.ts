// tslint:disable:no-magic-numbers
import { searchMatrix } from 'src/main/ts/g0001_0100/s0074_search_a_2d_matrix/solution'
import { expect, test } from 'vitest'

test('searchMatrix', () => {
    expect(
        searchMatrix(
            [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            3,
        ),
    ).toEqual(true)
})

test('searchMatrix2', () => {
    expect(
        searchMatrix(
            [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            13,
        ),
    ).toEqual(false)
})
