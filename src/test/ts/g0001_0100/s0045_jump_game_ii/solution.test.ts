// tslint:disable:no-magic-numbers
import { jump } from 'src/main/ts/g0001_0100/s0045_jump_game_ii/solution'
import { expect, test } from 'vitest'

test('jump', () => {
    expect(jump([2, 3, 1, 1, 4])).toEqual(2)
})

test('jump2', () => {
    expect(jump([2, 3, 0, 1, 4])).toEqual(2)
})
