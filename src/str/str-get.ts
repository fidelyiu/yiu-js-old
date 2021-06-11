import { strIsEmpty } from './str-is'

/**
 * 获取字符串反转
 */
export function strGetReverse(str: string): string {
    return str.split('').reverse().join('')
}

/**
 * 获取第一个字符
 */
export function strGetFirstStr(str: string): string {
    if (strIsEmpty(str)) {
        return ''
    }
    return str[0]
}
