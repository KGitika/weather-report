let temperature = 80;
let color;

const tempDisplay = document.getElementById('temperature');
const landscape = document.getElementById('landscape');

const updateGreeting = () => {
	const now = new Date();
	const hour = now.getHours();
	let greeting;
	if (hour < 12) {
		greeting = 'Good Morning!';
	} else if (hour < 18) {
		greeting = 'Good Afternoon!';
	} else {
		greeting = 'Good Evening!';
	}
	document.getElementById('greeting').textContent = greeting;
};

const updateTemperatureDisplay = () => {
	tempDisplay.textContent = `${temperature}°F`;

	// Apply new landscape based on temp

	if (temperature >= 80) {
		color = 'red';
		landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
	} else if (temperature >= 70) {
		color = 'orange';
		landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
	} else if (temperature >= 60) {
		color = 'yellow';
		landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
	} else if (temperature >= 50) {
		color = 'green';
		landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
	} else {
		color = 'teal';
		landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
	}
	tempDisplay.style.color = color;
};

// #change color of temp based on degrees

document.getElementById('increase').addEventListener('click', () => {
	temperature++;
	updateTemperatureDisplay();
});

document.getElementById('decrease').addEventListener('click', () => {
	temperature--;
	updateTemperatureDisplay();
});

// UPDATE CITY NAME BASED ON INPUT
document.addEventListener('DOMContentLoaded', () => {
	const cityInput = document.getElementById('cityNameInput');
	const cityDisplay = document.getElementById('cityNameDisplay');
	const resetButton = document.getElementById('cityNameReset');

	cityInput.addEventListener('input', () => {
		cityDisplay.textContent = cityInput.value;
	});

	resetButton.addEventListener('click', () => {
		cityInput.value = '';
		cityDisplay.textContent = 'City Name'; //default
	});
});

const getLocation = (city) => {
	axios
		.get(`http://localhost:5000/location?q=${city}`)
		.then((response) => {
			const lat = response.data[0].lat;
			const lon = response.data[0].lon;
			getWeather(lat, lon);
		})
		.catch((error) => {
			console.error('Error fetching location', error);
		});
};

const getWeather = (lat, lon) => {
	axios
		.get(`http://localhost:5000/location?lat=${lat}&lon=${lon}`)
		.then((response) => {
			const tempK = response.data.current.temp;
			const tempF = Math.round(((tempK - 273.15) * 9) / 5 + 32);
			tempDisplay.textContent = tempF;
		})
		.catch((error) => {
			console.error('Error featching weather:', error);
		});
};

document.getElementById('getWeatherBtn').addEventListener('click', () => {
	const city = document.getElementById('cityNameDisplay').textContent;
	getLocation(city);
});
// Initial load
updateTemperatureDisplay();

updateGreeting(); // Initial call
setInterval(updateGreeting, 3600000);
