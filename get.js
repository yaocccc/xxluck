var winnerList = [
    {
        name: '本子、尺子',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😘😘😘',
    },
    {
        name: '笔、橡皮',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '😁😁😁',
    },
    {
        name: '胶带、贴纸',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '😁😁😁',
    },
    {
        name: '可爱娃娃',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😁😁😁',
    },
    {
        name: 'AD钙奶',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😉😉😉',
    },
    {
        name: '捏捏乐玩偶',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😋😋😋',
    },
    {
        name: '咪咪虾条、海苔',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😋😋😋',
    },
    {
        name: '积木、象棋',
        logo: './images/xx@2x.png',
        probability: 8,
        emoji: '😍😍😍',
    },
    {
        name: '扭蛋',
        logo: './images/xx@2x.png',
        probability: 5,
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
