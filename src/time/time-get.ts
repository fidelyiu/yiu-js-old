import moment from 'moment'

/**
 * "2021-4-9 12:4:46"
 */
export function timeGetStr1(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${timeGetStr3(nowDate)} ${timeGetStr5(nowDate)}`
}

/**
 * "2021-04-09 12:04:46"
 */
export function timeGetStr2(time?: moment.MomentInput): string {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * "2021-4-9"
 */
export function timeGetStr3(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${nowDate.year()}-${nowDate.month() + 1}-${nowDate.date()}`
}

/**
 * "2021-04-09"
 */
export function timeGetStr4(time?: moment.MomentInput): string {
    return moment(time).format('YYYY-MM-DD')
}

/**
 * "12:4:46"
 */
export function timeGetStr5(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${nowDate.hour()}:${nowDate.minute()}:${nowDate.second()}`
}

/**
 * "12:04:46"
 */
export function timeGetStr6(time?: moment.MomentInput): string {
    return moment(time).format('HH:mm:ss')
}

/**
 * "20214912446"
 */
export function timeGetStr7(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${nowDate.year()}${nowDate.month() + 1}${nowDate.date()}${nowDate.hour()}${nowDate.minute()}${nowDate.second()}`
}

/**
 * "20210409120446"
 */
export function timeGetStr8(time?: moment.MomentInput): string {
    return moment(time).format('YYYYMMDDHHmmss')
}

/**
 * "2021-4-9 12:4:46.195"
 */
export function timeGetStr9(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${timeGetStr1(nowDate)}.${nowDate.millisecond()}}`
}

/**
 * "2021-04-09 12:04:46.195"
 */
export function timeGetStr10(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${timeGetStr2(time)}.${nowDate.millisecond()}}`
}

/**
 * "20214912446195"
 */
export function timeGetStr11(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${timeGetStr7(time)}${nowDate.millisecond()}}`
}

/**
 * "20210409120446195482"
 */
export function timeGetStr12(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${timeGetStr8(time)}${nowDate.millisecond()}`
}

/**
 * "2021年4月9日 12时4分46秒"
 */
export function timeGetStr13(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${timeGetStr16(time)} ${nowDate.hour()}时${nowDate.minute()}分${nowDate.second()}秒`
}

/**
 * "2021年04月09日 12时04分46秒"
 */
export function timeGetStr14(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${timeGetStr16(time)} ${nowDate.format('HH时mm分ss秒')}`
}

/**
 * "2021年4月9日"
 */
export function timeGetStr15(time?: moment.MomentInput): string {
    const nowDate = moment(time)
    return `${nowDate.year()}年${nowDate.month() + 1}月${nowDate.date()}`
}

/**
 * "2021年04月09日"
 */
export function timeGetStr16(time?: moment.MomentInput): string {
    return moment(time).format('YYYY年MM月DD日')
}
