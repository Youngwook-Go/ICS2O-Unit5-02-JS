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
  // get input numbers
  const positive2 = document.getElementById('positive2').checked
  const positive1 = document.getElementById('positive1').checked
  const neutral0 = document.getElementById('neutral0').checked
  const negative1 = document.getElementById('negative1').checked
  const negative2 = document.getElementById('negative2').checked

  // output
  if (positive2 == true && randomNumber == 2) {
    document.getElementById("answer").innerHTML = "correct"
  } else if (positive1 == true && randomNumber == 1) {
    document.getElementById("answer").innerHTML = "correct"
  } else if (neutral0 == true && randomNumber == 0) {
    document.getElementById("answer").innerHTML = "correct"
  } else if (negative1 == true && randomNumber == -1) {
    document.getElementById("answer").innerHTML = "correct"
  } else if (negative2 == true && randomNumber == -2) {
    document.getElementById("answer").innerHTML = "correct"
  } else {
    document.getElementById("answer").innerHTML = "try again"
  }
  document.getElementById("number").innerHTML = "Random number = " + randomNumber + "."
}
