import { strIsContainSStr } from '../../src/str/str-is'
import { strIsContainStr } from '../../src/str/str-is'

test('字符串是否包含子字符串', () => {
    expect(strIsContainStr('\\hello', '\\')).toBeTruthy()
})

test('字符串是否包含数组', () => {
    expect(strIsContainSStr('\\hello', ['\\', '/', ':', '*', '?', '"', '<', '>', '|'])).toBeTruthy()
    expect(strIsContainSStr('\\hello', ['/', ':', '*', '?', '"', '<', '>', '|', '\\'])).toBeTruthy()
    expect(strIsContainSStr('\\hello', ['/', ':', '*', '?', '"', '<', '>', '|'])).toBeFalsy()
})
