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

// Initial load
updateTemperatureDisplay();

updateGreeting(); // Initial call
setInterval(updateGreeting, 3600000);
