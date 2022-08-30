"use strict";

let original = document.querySelector("#typewriter").textContent;
let counter = 0;
const typesound1 = document.querySelector("#typekey1");
const typesound2 = document.querySelector("#typekey2");
const spacesound = document.querySelector("#typespace");
const typelastsound = document.querySelector("#typelast");
const returnsound = document.querySelector("#typecarriagereturn");

function randomSound() {
  return Math.floor(Math.random() * 2 + 1);
}

function randomSpeed() {
  return Math.floor(Math.random() * 500 + 100);
}

loop();

function loop() {
  if (counter <= original.length) {
    document.querySelector("#typewriter").textContent = original.slice(0, counter);
    playSound();
    counter++;
    setTimeout(loop, randomSpeed());
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
