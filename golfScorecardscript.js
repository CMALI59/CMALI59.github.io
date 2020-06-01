// assign the table row for hole 1 to a variable
var elem
  = document.getElementById("1");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem.children[4].children[0]); 
// assign a function to the + button
elem.children[4].children[0].onclick 
  = function(){add(elem);};
elem.children[4].children[1].onclick 
  = function(){subtract(elem);};

// you don't have to define the function before you use it! 
function add (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

function subtract (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
var elem2
  = document.getElementById("2");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem2.children[4].children[0]); 
// assign a function to the + button
elem2.children[4].children[0].onclick 
  = function(){add1(elem2);};
elem2.children[4].children[1].onclick 
  = function(){subtract1(elem2);};

// you don't have to define the function before you use it! 
function add1 (elem2) {
  if(elem2.children[2].innerHTML == "-") elem2.children[2].innerHTML = "1";
  else {
    let currentScore = elem2.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem2.children[2].innerHTML = currentScore + 1;
  }
}

function subtract1 (elem2) {
  if(elem2.children[2].innerHTML == "-") elem2.children[2].innerHTML = "-1";
  else {
    let currentScore = elem2.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem2.children[2].innerHTML = currentScore - 1;
  }
}
var elem3
  = document.getElementById("3");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem3.children[4].children[0]); 
// assign a function to the + button
elem3.children[4].children[0].onclick 
  = function(){add2(elem3);};
elem3.children[4].children[1].onclick 
  = function(){subtract2(elem3);};

// you don't have to define the function before you use it! 
function add2 (elem3) {
  if(elem3.children[2].innerHTML == "-") elem3.children[2].innerHTML = "1";
  else {
    let currentScore = elem3.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem3.children[2].innerHTML = currentScore + 1;
  }
}

function subtract2 (elem3) {
  if(elem3.children[2].innerHTML == "-") elem3.children[2].innerHTML = "-1";
  else {
    let currentScore = elem3.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem3.children[2].innerHTML = currentScore - 1;
  }
}
var elem4
  = document.getElementById("4");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem4.children[4].children[0]); 
// assign a function to the + button
elem4.children[4].children[0].onclick 
  = function(){add4(elem4);};
elem4.children[4].children[1].onclick 
  = function(){subtract4(elem4);};

// you don't have to define the function before you use it! 
function add4 (elem4) {
  if(elem4.children[2].innerHTML == "-") elem4.children[2].innerHTML = "1";
  else {
    let currentScore = elem4.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem4.children[2].innerHTML = currentScore + 1;
  }
}

function subtract4 (elem4) {
  if(elem4.children[2].innerHTML == "-") elem4.children[2].innerHTML = "-1";
  else {
    let currentScore = elem4.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem4.children[2].innerHTML = currentScore - 1;
  }
}
var elem5
  = document.getElementById("5");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem5.children[4].children[0]); 
// assign a function to the + button
elem5.children[4].children[0].onclick 
  = function(){add5(elem5);};
elem5.children[4].children[1].onclick 
  = function(){subtract5(elem5);};

// you don't have to define the function before you use it! 
function add5 (elem5) {
  if(elem5.children[2].innerHTML == "-") elem5.children[2].innerHTML = "1";
  else {
    let currentScore = elem5.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem5.children[2].innerHTML = currentScore + 1;
  }
}

function subtract5 (elem5) {
  if(elem5.children[2].innerHTML == "-") elem5.children[2].innerHTML = "-1";
  else {
    let currentScore = elem5.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem5.children[2].innerHTML = currentScore - 1;
  }
}
var elem6
  = document.getElementById("6");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem6.children[4].children[0]); 
// assign a function to the + button
elem6.children[4].children[0].onclick 
  = function(){add6(elem6);};
elem6.children[4].children[1].onclick 
  = function(){subtract6(elem6);};

// you don't have to define the function before you use it! 
function add6 (elem6) {
  if(elem6.children[2].innerHTML == "-") elem6.children[2].innerHTML = "1";
  else {
    let currentScore = elem6.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem6.children[2].innerHTML = currentScore + 1;
  }
}

function subtract6 (elem6) {
  if(elem6.children[2].innerHTML == "-") elem6.children[2].innerHTML = "-1";
  else {
    let currentScore = elem6.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem6.children[2].innerHTML = currentScore - 1;
  }
}
var elem7
  = document.getElementById("7");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem7.children[4].children[0]); 
// assign a function to the + button
elem7.children[4].children[0].onclick 
  = function(){add7(elem7);};
elem7.children[4].children[1].onclick 
  = function(){subtract7(elem7);};

