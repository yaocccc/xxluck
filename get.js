var winnerList = [
    {
        name: '文具盒/笔袋',
        logo: './images/xx@2x.png',
        probability: 8,
        emoji: '😘😘😘',
    },
    {
        name: '笔、橡皮',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '😁😁😁',
    },
    {
        name: '胶带',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '😁😁😁',
    },
    {
        name: 'AD钙奶',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😉😉😉',
    },
    {
        name: 'QQ糖',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😋😋😋',
    },
    {
        name: '咪咪虾条',
        logo: './images/xx@2x.png',
        probability: 5,
        emoji: '😋😋😋',
    },
    {
        name: '拼图',
        logo: './images/xx@2x.png',
        probability: 0,
        emoji: '😍😍😍',
    },
    {
        name: '飞行棋',
        logo: './images/xx@2x.png',
        probability: 0,
        emoji: '😝😝😝',
    },
    {
        name: '小本子',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '🤠🤠🤠',
    },
    {
        name: '奖励翻倍',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '🤩🤩🤩',
    },
];

console.log('| 奖品 | 中奖机率 |');
console.log('| ---- | -------- |');
for (const item of winnerList) {
    console.log(`|${item.name}|${item.probability}|`);
}
