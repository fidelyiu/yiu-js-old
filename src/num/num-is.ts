import { isNumber } from 'lodash'

/**
 * 判断数字是否是整数
 *
 * 前提是数字
 */
export function numIsInt(num: number): boolean {
    return isNumber(num) && num === Math.ceil(num)
}
