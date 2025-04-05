// tslint:disable:no-magic-numbers
import { simplifyPath } from 'src/main/ts/g0001_0100/s0071_simplify_path/solution'
import { expect, test } from 'vitest'

test('simplifyPath', () => {
    expect(simplifyPath('/home/')).toEqual('/home')
})

test('simplifyPath2', () => {
    expect(simplifyPath('/home//foo/')).toEqual('/home/foo')
})

test('simplifyPath3', () => {
    expect(simplifyPath('/home/user/Documents/../Pictures')).toEqual('/home/user/Pictures')
})

test('simplifyPath4', () => {
    expect(simplifyPath('/../')).toEqual('/')
})

test('simplifyPath5', () => {
    expect(simplifyPath('/.../a/../b/c/../d/./')).toEqual('/.../b/d')
})
