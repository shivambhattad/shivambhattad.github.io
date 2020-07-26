// JavaScript file task 2.js
// Created by shivam bhattad and krishnakant bhutuda
// Copyright (C)  2020

// classic declaration

function doubleMe(x) {
  return x * 2;
}

// as an expression, assign to variable

var doubleMe = function x2 (x) {
  return x * 2;
}

log("pi * 2 = " + doubleMe(3.14));

// setTimeout, expecting a function for callback

var timesUpFunction = function() {
  log("4 seconds timer stopped: " + Date().toLocaleString());
};

function startTimerClicked() {
  log("4 seconds timer started: " + Date().toLocaleString());
  setTimeout(timesUpFunction, 4000);
}

// setInterval, expecting a function for each time interval

var isTicking = false;
var timerID;

function tickerClicked() {

  if (isTicking) {
    isTicking = false;
    clearInterval(timerID);
    document.getElementById("ticker-button").value = "Start Ticker!";
    log("Ticker stopped!");
  }
  else {
    isTicking = true;
    // write the function code to log "tick ..." at each interval
    timerID = setInterval( function() { log("tick ..."); } , 1000);
    document.getElementById("ticker-button").value = "Stop Ticker!";
    log("Ticker started!");
  }

}
