
    var elem
  = document.getElementById("1");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem.children[4].children[0]); 
// assign a function to the + button
elem.children[4].children[0].onclick 
  = function(){add1(elem);};
elem.children[4].children[1].onclick 
  = function(){subtract1(elem);};
elem.children[4].children[2].onclick 
  = function(){clear(elem);};

var elem2
  = document.getElementById("2");
console.log(elem2.children[4].children[0]); 
elem2.children[4].children[0].onclick 
  = function(){add1(elem2);};
elem2.children[4].children[1].onclick 
  = function(){subtract1(elem2);};
elem2.children[4].children[2].onclick 
  = function(){clear(elem2);};

var elem3
  = document.getElementById("3");
console.log(elem3.children[4].children[0]); 
elem3.children[4].children[0].onclick 
  = function(){add1(elem3);};
elem3.children[4].children[1].onclick 
  = function(){subtract1(elem3);};
elem3.children[4].children[2].onclick 
  = function(){clear(elem3);};

var elem4
  = document.getElementById("4");
console.log(elem4.children[4].children[0]); 
elem4.children[4].children[0].onclick 
  = function(){add1(elem4);};
elem4.children[4].children[1].onclick 
  = function(){subtract1(elem4);};
elem4.children[4].children[2].onclick 
  = function(){clear(elem4);};

var elem5
  = document.getElementById("5");
console.log(elem5.children[4].children[0]); 
elem5.children[4].children[0].onclick 
  = function(){add1(elem5);};
elem5.children[4].children[1].onclick 
  = function(){subtract1(elem5);};
elem5.children[4].children[2].onclick 
  = function(){clear(elem5);};

var elem6
  = document.getElementById("6");
console.log(elem6.children[4].children[0]); 
elem6.children[4].children[0].onclick 
  = function(){add1(elem6);};
elem6.children[4].children[1].onclick 
  = function(){subtract1(elem6);};
elem6.children[4].children[2].onclick 
  = function(){clear(elem6);};

var elem7
  = document.getElementById("7");
console.log(elem7.children[4].children[0]); 
elem7.children[4].children[0].onclick 
  = function(){add1(elem7);};
elem7.children[4].children[1].onclick 
  = function(){subtract1(elem7);};
elem7.children[4].children[2].onclick 
  = function(){clear(elem7);};

var elem8
  = document.getElementById("8");
console.log(elem8.children[4].children[0]); 
elem8.children[4].children[0].onclick 
  = function(){add1(elem8);};
elem8.children[4].children[1].onclick 
  = function(){subtract1(elem8);};
elem8.children[4].children[2].onclick 
  = function(){clear(elem8);};

var elem9
  = document.getElementById("9");
console.log(elem2.children[4].children[0]); 
elem9.children[4].children[0].onclick 
  = function(){add1(elem9);};
elem9.children[4].children[1].onclick 
  = function(){subtract1(elem9);};
elem9.children[4].children[2].onclick 
  = function(){clear(elem9);};

var elem10
  = document.getElementById("10");
console.log(elem10.children[4].children[0]); 
elem10.children[4].children[0].onclick 
  = function(){add1(elem10);};
elem10.children[4].children[1].onclick 
  = function(){subtract1(elem10);};
elem10.children[4].children[2].onclick 
  = function(){clear(elem10);};

var elem11
  = document.getElementById("11");
console.log(elem11.children[4].children[0]); 
elem11.children[4].children[0].onclick 
  = function(){add1(elem11);};
elem11.children[4].children[1].onclick 
  = function(){subtract1(elem11);};
elem11.children[4].children[2].onclick 
  = function(){clear(elem11);};

var elem12
  = document.getElementById("12");
console.log(elem12.children[4].children[0]); 
elem12.children[4].children[0].onclick 
  = function(){add1(elem12);};
elem12.children[4].children[1].onclick 
  = function(){subtract1(elem12);};
elem12.children[4].children[2].onclick 
  = function(){clear(elem12);};

var elem13
  = document.getElementById("13");
console.log(elem13.children[4].children[0]); 
elem13.children[4].children[0].onclick 
  = function(){add1(elem13);};
elem13.children[4].children[1].onclick 
  = function(){subtract1(elem13);};
elem13.children[4].children[2].onclick 
  = function(){clear(elem13);};

var elem14
  = document.getElementById("14");
console.log(elem14.children[4].children[0]); 
elem14.children[4].children[0].onclick 
  = function(){add1(elem14);};
elem14.children[4].children[1].onclick 
  = function(){subtract1(elem14);};
elem14.children[4].children[2].onclick 
  = function(){clear(elem14);};

var elem15
  = document.getElementById("15");
console.log(elem15.children[4].children[0]); 
elem15.children[4].children[0].onclick 
  = function(){add1(elem15);};
elem15.children[4].children[1].onclick 
  = function(){subtract1(elem15);};
elem15.children[4].children[2].onclick 
  = function(){clear(elem15);};

var elem16
  = document.getElementById("16");
console.log(elem16.children[4].children[0]); 
elem16.children[4].children[0].onclick 
  = function(){add1(elem16);};
elem16.children[4].children[1].onclick 
  = function(){subtract1(elem16);};
elem16.children[4].children[2].onclick 
  = function(){clear(elem16);};

var elem17
  = document.getElementById("17");
console.log(elem17.children[4].children[0]); 
elem17.children[4].children[0].onclick 
  = function(){add1(elem17);};
elem17.children[4].children[1].onclick 
  = function(){subtract1(elem17);};
elem17.children[4].children[2].onclick 
  = function(){clear(elem17);};

var elem18
  = document.getElementById("18");
console.log(elem18.children[4].children[0]); 
elem18.children[4].children[0].onclick 
  = function(){add1(elem18);};
elem18.children[4].children[1].onclick 
  = function(){subtract1(elem18);};
elem18.children[3]
  = function(){over(elem18);};
elem18.children[4].children[2].onclick 
  = function(){clear(elem18);};



// you don't have to define the function before you use it! 
function add1 (elem) {
  let par = elem.children[1].innerHTML;
  par = Number.parseInt(par);
  if(elem.children[2].innerHTML == "-") {elem.children[2].innerHTML = "1";
  elem.children[3].innerHTML = 1 - par}                                      
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[3].innerHTML = currentScore - par +1;
    elem.children[2].innerHTML = currentScore + 1;
  }
}

function subtract1 (elem) {
    let par = elem.children[1].innerHTML;
    par = Number.parseInt(par);
  if(elem.children[2].innerHTML == "-") {elem.children[2].innerHTML = "-1";    
    elem.children[3].innerHTML = -1 - par;}
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[3].innerHTML = currentScore - par -1;
    elem.children[2].innerHTML = currentScore - 1;
    
  }
}
function clear (elem) {
 elem.children[3].innerHTML = "-";
  elem.children[2].innerHTML = "-";
  }
