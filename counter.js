let number = 0;

function addOne() {
  number++;
  renderNumber();
}

function subtractOne() {
  number--;
  renderNumber();
}

function resetValue() {
  number = 0;
  renderNumber();
}

function renderNumber() {
  const numberHtml = document.getElementById("numberHtml");
  numberHtml.innerText = number;
}
