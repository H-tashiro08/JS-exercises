"use strict";

function showOutput() {
    var inputElement = document.getElementById("textInput");
    var outputElement = document.getElementById("output");
    outputElement.textContent = inputElement.value;
}

function changeFont() {
    var outputElement = document.getElementById("output");
    var selectedFont = prompt("スタイル1", "Noto Serif JP, serif");
    outputElement.style.fontFamily = selectedFont;
  }

  function changeFont1() {
    var outputElement = document.getElementById("output");
    var selectedFont1 = prompt("スタイル2", "ヒラギノ角ゴシック, serif");
    outputElement.style.fontFamily = selectedFont1;
  }

  function changeFont2() {
    var outputElement = document.getElementById("output");
    var selectedFont2 = prompt("スタイル3", "M PLUS 1p, serif");
    outputElement.style.fontFamily = selectedFont2;
  }

  function changeFont3() {
    var outputElement = document.getElementById("output");
    var selectedFont3 = prompt("スタイル4", "Aoboshi One,serif");
    outputElement.style.fontFamily = selectedFont3;
  }

  function removeStyle() {
    var outputElement = document.getElementById("output");
    outputElement.removeAttribute("style");
  }

  document.getElementById("textInput").addEventListener("input", function() {
    var inputElement = document.getElementById("textInput");
    var outputElement = document.getElementById("output");
    outputElement.textContent = inputElement.value;
  });