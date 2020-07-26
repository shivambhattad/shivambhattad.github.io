// JavaScript file task 4.js
// Created by shivam bhattad and krishnakant bhutuda
// Copyright (C) 2020

function button1Clicked() {

  //alert("button 1 clicked!");

  var target1 = $("#target-1");

  if (target1 != null) {
    target1.text("Target 1 has been found!");
  };
}

function button2Clicked() {

  // alert("button 2 clicked");


  var target2 = $("#target-2");

  if (target2 != null) {
    target2.text("Target 2 discovered!");
  };

}

// change styles

function button3Clicked() {
  // alert("button 3 clicked!");

  var target1 = $("#target-1");

  if (target1 != null) {
    target1.css("color","red");
  }
}

function button4Clicked() {
  // alert("button4Clicked!");

  var target2 = $("#target-2");

  if (target2 != null) {
    // target2.css("backgroundColor", "orange");   // single property change
    target2.css({"backgroundColor" : "orange", "color" : "red"});
  }
}

// JQuery 

const url = "https://cors-anywhere.herokuapp.com/" +
            "http://www.recipepuppy.com/api/?i=onions,garlic";

log ("Searching for recipes with onion and garlic ...");

$.get(url,
      function(data, status) {
          log("status: " + status);
          var jsonObject = JSON.parse(data)
          jsonObject.results.forEach( function(recipe) { log(recipe.title); } );
      }
);
