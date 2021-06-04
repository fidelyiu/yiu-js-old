import YiuStrIs from './str-is'

/**
 * 获取字符串反转
 * @param str
 * @constructor
 */
function getReverse(str: string): string {
    return str.split('').reverse().join('')
}

/**
 * 获取第一个字符
 * @param str
 * @constructor
 */
function getFirstStr(str: string): string {
    if (YiuStrIs.isEmpty(str)) {
        return ''
    }
    return str[0]
}

export default {
    getReverse,
    getFirstStr,
}
