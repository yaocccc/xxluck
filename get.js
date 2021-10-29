var winnerList = [
    {
        name: '本子、尺子',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '😘😘😘',
    },
    {
        name: '橡皮、贴纸',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '😁😁😁',
    },
    {
        name: '面包',
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
        name: '沾沾乐',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😋😋😋',
    },
    {
        name: '咪咪虾条',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😋😋😋',
    },
    {
        name: '积木、象棋',
        logo: './images/xx@2x.png',
        probability: 0,
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
