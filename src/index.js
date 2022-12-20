let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let newGameEl = document.getElementById("newGame-Btn");

// <--Set 00 values for guest & home Points->
let homePnt = 00;
let guestPnt = 00;

// <-- Home Points Functions -->
function addPnt1() {
  homePnt += 1;
  homeScoreEl.innerText = homePnt;
}

function addPnt2() {
  homePnt += 2;
  homeScoreEl.innerText = homePnt;
}

function addPnt3() {
  homePnt += 3;
  homeScoreEl.innerText = homePnt;
}

// <-- Guest Points Functions -->
function addGPnt1() {
  guestPnt += 1;
  guestScoreEl.innerText = guestPnt;
}

function addGPnt2() {
  guestPnt += 2;
  guestScoreEl.innerText = guestPnt;
}

function addGPnt3() {
  guestPnt += 3;
  guestScoreEl.innerText = guestPnt;
}

// <--reset Score-->
function newGame() {
  homePnt = 00;
  guestPnt = 00;
  homeScoreEl.innerText = homePnt;
  guestScoreEl.innerText = guestPnt;
}
