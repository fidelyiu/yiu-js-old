import { isNumber } from 'lodash'
import { numIsInt } from './num-is'

/**
 * 包含符号
 * - '[]'：包含最小值最大值。
 * - '[)'：包含最小值，不包含最大值。
 * - '(]'：不包含最小值，包含最大值。
 * - '()'：不包含最小值最大值。
 */
type randomType = '[]' | '[)' | '(]' | '()'

/**
 * 根据符号获取随机因子，即0-1之间的随机数
 *
 * 基于`Math.random()`，`Math.random()`的注意事项也是该函数的注意事项。
 *
 * 当左边包含符号为`(`时，极小概率`Math.random()`值为0时需要重试。
 *
 * @param symbol 包含符号，如果值非法，则使用'[)'
 * @param retryTimes 重试次数，如果值非法，则为100
 */
export function numGetRandomFactor(symbol?: randomType, retryTimes?: number): number {
    if (!isNumber(retryTimes)) {
        retryTimes = 100
    }
    let randomFactor: number
    let whileTimes = 0
    switch (symbol) {
        case '()':
            randomFactor = Math.random()
            while (randomFactor === 0) {
                // 超出最大尝试次数，直接取0.1
                if (whileTimes > retryTimes) {
                    randomFactor = 0.1
                }
                randomFactor = Math.random()
                whileTimes++
            }
            break
        case '(]':
            randomFactor = Math.random() * 2
            while (randomFactor === 0) {
                if (whileTimes > retryTimes) {
                    randomFactor = 0.1
                }
                randomFactor = Math.random() * 2
                whileTimes++
            }
            if (randomFactor > 1) {
                // 这里避免存在最后一个数始终比前面的数少一倍的概率
                if (Math.random() === 0) {
                    randomFactor = 1
                } else {
                    randomFactor = randomFactor - 1
                }
            }
            break
        case '[]':
            randomFactor = Math.random() * 2
            if (randomFactor > 1) {
                if (Math.random() === 0) {
                    randomFactor = 1
                } else {
                    randomFactor = randomFactor - 1
                }
            }
            break
        case '[)':
        default:
            randomFactor = Math.random()
            break
    }
    return randomFactor
}

/**
 * 返回`num1`-`num2`之间的随机数
 *
 * 对于任何不满足判断要求的情况都返回`NaN`
 *
 * 比如：`num1 === num2` && `()`
 *
 * @param num1 值1
 * @param num2 值2
 * @param symbol 包含符号，如果值非法，则使用'[)'
 */
export function numGetRandom(num1: number, num2: number, symbol?: randomType): number {
    if (num1 === num2) {
        return symbol === '()' ? NaN : num1
    } else if (num1 > num2) {
        const t = num2
        num2 = num1
        num1 = t
    }
    return numGetRandomFactor(symbol) * (num2 - num1) + num1
}

/**
 * 返回`num1`-`num2`之间的随机整数
 *
 * 对于任何不满足判断要求的情况都返回`NaN`
 *
 * 比如：`num1 === num2` && `()`、`num1`与`num2`之间没有有效整数
 *
 * @param num1 值1
 * @param num2 值2
 * @param symbol 包含符号，如果值非法，则使用'[)'
 */
export function numGetRandomInt(num1: number, num2: number, symbol?: randomType): number {
    if (num1 === num2) {
        if (symbol === '()') {
            return NaN
        } else {
            return numIsInt(num1) ? num1 : NaN
        }
    } else if (num1 > num2) {
        const t = num2
        num2 = num1
        num1 = t
    }
    let hasIntDistance = num2 - Math.ceil(num1)
    if (hasIntDistance < 0) {
        return NaN
    }
    let tempNum1 = Math.ceil(num1)
    let tempNum2 = Math.floor(num2)
    switch (symbol) {
        case '()':
            if (tempNum1 === num1) {
                tempNum1 = tempNum1 + 1
            }
            if (tempNum2 === num2) {
                tempNum2 = tempNum2 - 1
            }
            break
        case '(]':
            if (tempNum1 === num1) {
                tempNum1 = tempNum1 + 1
            }
            break
        case'[]':
            break
        case '[)':
        default:
            if (tempNum1 === num1) {
                tempNum1 = tempNum1 + 1
            }
            break
    }
    if (tempNum1 > tempNum2) {
        return NaN
    }
    // 取 [tempNum1, tempNum2 + 1) 随机数向下取整
    return Math.floor(numGetRandom(tempNum1, tempNum2 + 1))
}
