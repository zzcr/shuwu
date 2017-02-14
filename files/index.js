//平台、设备和操作系统  
var system = {
    win: false,
    mac: false,
    xll: false
};
//检测平台  
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//跳转语句  
if (system.win || system.mac || system.xll) { //转向后台登陆页面  

} else {
    window.location.href = "http://m.263zw.com/";
}

function changeList(obj, id, event) {
    var obj2 = document.getElementById(id).getElementsByTagName("dl");

    event = event || window.event;
    if (event.type == "mouseover") {
        for (var i = 0; i < obj2.length; i++) {
            if (obj2[i].className == "") {
                if (i != obj2.length - 1) {
                    obj2[i].className = "bg";
                } else {
                    obj2[i].className = "bg nobg";
                }
            }
        }
        obj.className = "";
    }
}

//轮播
var play_status = 0;
var tag_sn = 1;
var na_sn = [1, 1, 1, 1, 1];
var li_sn = ["na", "nb", "nc", "nd", "ne"];

function tab2(mod, cursor, n) {
    for (i = 1; i <= n; i++) {
        var nav = document.getElementById(mod + i);
        var cont = document.getElementById(mod + "_" + "cont" + i);
        nav.className = (i == cursor) ? "current" : "";
        cont.style.display = (i == cursor) ? "block" : "none";
    }
}

function play_pic() {
    if (play_status == 1) {

        tab2('newbook', tag_sn, 5);
        tab2(li_sn[tag_sn - 1], na_sn[tag_sn - 1], 5);
        if (na_sn[tag_sn - 1] < 5) {
            na_sn[tag_sn - 1]++;
        } else {
            if (tag_sn == 5)
                tag_sn = 1;
            else
                tag_sn++;
            na_sn[tag_sn - 1] = 1;

        }
    }
    setTimeout("play_pic()", 6000);
}

function set_play_satus(st) {
    play_status = st;
}

function play_tab(mod, cursor, n) {
    play_status = 0;
    if (mod == "newbook") {
        tag_sn = cursor;
        na_sn[tag_sn - 1] = 1;
        tab2(li_sn[tag_sn - 1], na_sn[tag_sn - 1], 5);
    } else {
        na_sn[tag_sn - 1] = cursor;
        for (i = 0; i < 5; i++) {
            if (mod == li_sn[i]) {
                tag_sn = i + 1;
                break;
            }
        }
    }

    for (i = 1; i <= n; i++) {
        var nav = document.getElementById(mod + i);
        var cont = document.getElementById(mod + "_" + "cont" + i);
        nav.className = (i == cursor) ? "current" : "";
        cont.style.display = (i == cursor) ? "block" : "none";
    }
}

var ppRoll;
