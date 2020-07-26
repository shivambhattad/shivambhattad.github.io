// JavaScript file task 6.js
// Created by krishnakant bhutuda and shivam bhattad
// Copyright (C) 2020


class Aircraft {
  constructor(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.enginesRunning = false;
  };
  getDescription() {
    return this.manufacturer + " " + this.model;
  };

  startEngines() {
    this.enginesRunning = true;
  };
}

var myPlane = new Aircraft("Airbus", "350");

log(myPlane.getDescription());
logObject(myPlane);
log("Starting engines...");
myPlane.startEngines();
logObject(myPlane);
