import YiuStrIs from './str-is'

/**
 * 获取字符串反转
 * @param str
 * @constructor
 */
function GetReverse(str: string): string {
    return str.split('').reverse().join('')
}

/**
 * 获取第一个字符
 * @param str
 * @constructor
 */
function GetFirstStr(str: string): string {
    if (YiuStrIs.IsEmpty(str)) {
        return ''
    }
    return str[0]
}

export default {
    GetFirstStr,
    GetReverse,
}
