// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-JS/sw.js", {
    scope: "/ICS2O-Unit5-02-JS/",
  })
}

// get and compare random number and user number
// print proper answer for comparison

// make random number
const randomNumber = Math.floor(Math.random() * 5) - 2

function update() {
  // input
  const userInput = document.getElementById("options").checked

  // process and output
  if (userInput == randomNumber) {
    document.getElementById("answer").innerHTML =
      "Your answer is : " +
      userInput +
      "<br>The random number was : " +
      randomNumber +
      "<br>You got it!"
  } else {
    document.getElementById("answer").innerHTML =
      "Your answer is : " +
      userInput +
      "<br>The random number was : " +
      randomNumber +
      "<br>Try again!"
  }
}
