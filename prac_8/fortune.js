"use strict";

const item = document.getElementById("addItem");

var fortunes = [
    "大吉",
    "中吉",
    "小吉",
    "吉",
    "末吉",
    "凶",
    "大凶"
];

function getFortune() {
    var index = Math.floor(Math.random() * fortunes.length);
    return fortunes[index];
}

function displayFortune() {
    var fortune = getFortune();
    document.getElementById("result").innerText = "あなたの運勢は: " + fortune;
}

setTimeout(function() {
    fortunesResultElement.innerText = "";
}, 2000);