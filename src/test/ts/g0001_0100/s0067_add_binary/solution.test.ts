// tslint:disable:no-magic-numbers
import { addBinary } from 'src/main/ts/g0001_0100/s0067_add_binary/solution'
import { expect, test } from 'vitest'

test('addBinary', () => {
    expect(addBinary('11', '1')).toEqual('100')
})

test('addBinary2', () => {
    expect(addBinary('1010', '1011')).toEqual('10101')
})
