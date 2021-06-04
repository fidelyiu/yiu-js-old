/**
 * 是否为空
 * @param str
 * @constructor
 */
function isEmpty(str: string): boolean {
    return !!str
}

/**
 * 是否不为空
 * @param str
 * @constructor
 */
function isNotEmpty(str: string): boolean {
    return !isEmpty(str)
}

/**
 * 判断是否全是空格或者空
 * @param str
 * @constructor
 */
function isBlank(str: string): boolean {
    return isEmpty(str) || str.trim() === ''
}

/**
 * 判断是否全部非空格或者空
 * @param str
 * @constructor
 */
function isNotBlank(str: string): boolean {
    return !isBlank(str)
}

export default {
    isEmpty,
    isNotEmpty,
    isBlank,
}
