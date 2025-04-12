// tslint:disable:no-magic-numbers
import { findWords } from 'src/main/ts/g0201_0300/s0212_word_search_ii/solution'
import { expect, test } from 'vitest'

test('findWords', () => {
    expect(
        findWords(
            [
                ['o', 'a', 'a', 'n'],
                ['e', 't', 'a', 'e'],
                ['i', 'h', 'k', 'r'],
                ['i', 'f', 'l', 'v'],
            ],
            ['oath', 'pea', 'eat', 'rain'],
        ),
    ).toEqual(['oath', 'eat'])
})

test('findWords2', () => {
    expect(
        findWords(
            [
                ['a', 'b'],
                ['c', 'd'],
            ],
            ['abcb'],
        ),
    ).toEqual([])
})
