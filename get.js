var winnerList = [
    {
        name: '奖励翻倍',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '🤩🤩🤩',
    },
    {
        name: '扭蛋',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😘😘😘',
    },
    {
        name: '多肉花盆',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😁😁😁',
    },
    {
        name: '粘土套装',
        logo: './images/xx@2x.png',
        probability: 0,
        emoji: '😁😁😁',
    },
    {
        name: '彩蛋',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😁😁😁',
    },
    {
        name: '捏捏乐',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: '😉😉😉',
    },
    {
        name: '走珠玩具',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: '😋😋😋',
    },
    {
        name: '飞行棋',
        logo: './images/xx@2x.png',
        probability: 5,
        emoji: '😋😋😋',
    },
    {
        name: 'DIY贴画',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😍😍😍',
    },
    {
        name: '娃娃',
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
