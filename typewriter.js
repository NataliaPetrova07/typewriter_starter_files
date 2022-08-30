"use strict";

let original = document.querySelector("#typewriter").textContent;
let counter = 0;
const typesound1 = document.querySelector("#typekey1");
const typesound2 = document.querySelector("#typekey2");
const spacesound = document.querySelector("#typespace");
const typelastsound = document.querySelector("#typelast");
const returnsound = document.querySelector("#typereturn");

function randomSound() {
  return Math.floor(Math.random() * 2 + 1);
}

function randomSpeed() {
  return Math.floor(Math.random() * 500 + 100);
}

loop();

function loop() {
  if (counter < original.length + 1) {
    document.querySelector("#typewriter").textContent = original.slice(0, counter);
    playSound();
    counter++;
    setTimeout(loop, randomSpeed());
  } else {
    setTimeout(repeat(), 2000);
  }
}

function playSound() {
  if (original[counter - 1] === " ") {
    spacesound.play();
    console.log(counter);
  } else if (counter === original.length) {
    typelastsound.play();
  } else {
    document.querySelector("#typekey" + randomSound()).play();
  }
}

function repeat() {
  document.querySelector("#typewriter").textContent = "";
  counter = 0;
  returnsound.play();
  setTimeout(loop, 1600);
}
