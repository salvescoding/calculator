const screen = document.getElementById('screen');

function clearScreen() {
  screen.value = "";
}

function deleteLast() {
  let all = screen.value;
  let lessOne = all.slice(0, -1);
  screen.value = lessOne;
}

function display(x){
  screen.value += x;
}

function calculate() {
  let val = screen.value;
  val = eval(val);
  screen.value = val;
}












