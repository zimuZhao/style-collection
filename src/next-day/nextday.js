/**
 * @ [计算nextDay]
 * @Author zimu
 * @Time   2016-9-23
 * Input：year、month、day
 * Output:下一天的日期（包括阴历）
 * 条件：
 * 1. 1 =< month =< 12
 * 2. 1 =< day =< 31
 * 3. 1900 =< year =< 2100
 */

/**
 * load完后显示内容
 */
if ('addEventListener' in window) {
    window.addEventListener('load', function() {
        document.body.className = document.body.className.replace(/\bis-loading\b/, '');
    });
}

// var YEAR, MONTH, DAY;

document.getElementById('Date').onfocus = function hideMsg() {
    document.getElementById("Result").innerText = "";
}

function checkInput() {
    var input = document.getElementById('Date').value;
    // 判断输入格式yyyy-mm-dd
    var isMatch = input.match(/^(\d{4})(-|\/)(\d{1,2})(-|\/)(\d{1,2})$/);
    // alert(isMatch);
    if (isMatch == null) {
        document.getElementById("Result").style.color = "red";
        document.getElementById("Result").innerText = "输入格式不对哦亲~ \n请按照yyyy-mm-dd的格式重新输入！";
    } else {
        // 字符串转十进制
        var y = parseInt(isMatch[1], 10),
            m = parseInt(isMatch[3], 10),
            d = parseInt(isMatch[5], 10);
        if (y >= 1900 && y <= 2100) {
            // 1900-1-31是农历正月初一
            if ((y == 1900 && m == 1 && (d >= 1 && d < 30)) || (y == 2100 && m == 12 && d == 31)) {
                document.getElementById("Result").style.color = "red";
                document.getElementById("Result").innerText = "不好意思啦~ 当前农历数据木有存储";
                return;
            }
            if (m >= 1 && m <= 12) {
                // 小月
                if (m == 4 || m == 6 || m == 9 || m == 11) {
                    if (d >= 1 && d <= 30) {
                        solarNextDay(y, m, d);
                    } else {
                        document.getElementById("Result").style.color = "red";
                        document.getElementById("Result").innerText = "亲爱的~" + m + "月是小月 \n小月只有1~30天哦！";
                    }
                } else if (m == 2) {
                    if (((0 == y % 4) && (0 != y % 100)) || (0 == y % 400)) { //闰年
                        if (d >= 1 && d <= 29) {
                            solarNextDay(y, m, d);
                        } else {
                            document.getElementById("Result").style.color = "red";
                            document.getElementById("Result").innerText = "乖~ 虽然" + y + "年是闰年 \n但二月份就1~29天哦！";
                        }
                    } else { //平年
                        if (d >= 1 && d <= 28) {
                            solarNextDay(y, m, d);
                        } else {
                            document.getElementById("Result").style.color = "red";
                            document.getElementById("Result").innerText = "乖~" + y + "年是平年 \n二月份只有1~28天哦！";
                        }
                    }
                } else {
                    // 大月
                    if (d >= 1 && d <= 31) {
                        solarNextDay(y, m, d);
                    } else {
                        document.getElementById("Result").style.color = "red";
                        document.getElementById("Result").innerText = "亲爱的~ 就算" + m + "月是大月 \n大月只有1~31天啊！";
                    }
                }

            } else {
                document.getElementById("Result").style.color = "red";
                document.getElementById("Result").innerText = "别闹，有" + m + "月么？\n一年就12个月好不啦!";
            }

        } else {
            document.getElementById("Result").style.color = "red";
            document.getElementById("Result").innerText = "不好意思啦~ \n按规定年份在1900~2100之间，重新输入吧！";
        }
    }
}

// 绑定click时间
document.getElementById("Check").onclick = function() {
    checkInput();
}

// 绑定Enter键
document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) { // enter 键
        checkInput();
    }
};

// 测试用例
// solarNextDay(2011, 6, 15);
// solarNextDay(2000, 2, 29);
// solarNextDay(2001, 2, 28);
// solarNextDay(2001, 3, 31);
// solarNextDay(2001, 4, 30);
// solarNextDay(2004, 12, 31);
// solarNextDay(1900, 3, 5);
// solarNextDay(1994, 4, 21);

/**
 * [计算阳历的下一天 + 调用阴历转换]
 * @param  {[type]} y [待计算的公历年]
 * @param  {[type]} m [待计算的公历月]
 * @param  {[type]} d [待计算的公历日]
 */
function solarNextDay(y, m, d) {
    console.log("Input day is:" + y + "-" + m + "-" + d);
    // 判断是否是年底
    if (m == 12 && d == 31) {
        y += 1;
        m = 1;
        d = 1;
    } else {
        // 月份判断
        if (m == 2) {
            // 闰年（29）？平年（28）
            if (((0 == y % 4) && (0 != y % 100)) || (0 == y % 400)) { //闰年
                if (d == 29) { //二月底
                    m += 1;
                    d = 1;
                } else {
                    d += 1;
                }
            } else { //平年
                if (d == 28) { //二月底
                    m += 1;
                    d = 1;
                } else {
                    d += 1;
                }
            }
        } else if (m == 4 || m == 6 || m == 9 || m == 11) { //小月（30天）
            if (d == 30) { //月底
                m += 1;
                d = 1;
            } else {
                d += 1;
            }
        } else { //大月（31天） 1，3，5，7，8，10，12
            if (d == 31) { //二月底
                m += 1;
                d = 1;
            } else {
                d += 1;
            }
        }
    }
    var lunarJson = calendar.solar2lunar(y, m, d);
    console.log("The nextday is:" + y + "-" + m + "-" + d);
    var lunarY = lunarYear(y);
    document.getElementById("Result").style.color = "black";
    document.getElementById("Result").innerText = "The nextday is\n" + y + "年" + m + "月" + d + "日  " + lunarJson.ncWeek + "\n 农历: " + lunarJson.IMonthCn + lunarJson.IDayCn + "\n" + lunarY + "年 " + lunarJson.gzMonth + "月 " + lunarJson.gzDay + "日";
    // document.getElementById("Result").innerText = "The nextday is:" + y + "-" + m + "-" + d;
    console.log("转换后的json数组:" + lunarJson.gzYear + lunarJson.gzMonth + lunarJson.gzDay + lunarJson.ncWeek);
    // lunar(y, m, d);
}

/**
 * [阴历年计算]
 * @param  {[type]} y [公历年]
 * @param  {[type]} m [公历月]
 * @param  {[type]} d [公历日]
 */
function lunarYear(y) {
    // var gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    var gan = ["\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678"];
    // var zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    var zhi = ["\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5"];
    // var c_zodiac = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
    var c_zodiac = ["\u9f20", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a"];
    // 转换阴历年  -- 以2000年为标准 2000年=庚辰龙年 6,4
    //存储分别指向干、支、生肖的位置
    var g = (6 + (y - 2000)) % 10;
    var z = (4 + (y - 2000)) % 12;
    if (g < 0) {
        g += 10;
    }
    if (z < 0) {
        z += 12;
    }
    console.log("天干=" + g + " 地支=" + z);
    console.log("阴历年转化为：" + gan[g] + zhi[z] + c_zodiac[z]);
    return (gan[g] + zhi[z] + "[" + c_zodiac[z] + "]");
}
