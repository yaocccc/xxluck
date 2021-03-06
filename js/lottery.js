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
        name: 'æĐĄįŪ',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: 'ðĪĐðĪĐðĪĐ',
    },
    {
        name: 'äđĶį­ū/å°æŽå­',
        logo: './images/xx@2x.png',
        probability: 30,
        emoji: 'ððð',
    },
    {
        name: 'įŽ',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: 'ððð',
    },
    {
        name: 'äūŋåĐčīī',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: 'ððð',
    },
    {
        name: 'å°éĢæ',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: 'ððð',
    },
    {
        name: 'äļå·§æŋ',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: 'ððð',
    },
    {
        name: 'įš―æĢįŧ',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: 'ððð',
    },
    {
        name: 'ččäū ',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: 'ððð',
    },
    {
        name: 'åžđį ',
        logo: './images/xx@2x.png',
        probability: 20,
        emoji: 'ððð',
    },
    {
        name: 'å°éļ­å­',
        logo: './images/xx@2x.png',
        probability: 10,
        emoji: 'ðĪ ðĪ ðĪ ',
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
    //åĪå
    function createCircle(ratio) {
        var startAngle = 0; //æå―Ēįåžå§åž§åšĶ
        var endAngle = 0; //æå―Ēįįŧæ­Ēåž§åšĶ
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
    //ååĨéĄđ
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
                // æēĄæåūįæķäđéčĶåæå­
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
    // čŪĄįŪæå―Ēįåį§ŧéïžäŧĨäŋčŊ12įđéæđåæåæå―Ēåšåįäļ­éī
    function getCircleOffset() {
        // å°12įđéæđåįåį§ŧé
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
//č―Žįæč―Ž
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
//æĶįčŪĄįŪ
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
//įđåŧæ―åĨ
$(document).on('click', '#tupBtn,.again', function () {
    //č―Žįæč―ŽčŋįĻâåžå§æ―åĨâæéŪæ æģįđåŧ
    $('#tupBtn').attr('disabled', true);
    // äļ­åĨįrandomRate
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

var $maskRule = $('#mask-rule'), //č§åéŪį―Đåą
    $mask = $('#mask'), //įšĒåéŪį―Đåą
    $mask2 = $('#mask2'), //įšĒåéŪį―Đåą
    $winning = $('.winning'), //įšĒå
    $card = $('#card'),
    $close = $('#close');
function win(a1, emoji) {
    //éŪį―ĐåąæūįĪš
    var text = a1;
    $('#emoji').html(emoji);
    if (text == 'č°Ēč°Ēåäļ~') {
        $mask2.show();
    } else {
        $('#text1').html(text);
        $mask.show();
    }
    $winning.addClass('reback');

    setTimeout(function () {
        $card.addClass('pull');
    }, 500);

    //åģé­åžđåšåą
    $('#close,.win,.btn').click(function () {
        $mask.hide();
        $mask2.hide();
        $winning.removeClass('reback');
        $card.removeClass('pull');
    });
}

// BGMéģäđæ­æū
function playMusic() {
    const index = Math.floor(Math.random() * mp3s.length);
    bgmMP3.src = mp3s[index];
    bgmMP3.play();
}
playMusic();
