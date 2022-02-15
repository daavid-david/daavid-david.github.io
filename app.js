
var i = 0;
var executed = false;
const knowledgeBars = document.getElementById("knowledge")

var elem1 = document.getElementById("myBar1");
var elem2 = document.getElementById("myBar2");
var elem3 = document.getElementById("myBar3");
var elem4 = document.getElementById("myBar4");

function move1() {
     if (i == 0 && !executed) {
          i = 1;
          var width = 1;
          var id = setInterval(frame, 15);
          function frame() {
          if (width >= 90) {
          clearInterval(id);
          i = 0;
          } else {
               width++;
               elem1.style.width = width + "%";
          }
     }
     }
};

function move2() {
     if (i == 0 && !executed) {
          i = 1;
          var width = 1;
          var id = setInterval(frame, 30);
          function frame() {
          if (width >= 60) {
          clearInterval(id);
          i = 0;
          } else {
               width++;
               elem2.style.width = width + "%";
          }
     }
     }
};

function move3() {
     if (i == 0 && !executed) {
          i = 1;
          var width = 1;
          var id = setInterval(frame, 30);
          function frame() {
          if (width >= 30) {
          clearInterval(id);
          i = 0;
          } else {
               width++;
               elem3.style.width = width + "%";
          }
     }
     }
};

function move4() {
     if (i == 0 && !executed) {
          i = 1;
          var width = 1;
          var id = setInterval(frame, 30);
          function frame() {
          if (width >= 98) {
          clearInterval(id);
          i = 0;
          } else {
               width++;
               elem4.style.width = width + "%";
          }
     }
     }
     executed = true;
};

knowledgeBars.addEventListener("mouseover", move1)
knowledgeBars.addEventListener("mouseover", move2)
knowledgeBars.addEventListener("mouseover", move3)
knowledgeBars.addEventListener("mouseover", move4)

$(document).ready(function(){
     $('html').animate({scrollTop:0}, 1);
     $('body').animate({scrollTop:0}, 1);
 });