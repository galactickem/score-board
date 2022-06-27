let score2El = document.getElementById("bsquare2");

function addOne() {
    let score1El = document.getElementById("bsquare");
    let score1in = document.getElementById("bsquare").innerText;
    score1in = parseInt(score1in);
    score1El.textContent = score1in + 1;
}

function addTwo() {
  let score1El = document.getElementById("bsquare");
  let score1in = document.getElementById("bsquare").innerText;
  score1in = parseInt(score1in);
  score1El.textContent = score1in + 2;
}

function addThree() {
  let score1El = document.getElementById("bsquare");
  let score1in = document.getElementById("bsquare").innerText;
  score1in = parseInt(score1in);
  score1El.textContent = score1in + 3;
}

function addOne2() {
    let score2El = document.getElementById("bsquare2");
    let score2in = document.getElementById("bsquare2").innerText;
    score2in = parseInt(score2in);
    score2El.textContent = score2in + 1;
}

function addTwo2() {
    let score2El = document.getElementById("bsquare2");
    let score2in = document.getElementById("bsquare2").innerText;
    score2in = parseInt(score2in);
    score2El.textContent = score2in + 2;
}

function addThree2() {
    let score2El = document.getElementById("bsquare2");
    let score2in = document.getElementById("bsquare2").innerText;
    score2in = parseInt(score2in);
    score2El.textContent = score2in + 3;
}

function reset() {
    let score1El = document.getElementById("bsquare");
    let score2El = document.getElementById("bsquare2");
    score1El.textContent = 0;
    score2El.textContent = 0;

}
