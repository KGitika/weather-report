let temperature = 80;

const tempDisplay = document.getElementById("temperature");
const landscape = document.getElementById("landscape");

const updateTemperatureDisplay = () => {
  tempDisplay.textContent = `${temperature}°F`;


  // Apply new landscape based on temp

  if (temperature >= 80) {

    landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (temperature >= 70) {

    landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if (temperature >= 60) {

    landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else if (temperature >= 50) {

    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  } else {

    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  }
};

document.getElementById("increase").addEventListener("click", () => {
  temperature++;
  updateTemperatureDisplay();
});

document.getElementById("decrease").addEventListener("click", () => {
  temperature--;
  updateTemperatureDisplay();
});

// Initial load
updateTemperatureDisplay();