"use strict";

let height = window.prompt("身長を入力してください");
 if (height >= 100) {
    window.alert("プレミアムチケットは持っていますか？");
 } else if (height >= 90){
    window.alert("付き添いありで乗車可能です。");
}else{
    window.alert("乗車できません。")
}

