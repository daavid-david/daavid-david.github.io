
var i = 0;
var executed = false;
const knowledgeBars = document.getElementById("knowledge")

var elem = document.getElementById("myBar1");
var elem2 = document.getElementById("myBar2");
var elem3 = document.getElementById("myBar3");
var elem4 = document.getElementById("myBar4");

elem.style.width = 0;
elem2.style.width = 0;
elem3.style.width = 0;
elem4.style.width = 0;

function move_bars() {
     if (i == 0 && !executed) {
          i = 1;
          var width = 1;
          var id = setInterval(frame, 20);
          function frame() {
          if (width >= 100) {
          clearInterval(id);
          i = 0;
          } else {
               width++;
               elem.style.width = width + "%";
               elem2.style.width = width + "%";
               elem3.style.width = width + "%";
               elem4.style.width = width + "%";
          }
     }
     }
     executed = true;
};

knowledgeBars.addEventListener("mouseover", move_bars)


$(document).ready(function(){
     $('html').animate({scrollTop:0}, 1);
     $('body').animate({scrollTop:0}, 1);
 });