/**
 * 将一个对象转换成bool，
 * 返回这个bool，如果是false，将打印错误日志
 * @param data 判断对象
 * @param errorLogMes 错误日志
 */
export function isBoolWithFalseLog(data: any, errorLogMes: string): boolean {
    if (!data) {
        console.error(errorLogMes)
        return false
    }
    return true
}
