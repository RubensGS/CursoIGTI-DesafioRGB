window.addEventListener('load', start);

var elementsRange = [];
var elementsText = [];
var valueColorRed = 0;
var valueColorGreen = 0;
var valueColorBlue = 0;

function start() {
    createElementsRange();
    createElementsText();
    receiveEventElementRange(elementsRange, elementsText);
}

function createElementsRange() {
  const rangeRed = document.querySelector("#rangeRed");
  const rangeGreen = document.querySelector("#rangeGreen");
  const rangeBlue = document.querySelector("#rangeBlue");

  populateArrayElementsHTML(elementsRange, rangeRed, rangeGreen, rangeBlue);
}

function createElementsText() {
  const textRed = document.querySelector("#textRed");
  const textGreen = document.querySelector("#textGreen");
  const textBlue = document.querySelector("#textBlue");

  populateArrayElementsHTML(elementsText, textRed, textGreen, textBlue);
}

function populateArrayElementsHTML(vectorToBeFilled, ...elements) {
    let currentElementHTML = null;
    for(let index = 0; index < elements.length; index++) {
      currentElementHTML = elements[index]
      vectorToBeFilled.push(currentElementHTML);
    }
    return vectorToBeFilled;
}

function receiveEventElementRange(elementsRange, elementsText) {
    const [rangeRed, rangeGreen, rangeBlue] = elementsRange;
    const [textRed, textGreen, textBlue] = elementsText;

    rangeRed.addEventListener('input', () => {
      valueColorRed = parseInt(rangeRed.value);
      textRed.value = valueColorRed;
      renderVitrineColor(valueColorRed, valueColorGreen, valueColorBlue);
    });

    rangeGreen.addEventListener('input', () => {
      valueColorGreen = parseInt(rangeGreen.value);
      textGreen.value = valueColorGreen;   
      renderVitrineColor(valueColorRed, valueColorGreen, valueColorBlue);
    });

    rangeBlue.addEventListener('input', () => {
      valueColorBlue = parseInt(rangeBlue.value);
      textBlue.value = valueColorBlue;
      renderVitrineColor(valueColorRed, valueColorGreen, valueColorBlue);
    });
}

function renderVitrineColor(rangeRed, rangeGreen, rangeBlue) {
  const vitrine = document.querySelector("#vitrine");
  
  vitrine.setAttribute(
    "style",
    `background-color: rgb(${rangeRed}, ${rangeGreen}, ${rangeBlue})`
  );
}

