const rangeRed = document.querySelector("#rangeRed");
const rangeGreen = document.querySelector("#rangeGreen");
const rangeBlue = document.querySelector("#rangeBlue");

const textRed = document.querySelector("#textRed");
const textGreen = document.querySelector("#textGreen");
const textBlue = document.querySelector("#textBlue");

const vitrine = document.querySelector("#vitrine");

start();

function start() {
  function handleChange() {
    textRed.value = parseInt(rangeRed.value);
    textGreen.value = parseInt(rangeGreen.value);
    textBlue.value = parseInt(rangeBlue.value);

    vitrine.setAttribute(
      "style",
      `background-color: rgb(${parseInt(rangeRed.value)}
                                    ,${parseInt(rangeGreen.value)},
                                     ${parseInt(rangeBlue.value)})`
    );
  }
  rangeRed.addEventListener("change", handleChange);
  rangeGreen.addEventListener("change", handleChange);
  rangeBlue.addEventListener("change", handleChange);
}
