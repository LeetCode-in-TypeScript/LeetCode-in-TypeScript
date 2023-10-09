// tslint:disable:no-magic-numbers
import { numIslands } from 'src/main/ts/g0101_0200/s0200_number_of_islands/solution'
import { expect, test } from 'vitest'

test('numIslands', () => {
    const grid1: string[][] = [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
    ]
    expect(numIslands(grid1)).toBe(1)
})

test('numIslands2', () => {
    const grid2: string[][] = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ]
    expect(numIslands(grid2)).toBe(3)
})
