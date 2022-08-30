"use strict";

let original = document.querySelector("#typewriter").textContent;
let counter = 0;
const typesound1 = document.querySelector("#typekey1");
const typesound2 = document.querySelector("#typekey2");
const spacesound = document.querySelector("#typespace");
const typelastsound = document.querySelector("#typelast");
const returnsound = document.querySelector("#typecarriagereturn");

loop();

function loop() {
  if (counter < original.length) {
    document.querySelector("#typewriter").textContent = original.slice(0, counter);
    playSound();
    counter++;
    setTimeout(loop, 200);
  }
}

function playSound() {
  if (original[counter - 1] === " ") {
    spacesound.play();
    console.log(counter);
  } else {
    typesound1.play();
  }
}
