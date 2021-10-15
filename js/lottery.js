var angles;
var radius = 130;
var color = ['#fde284', '#fe9103', 'rgba(0,0,0,0.5)', '#ffffff', '#b10105', '#fbc605'];

var gudianMP3 = document.getElementById('gudianMP3');
var bgmMP3 = document.getElementById('bgmMP3');
bgmMP3.loop = false;
bgmMP3.addEventListener('ended', playMusic, false);

var mp3s = ['./music/1.flac', './music/2.m4a', './music/3.m4a', './music/4.m4a', './music/5.ogg', './music/6.ogg', './music/7.ogg'];
var winnerList = [
    {
        name: '立体模型',
        logo: './images/xx@2x.png',
        probability: 0,
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
        probability: 5,
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
        name: '咪咪虾条',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: '😋😋😋',
    },
    {
        name: '积木',
        logo: './images/xx@2x.png',
        probability: 8,
        emoji: '😍😍😍',
    },
    {
        name: '扭蛋',
        logo: './images/xx@2x.png',
        probability: 0,
        emoji: '🤠🤠🤠',
    },
    {
        name: '奖励翻倍',
        logo: './images/xx@2x.png',
        probability: 15,
        emoji: '🤩🤩🤩',
    },
];

var number = winnerList.length;
$(document).ready(function () {
    canvasRun();
});

function canvasRun() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var ratio = 3.5;
    canvas.style.width = canvas.width;
    canvas.style.height = canvas.height;
    canvas.width = canvas.width * ratio;
    canvas.height = canvas.height * ratio;
    createCircle(ratio);
    createCirText(ratio);
    //外圆
    function createCircle(ratio) {
        var startAngle = 0; //扇形的开始弧度
        var endAngle = 0; //扇形的终止弧度
        getCircleOffset();
        for (var i = 0; i < number; i++) {
            if (number % 4 == 0) {
                startAngle = (Math.PI * 2 * i) / number - Math.PI / number;
            } else if (number % 4 == 1 || number == 1) {
                startAngle = (Math.PI * 2 * i) / number + Math.PI / number / 2;
            } else if (number % 4 == 2 || number == 2) {
                startAngle = (Math.PI * 2 * i) / number;
            } else if (number % 4 == 3 || number == 3) {
                startAngle = (Math.PI * 2 * i) / number - Math.PI / number / 2;
            } else {
                startAngle = 0;
            }
            endAngle = startAngle + (Math.PI * 2) / number;
            ctx.save();
            ctx.beginPath();
            ctx.arc(radius * ratio, radius * ratio, radius * ratio, startAngle, endAngle, false);
            ctx.lineWidth = 220 * ratio;
            if (i % 2 == 0) {
                ctx.strokeStyle = '#f8c950';
            } else {
                ctx.strokeStyle = '#fbfbe0';
            }
            ctx.stroke();
            ctx.restore();
        }
    }
    //各奖项
    function createCirText(ratio) {
        ctx.textAlign = 'start';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = color[3];
        var step = (2 * Math.PI) / number;
        for (var i = 0; i < number; i++) {
            (function (arg) {
                var img = new Image();
                img.src = winnerList[arg].logo;
                img.onload = function () {
                    ctx.save();
                    ctx.scale(ratio, ratio);
                    ctx.beginPath();
                    ctx.translate(radius, radius);
                    ctx.rotate(arg * step);
                    ctx.font = '10px Microsoft YaHei';
                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#666666';
                    ctx.fillText(winnerList[arg].name, 0, -75, 50);
                    ctx.drawImage(img, -18, -115, 35, 35);
                    ctx.closePath();
                    ctx.restore();
                };
                // 没有图片时也需要写文字
                img.onerror = function () {
                    ctx.save();
                    ctx.beginPath();
                    ctx.scale(ratio, ratio);
                    ctx.translate(radius, radius);
                    ctx.rotate(arg * step);
                    ctx.textAlign = 'center';
                    ctx.font = '8px Microsoft YaHei';
                    ctx.fillStyle = color[3];
                    ctx.fillText(winnerList[arg].name, 0, -110, 50);
                    ctx.closePath();
                    ctx.restore();
                };
            })(i);
        }
    }
    // 计算扇形的偏移量，以保证12点钟方向指向扇形区域的中间
    function getCircleOffset() {
        // 到12点钟方向的偏移量
        var offset = 0;
        // var verticalOffset = Math.PI / 2;
        if (number % 2 != 0) {
            offset = (Math.PI * 2) / number;
        }
        if (number % 2 == 0 && (number / 2) & (2 != 0)) {
            offset = 0;
        } else {
        }
        return offset;
    }
}
//转盘旋转
function runCup(i, item) {
    var angles = i * (360 / number);
    if (angles == 90 || angles == 180 || angles == 270) {
        angles = angles + 1;
    }
    $('#myCanvas').stopRotate();
    $('#myCanvas').rotate({
        angle: 0,
        animateTo: 2880 - angles,
        duration: 6000,
        callback: function () {
            win(item.name, item.emoji);
            $('#tupBtn').removeAttr('disabled', true);
        },
    });
}
//概率计算
function rnd(rate) {
    var myRandom = [];
    var randomList = [];
    var randomParent = [];
    for (var i = 0; i < 100; i++) {
        myRandom.push(parseInt([i]) + 1);
    }
    for (var i = 0; i < rate.length; i++) {
        var temp = [];
        var start = 0;
        var end = 0;
        randomList.push(rate[i]);
        for (var j = 0; j < randomList.length; j++) {
            start += randomList[j - 1] || 0;
            end += randomList[j];
        }
        temp = myRandom.slice(start, end);
        randomParent.push(temp);
    }
    let rs = 0;
    for (const r of randomParent) {
        rs += r.length;
    }
    var random = Math.floor(Math.random() * rs);
    for (var i = 0; i < randomParent.length; i++) {
        if ($.inArray(random, randomParent[i]) > 0) {
            return i;
        }
    }
}
//点击抽奖
$(document).on('click', '#tupBtn,.again', function () {
    //转盘旋转过程“开始抽奖”按钮无法点击
    $('#tupBtn').attr('disabled', true);
    // 中奖率randomRate
    var randomRate = [];
    $.each(winnerList, function (i, item) {
        randomRate.push(item.probability);
    });
    var item = rnd(randomRate);
    gudianMP3.play();
    bgmMP3.pause();
    setTimeout(() => bgmMP3.play(), 6100);
    runCup(item, winnerList[item]);
});

var $maskRule = $('#mask-rule'), //规则遮罩层
    $mask = $('#mask'), //红包遮罩层
    $mask2 = $('#mask2'), //红包遮罩层
    $winning = $('.winning'), //红包
    $card = $('#card'),
    $close = $('#close');
function win(a1, emoji) {
    //遮罩层显示
    var text = a1;
    $('#emoji').html(emoji);
    if (text == '谢谢参与~') {
        $mask2.show();
    } else {
        $('#text1').html(text);
        $mask.show();
    }
    $winning.addClass('reback');

    setTimeout(function () {
        $card.addClass('pull');
    }, 500);

    //关闭弹出层
    $('#close,.win,.btn').click(function () {
        $mask.hide();
        $mask2.hide();
        $winning.removeClass('reback');
        $card.removeClass('pull');
    });
}

// BGM音乐播放
function playMusic() {
    const index = Math.floor(Math.random() * mp3s.length);
    bgmMP3.src = mp3s[index];
    bgmMP3.play();
}
playMusic();