// you don't have to define the function before you use it! 
function add7 (elem7) {
  if(elem7.children[2].innerHTML == "-") elem7.children[2].innerHTML = "1";
  else {
    let currentScore = elem7.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem7.children[2].innerHTML = currentScore + 1;
  }
}

function subtract7 (elem7) {
  if(elem7.children[2].innerHTML == "-") elem7.children[2].innerHTML = "-1";
  else {
    let currentScore = elem7.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem7.children[2].innerHTML = currentScore - 1;
  }
}
var elem8
  = document.getElementById("8");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem8.children[4].children[0]); 
// assign a function to the + button
elem8.children[4].children[0].onclick 
  = function(){add8(elem8);};
elem8.children[4].children[1].onclick 
  = function(){subtract8(elem8);};

// you don't have to define the function before you use it! 
function add8 (elem8) {
  if(elem8.children[2].innerHTML == "-") elem8.children[2].innerHTML = "1";
  else {
    let currentScore = elem8.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem8.children[2].innerHTML = currentScore + 1;
  }
}

function subtract8 (elem8) {
  if(elem8.children[2].innerHTML == "-") elem8.children[2].innerHTML = "-1";
  else {
    let currentScore = elem8.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem8.children[2].innerHTML = currentScore - 1;
  }
}
var elem9
  = document.getElementById("9");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem9.children[4].children[0]); 
// assign a function to the + button
elem9.children[4].children[0].onclick 
  = function(){add9(elem9);};
elem9.children[4].children[1].onclick 
  = function(){subtract1(elem9);};

// you don't have to define the function before you use it! 
function add9 (elem9) {
  if(elem9.children[2].innerHTML == "-") elem9.children[2].innerHTML = "1";
  else {
    let currentScore = elem9.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem9.children[2].innerHTML = currentScore + 1;
  }
}

function subtract9 (elem9) {
  if(elem9.children[2].innerHTML == "-") elem9.children[2].innerHTML = "-1";
  else {
    let currentScore = elem9.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem9.children[2].innerHTML = currentScore - 1;
  }
}
var elem10
  = document.getElementById("10");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem10.children[4].children[0]); 
// assign a function to the + button
elem10.children[4].children[0].onclick 
  = function(){add10(elem10);};
elem10.children[4].children[1].onclick 
  = function(){subtract10(elem10);};

// you don't have to define the function before you use it! 
function add10 (elem10) {
  if(elem10.children[2].innerHTML == "-") elem10.children[2].innerHTML = "1";
  else {
    let currentScore = elem10.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem10.children[2].innerHTML = currentScore + 1;
  }
}

function subtract10 (elem10) {
  if(elem10.children[2].innerHTML == "-") elem10.children[2].innerHTML = "-1";
  else {
    let currentScore = elem10.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem10.children[2].innerHTML = currentScore - 1;
  }
}
var elem11
  = document.getElementById("11");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem11.children[4].children[0]); 
// assign a function to the + button
elem11.children[4].children[0].onclick 
  = function(){add11(elem11);};
elem11.children[4].children[1].onclick 
  = function(){subtract11(elem11);};

// you don't have to define the function before you use it! 
function add11 (elem11) {
  if(elem11.children[2].innerHTML == "-") elem2.children[2].innerHTML = "1";
  else {
    let currentScore = elem11.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem11.children[2].innerHTML = currentScore + 1;
  }
}

function subtract11 (elem11) {
  if(elem11.children[2].innerHTML == "-") elem11.children[2].innerHTML = "-1";
  else {
    let currentScore = elem11.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem11.children[2].innerHTML = currentScore - 1;
  }
}
var elem12
  = document.getElementById("12");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem12.children[4].children[0]); 
// assign a function to the + button
elem12.children[4].children[0].onclick 
  = function(){add12(elem12);};
elem12.children[4].children[1].onclick 
  = function(){subtract12(elem12);};

// you don't have to define the function before you use it! 
function add12 (elem12) {
  if(elem12.children[2].innerHTML == "-") elem12.children[2].innerHTML = "1";
  else {
    let currentScore = elem12.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem12.children[2].innerHTML = currentScore + 1;
  }
}

function subtract12 (elem12) {
  if(elem12.children[2].innerHTML == "-") elem12.children[2].innerHTML = "-1";
  else {
    let currentScore = elem12.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem12.children[2].innerHTML = currentScore - 1;
  }
}
var elem13
  = document.getElementById("13");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem13.children[4].children[0]); 
// assign a function to the + button
elem13.children[4].children[0].onclick 
  = function(){add13(elem13);};
elem13.children[4].children[1].onclick 
  = function(){subtract13(elem13);};

