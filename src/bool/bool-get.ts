import { numGetRandomInt } from '../num/num-get'

/**
 * 获取随机boolean值
 */
export function boolGetRandom(): boolean {
    return !!numGetRandomInt(0, 1, '[]')
}
