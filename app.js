// PULLING API AND SETTING KEY
const apiKey = "bb3d1503a5e34683b1427979542d355e";
const apiUrl = "https://api.weatherbit.io/v2.0/current?";
const userCity = document.getElementById("user-city");

async function checkWeather(city) {
	let cityPost = `&city=${city}&country=US`;

	fetch(`${apiUrl}&key=${apiKey}${cityPost}`)
		.then((data) => data.json())
		.then((data) => generateCards(data));
}

// PULLING API AND SETTING KEY

//PULLING HTML CONTENT
const subButton = document.getElementById("submit");
const cityName = document.getElementById("city-name");
const weatherCurrent = document.getElementById("weather-description");
const tempCur = document.getElementById("cur-temp");
const iconWeather = document.getElementById("icon-weather");
const cloundCoverage = document.getElementById("cloud-coverage");
const windDirection = document.getElementById("wind-direction");
const airQlt = document.getElementById("air-quality");
const vison = document.getElementById("vision");
//PULLING HTML CONTENT

// GETTING USER INPUT
const userInput = () => {
	const userCity = document.getElementById("user-city").value;

	if (userCity === "") {
		alert("please enter city");
	} else {
		checkWeather(userCity);
	}
};
// GETTING USER INPUT

// SETTING INFORMATION INTO HTML FROM API
const generateCards = (data) => {
	const celToFahr = Math.round(data.data[0].app_temp * 1.8 + 32);

	cityName.innerHTML = `${data.data[0].city_name}`;
	weatherCurrent.innerHTML = `${data.data[0].weather.description}`;
	tempCur.innerHTML = `${celToFahr}&deg;`;
	iconWeather.src = `image/icons/icons/${data.data[0].weather.icon}.png`;
	cloundCoverage.innerHTML = `Coverage: ${data.data[0].clouds}%`;
	airQlt.innerHTML = `Air Quality: ${data.data[0].aqi}`;
	windDirection.innerHTML = `Wind Direction: ${data.data[0].wind_cdir}`;
	vison.innerHTML = `Visibility: ${data.data[0].vis} Miles`;
};
// SETTING INFORMATION INTO HTML FROM API

// EVENT LISTENER
subButton.addEventListener("click", userInput);
// EVENT LISTENER
