let inputEl = document.getElementById("num");

let celsiusToFahrenheitEl = document.getElementById("celToFah");
let kelvinToFahrenheitEl = document.getElementById("kelToFah");
let fahrenheitToCelciusEl = document.getElementById("fahToCel");
let celsiusToKelvinEl = document.getElementById("celToKel");
let kelvinToCelciusEl = document.getElementById("kelToCel");
let fahrenheitToKelvin = document.getElementById("fahToKel");

let submitEl = document.getElementById("submit");
let resultEl = document.getElementById("result");

function convert() {
  if (celsiusToFahrenheitEl.checked) {
    let result = (inputEl.value * 9) / 5 + 32;
    new Typewriter(resultEl, {
      strings: `Your result is ${result.toFixed(1)} °F`,
      autoStart: true,
      cursor: " ",
      delay: 20,
    });
  } else if (kelvinToFahrenheitEl.checked) {
    let result = ((inputEl.value - 273.15) * 9) / 5 + 32;
    new Typewriter(resultEl, {
      strings: `Your result is ${result.toFixed(1)} °F`,
      autoStart: true,
      cursor: " ",
      delay: 20,
    });
  } else if (fahrenheitToCelciusEl.checked) {
    let result = ((inputEl.value - 32) * 5) / 9;
    new Typewriter(resultEl, {
      strings: `Your result is ${result.toFixed(1)} °C`,
      autoStart: true,
      cursor: " ",
      delay: 20,
    });
  } else if (celsiusToKelvinEl.checked) {
    let result = parseFloat(inputEl.value);
    result = result + 273.15;
    new Typewriter(resultEl, {
      strings: `Your result is ${result.toFixed(2)} K`,
      autoStart: true,
      cursor: " ",
      delay: 20,
    });
  } else if (kelvinToCelciusEl.checked) {
    let result = inputEl.value - 273.15;
    new Typewriter(resultEl, {
      strings: `Your result is ${result.toFixed(2)} °C`,
      autoStart: true,
      cursor: " ",
      delay: 20,
    });
  } else if (fahrenheitToKelvin.checked) {
    let result = ((inputEl.value - 32) * 5) / 9 + 273.15;
    new Typewriter(resultEl, {
      strings: `Your result is ${result.toFixed(1)} K`,
      autoStart: true,
      cursor: " ",
      delay: 20,
    });
  }
}

submitEl.addEventListener("click", convert);
