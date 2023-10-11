// tslint:disable:no-magic-numbers
import { searchMatrix } from 'src/main/ts/g0201_0300/s0240_search_a_2d_matrix_ii/solution'
import { expect, test } from 'vitest'

test('searchMatrix', () => {
    const maxtrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ]
    expect(searchMatrix(maxtrix, 5)).toEqual(true)
})

test('searchMatrix2', () => {
    const maxtrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ]
    expect(searchMatrix(maxtrix, 20)).toEqual(false)
})