// you don't have to define the function before you use it! 
function add13 (elem13) {
  if(elem13.children[2].innerHTML == "-") elem13.children[2].innerHTML = "1";
  else {
    let currentScore = elem13.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem13.children[2].innerHTML = currentScore + 1;
  }
}

function subtract13 (elem13) {
  if(elem13.children[2].innerHTML == "-") elem13.children[2].innerHTML = "-1";
  else {
    let currentScore = elem13.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem13.children[2].innerHTML = currentScore - 1;
  }
}
var elem14
  = document.getElementById("14");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem14.children[4].children[0]); 
// assign a function to the + button
elem14.children[4].children[0].onclick 
  = function(){add14(elem14);};
elem14.children[4].children[1].onclick 
  = function(){subtract14(elem14);};

// you don't have to define the function before you use it! 
function add14 (elem14) {
  if(elem14.children[2].innerHTML == "-") elem14.children[2].innerHTML = "1";
  else {
    let currentScore = elem14.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem14.children[2].innerHTML = currentScore + 1;
  }
}

function subtract14 (elem14) {
  if(elem2.children[2].innerHTML == "-") elem14.children[2].innerHTML = "-1";
  else {
    let currentScore = elem14.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem14.children[2].innerHTML = currentScore - 1;
  }
}
var elem15
  = document.getElementById("15");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem15.children[4].children[0]); 
// assign a function to the + button
elem15.children[4].children[0].onclick 
  = function(){add15(elem15);};
elem15.children[4].children[1].onclick 
  = function(){subtract15(elem15);};

// you don't have to define the function before you use it! 
function add15 (elem15) {
  if(elem15.children[2].innerHTML == "-") elem15.children[2].innerHTML = "1";
  else {
    let currentScore = elem15.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem15.children[2].innerHTML = currentScore + 1;
  }
}

function subtract15 (elem15) {
  if(elem15.children[2].innerHTML == "-") elem15.children[2].innerHTML = "-1";
  else {
    let currentScore = elem15.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem15.children[2].innerHTML = currentScore - 1;
  }
}
var elem16
  = document.getElementById("16");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem16.children[4].children[0]); 
// assign a function to the + button
elem16.children[4].children[0].onclick 
  = function(){add16(elem16);};
elem16.children[4].children[1].onclick 
  = function(){subtract16(elem14);};

// you don't have to define the function before you use it! 
function add16 (elem16) {
  if(elem16.children[2].innerHTML == "-") elem16.children[2].innerHTML = "1";
  else {
    let currentScore = elem16.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem16.children[2].innerHTML = currentScore + 1;
  }
}

function subtract16 (elem16) {
  if(elem16.children[2].innerHTML == "-") elem16.children[2].innerHTML = "-1";
  else {
    let currentScore = elem16.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem16.children[2].innerHTML = currentScore - 1;
  }
}
var elem17
  = document.getElementById("17");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem17.children[4].children[0]); 
// assign a function to the + button
elem17.children[4].children[0].onclick 
  = function(){add17(elem17);};
elem17.children[4].children[1].onclick 
  = function(){subtract17(elem17);};

// you don't have to define the function before you use it! 
function add17 (elem17) {
  if(elem17.children[2].innerHTML == "-") elem17.children[2].innerHTML = "1";
  else {
    let currentScore = elem17.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem17.children[2].innerHTML = currentScore + 1;
  }
}

function subtract17 (elem17) {
  if(elem17.children[2].innerHTML == "-") elem17.children[2].innerHTML = "-1";
  else {
    let currentScore = elem17.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem17.children[2].innerHTML = currentScore - 1;
  }
}
var elem18
  = document.getElementById("18");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem18.children[4].children[0]); 
// assign a function to the + button
elem18.children[4].children[0].onclick 
  = function(){add1(elem18);};
elem18.children[4].children[1].onclick 
  = function(){subtract18(elem18);};

// you don't have to define the function before you use it! 
function add18 (elem18) {
  if(elem18.children[2].innerHTML == "-") elem18.children[2].innerHTML = "1";
  else {
    let currentScore = elem18.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem18.children[2].innerHTML = currentScore + 1;
  }
}

function subtract18 (elem18) {
  if(elem18.children[2].innerHTML == "-") elem18.children[2].innerHTML = "-1";
  else {
    let currentScore = elem18.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem18.children[2].innerHTML = currentScore - 1;
  }
}


/* your mission: 
1. make all the + buttons add 1 to the proper hole. 
2. make all the - buttons subtract 1 from the proper hole.
3. update the "Over" column to show the difference between par and score.
4. update row #19 with appropriate totals. Note: if a person has not finished a round, then Over/Under should apply only to holes that have been updated.
5. Add a new button, C, which clears the current score for a given hole
6. advanced: put circles around birdies and squares around bogeys!
*/
