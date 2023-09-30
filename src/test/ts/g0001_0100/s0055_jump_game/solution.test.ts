// tslint:disable:no-magic-numbers
import { canJump } from 'src/main/ts/g0001_0100/s0055_jump_game/solution'
import { expect, test } from 'vitest'

test('canJump', () => {
    expect(canJump([2, 3, 1, 1, 4])).toEqual(true)
})

test('canJump2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toEqual(false)
})
