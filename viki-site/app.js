const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

// first page buttons 1

var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i1;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i1 = 0; i1 < x.length; i1++) {
    x[i1].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "block";  
}

// first page buttons 2

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i2;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i2 = 0; i2 < x.length; i2++) {
    x[i2].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}

// second page buttons 1

var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i3;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i3 = 0; i3 < x.length; i3++) {
    x[i3].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}

// second page buttons 2

var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i4;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i4 = 0; i4 < x.length; i4++) {
    x[i4].style.display = "none";  
  }
  x[slideIndex4-1].style.display = "block";  
}

// third page buttons 1

var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i5;
  var x = document.getElementsByClassName("mySlides5");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i5 = 0; i5 < x.length; i5++) {
    x[i5].style.display = "none";  
  }
  x[slideIndex5-1].style.display = "block";  
}

// third page buttons 2

var slideIndex6 = 1;
showDivs6(slideIndex6);

function plusDivs6(n) {
  showDivs6(slideIndex6 += n);
}

function showDivs6(n) {
  var i6;
  var x = document.getElementsByClassName("mySlides6");
  if (n > x.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = x.length}
  for (i6 = 0; i6 < x.length; i6++) {
    x[i6].style.display = "none";  
  }
  x[slideIndex6-1].style.display = "block";  
}

// fourth page buttons 1

var slideIndex7 = 1;
showDivs7(slideIndex7);

function plusDivs7(n) {
  showDivs7(slideIndex7 += n);
}

function showDivs7(n) {
  var i7;
  var x = document.getElementsByClassName("mySlides7");
  if (n > x.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = x.length}
  for (i7 = 0; i7 < x.length; i7++) {
    x[i7].style.display = "none";  
  }
  x[slideIndex7-1].style.display = "block";  
}

// fourth page buttons 2

var slideIndex8 = 1;
showDivs8(slideIndex8);

function plusDivs8(n) {
  showDivs8(slideIndex8 += n);
}

function showDivs8(n) {
  var i8;
  var x = document.getElementsByClassName("mySlides8");
  if (n > x.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = x.length}
  for (i8 = 0; i8 < x.length; i8++) {
    x[i8].style.display = "none";  
  }
  x[slideIndex8-1].style.display = "block";  
}

// fifth page buttons 1

var slideIndex9 = 1;
showDivs9(slideIndex9);

function plusDivs9(n) {
  showDivs9(slideIndex9 += n);
}

function showDivs9(n) {
  var i9;
  var x = document.getElementsByClassName("mySlides9");
  if (n > x.length) {slideIndex9 = 1}
  if (n < 1) {slideIndex9 = x.length}
  for (i9 = 0; i9 < x.length; i9++) {
    x[i9].style.display = "none";  
  }
  x[slideIndex9-1].style.display = "block";  
}

// fifth page buttons 2

var slideIndex10 = 1;
showDivs10(slideIndex10);

function plusDivs10(n) {
  showDivs10(slideIndex10 += n);
}

function showDivs10(n) {
  var i10;
  var x = document.getElementsByClassName("mySlides10");
  if (n > x.length) {slideIndex10 = 1}
  if (n < 1) {slideIndex10 = x.length}
  for (i10 = 0; i10 < x.length; i10++) {
    x[i10].style.display = "none";  
  }
  x[slideIndex10-1].style.display = "block";  
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
