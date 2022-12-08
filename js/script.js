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
  navigator.serviceWorker.register("/ICS2O-Unit5-02-JS-1/sw.js", {
    scope: "/ICS2O-Unit5-02-JS-1/",
  })
}

// get and compare random number and user number
// print proper answer for comparison

function update() {
  console.log("update")
  const positive = document.getElementById('positive').checked
  const negative = document.getElementById('negative').checked
  console.log(positive + " | " + negative )

  if (positive == true) {
    console.log("positive")
    const random = Math.floor(Math.random() * 10) + 1
    
    document.getElementById("number").innerHTML = "the number is : " + random
    document.getElementById("answer").innerHTML = "You choosed positve"
  } 
  else if (negative == true) {
    console.log("negative")
    const random = Math.floor(Math.random() * 10) - 10
    
    document.getElementById("number").innerHTML = "the number is : " + random
    document.getElementById("answer").innerHTML = "You choosed negatve"
  } else {
    console.log("error")
    document.getElementById("answer").innerHTML = "You choosed nothing"
  }

}
