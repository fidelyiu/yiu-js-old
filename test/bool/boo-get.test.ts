import { boolGetRandom } from '../../src/bool/bool-get'

test('获取Bool随机值', () => {
    let trueTimes = 0
    let falseTimes = 0
    let testTimes = 1000000
    for (let i = 0; i < testTimes; i++) {
        boolGetRandom() ? trueTimes++ : falseTimes++
    }
    console.log('trueTimes', trueTimes)
    console.log('falseTimes', falseTimes)
})

test('随机因子测试', () => {
    let trueTimes = 0
    let falseTimes = 0
    let testTimes = 1000000
    for (let i = 0; i < testTimes; i++) {
        Math.random() >= 0.5 ? trueTimes++ : falseTimes++
    }
    console.log('trueTimes', trueTimes)
    console.log('falseTimes', falseTimes)
})
