var winnerList = [
    {
        name: '溜溜球',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '🤩🤩🤩',
    },
    {
        name: '水彩画',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😘😘😘',
    },
    {
        name: '拼图',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😁😁😁',
    },
    {
        name: '刮刮画',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: '😁😁😁',
    },
    {
        name: '闪光陀螺',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😁😁😁',
    },
    {
        name: '钮扣画',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: '😉😉😉',
    },
    {
        name: '冰淇淋玩具',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: '😋😋😋',
    },
    {
        name: '乐高',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😋😋😋',
    },
    {
        name: '彩绘石膏',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😍😍😍',
    },
    {
        name: '圆柱魔方',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '🤠🤠🤠',
    },
];

console.log('| 奖品 | 中奖机率 |');
console.log('| ---- | -------- |');
for (const item of winnerList) {
    console.log(`|${item.name}|${item.probability}|`);
}
