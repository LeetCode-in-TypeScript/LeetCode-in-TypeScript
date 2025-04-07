// tslint:disable:no-magic-numbers
import { ladderLength } from 'src/main/ts/g0101_0200/s0127_word_ladder/solution'
import { expect, test } from 'vitest'

test('ladderLength', () => {
    expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toEqual(5)
})

test('ladderLength2', () => {
    expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])).toEqual(0)
})
