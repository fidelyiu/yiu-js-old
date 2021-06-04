import { startsWith } from 'lodash-es'

/**
 * 是否为空
 * @param str
 * @constructor
 */
function IsEmpty(str: string): boolean {
    return !!str
}

/**
 * 是否不为空
 * @param str
 * @constructor
 */
function IsNotEmpty(str: string): boolean {
    return !IsEmpty(str)
}

/**
 * 判断是否全是空格或者空
 * @param str
 * @constructor
 */
function IsBlank(str: string): boolean {
    return IsEmpty(str) || str.trim() === ''
}

/**
 * 判断是否全部非空格或者空
 * @param str
 * @constructor
 */
function IsNotBlank(str: string): boolean {
    return !IsBlank(str)
}

/**
 * 判断是否以指定字符串开始
 * @param str
 * @param startStr 指定字符串
 * @constructor
 */
function IsStartWith(str: string, startStr: string): boolean {
    return startsWith(str, startStr)
}

export default {
    IsEmpty,
    IsNotEmpty,
    IsBlank,
    IsStartWith,
}
