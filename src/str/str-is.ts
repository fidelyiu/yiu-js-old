/**
 * 是否为空
 * @param str
 * @constructor
 */
export function strIsEmpty(str: string): boolean {
    return !!str
}

/**
 * 是否不为空
 * @param str
 * @constructor
 */
export function strIsNotEmpty(str: string): boolean {
    return !strIsEmpty(str)
}

/**
 * 判断是否全是空格或者空
 * @param str
 * @constructor
 */
export function strIsBlank(str: string): boolean {
    return strIsEmpty(str) || str.trim() === ''
}

/**
 * 判断是否全部非空格或者空
 * @param str
 * @constructor
 */
export function isNotBlank(str: string): boolean {
    return !strIsBlank(str)
}
