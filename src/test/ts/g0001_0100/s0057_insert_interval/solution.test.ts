// tslint:disable:no-magic-numbers
import { insert } from 'src/main/ts/g0001_0100/s0057_insert_interval/solution'
import { expect, test } from 'vitest'

test('insert', () => {
    expect(insert([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]])
})

test('insert2', () => {
    expect(insert( [[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])).toEqual([[1,2],[3,10],[12,16]])
})
