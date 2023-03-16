// tslint:disable:no-magic-numbers
import { convert } from 'src/main/ts/g0001_0100/s0006_zigzag_conversion/solution'
import { expect, test } from 'vitest'

test('convert', () => {
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})

test('convert2', () => {
    expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI')
})
