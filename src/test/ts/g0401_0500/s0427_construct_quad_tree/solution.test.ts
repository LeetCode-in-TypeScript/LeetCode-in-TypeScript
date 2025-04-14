// tslint:disable:no-magic-numbers
import { construct } from 'src/main/ts/g0401_0500/s0427_construct_quad_tree/solution'
import { expect, test } from 'vitest'

test('construct', () => {
    expect(
        construct([
            [0, 1],
            [1, 0],
        ])?.toString(),
    ).toEqual('[0,1][1,0][1,1][1,1][1,0]')
})

test('construct2', () => {
    expect(
        construct([
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
        ])?.toString(),
    ).toEqual('[0,1][1,1][0,1][1,1][1,0]')
})
