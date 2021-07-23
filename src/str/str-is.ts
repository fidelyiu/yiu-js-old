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
export function strIsNotBlank(str: string): boolean {
    return !strIsBlank(str)
}

export function strIsEnd(s: string, e: string): boolean {
    const last = s.lastIndexOf(e)
    if (last == -1) {
        return false
    } else {
        return s.length === e.length + last
    }
}

export function strIsContainStr(s: string, i: string): boolean {
    return s.indexOf(i) !== -1
}

export function strIsContainSStr(s: string, sList: Array<string>): boolean {
    for (let i = sList.length - 1; i >= 0; i--) {
        if (strIsContainStr(s, sList[i])) {
            return true
        }
    }
    return false
}
