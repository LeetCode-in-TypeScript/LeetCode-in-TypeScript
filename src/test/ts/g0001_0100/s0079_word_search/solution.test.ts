// tslint:disable:no-magic-numbers
import { exist } from 'src/main/ts/g0001_0100/s0079_word_search/solution'
import { expect, test } from 'vitest'

test('exist', () => {
    expect(
        exist(
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E'],
            ],
            'ABCCED',
        ),
    ).toEqual(true)
})

test('exist2', () => {
    expect(
        exist(
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E'],
            ],
            'SEE',
        ),
    ).toEqual(true)
})

test('exist3', () => {
    expect(
        exist(
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E'],
            ],
            'ABCB',
        ),
    ).toEqual(false)
})
