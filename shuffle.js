/*
  Author: san-chuan hung (sanchuah@andrew.cmu.edu)
  2015/ 11/ 06
*/

var isHover = false;

var i = 0;
var pages = $(".page").toArray();

function next() {
  if (!isHover) {
    $(pages[i]).css("display", "none");
    var N = pages.length;
    i = (i + 1) % N;
    $(pages[i]).css("display", "initial");
  }
}

