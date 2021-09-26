var angles;
var radius = 130;
var color = ["#fde284", "#fe9103", "rgba(0,0,0,0.5)", "#ffffff", "#b10105", "#fbc605"];

var winnerList=[
    {
        name:'文具盒/笔袋',
        logo:'./images/xx@2x.png',
        probability:'10%',
    },{
        name:'笔、橡皮',
        logo:'./images/xx@2x.png',
        probability:'15%',
    },{
        name:'胶带',
        logo:'./images/xx@2x.png',
        probability:'10%',
    },{
        name:'AD钙奶',
        logo:'./images/xx@2x.png',
        probability:'10%',
    },{
        name:'QQ糖',
        logo:'./images/xx@2x.png',
        probability:'15%',
    },{
        name:'咪咪虾条',
        logo:'./images/xx@2x.png',
        probability:'15%',
    },{
        name:'拼图',
        logo:'./images/xx@2x.png',
        probability:'10%',
    },{
        name:'飞行棋',
        logo:'./images/xx@2x.png',
        probability:'10%',
    },{
        name:'玩偶',
        logo:'./images/xx@2x.png',
        probability:'10%',
    },{
        name:'奖励翻倍',
        logo:'./images/xx@2x.png',
        probability:'3%',
    },
]

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
        duration: 8000,
        callback: function () {
            alert(item.name);
            $('#tupBtn').removeAttr('disabled', true);
        },
    });
}
//概率计算
function rnd(rate) {
    var random = Math.floor(Math.random() * 100);
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
        randomList.push(parseInt(rate[i].split('%')[0]));
        for (var j = 0; j < randomList.length; j++) {
            start += randomList[j - 1] || 0;
            end += randomList[j];
        }
        temp = myRandom.slice(start, end);
        randomParent.push(temp);
    }
    for (var i = 0; i < randomParent.length; i++) {
        if ($.inArray(random, randomParent[i]) > 0) {
            return i + 1;
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
    runCup(item, winnerList[item]);
});
