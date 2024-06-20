
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const btn = document.querySelector("#btn");
const temp = document.querySelector("#temp");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  btn.setAttribute("disabled","");
  setTimeout(() => {
    btn.removeAttribute('disabled');
  }, 4000);
}


btn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  btn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    btn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (temp.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (temp.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1200)
}