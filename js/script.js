// Created by: Logan Rodriguez
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

//constant
const WARM = 0

//function
function answer () {
  let sentence = ""
//user input
  let temperature = parseFloat(document.getElementById('celsius').value)

  //if statements
  if (temperature > WARM){
    sentence = "It is warm outside. No need to bring a jacket today!"
  }
  else {
    sentence = "It is quite cold outside. Remember your jacket!"
  }

  //display the results
    document.getElementById('answer').innerHTML = sentence
}