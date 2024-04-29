const apiKey = "bb3d1503a5e34683b1427979542d355e";
const apiUrl = "https://api.weatherbit.io/v2.0/current?";
const userCity = document.getElementById("user-city");
const subButton = document.getElementById("submit");

async function checkWeather(city) {
	let cityPost = `&city=${city}&country=US`;

	fetch(`${apiUrl}&key=${apiKey}${cityPost}`)
		.then((data) => data.json())
		.then((data) => generateCards(data));
}

const userInput = () => {
	const userCity = document.getElementById("user-city").value;

	if (userCity === "") {
		alert("please enter city");
	} else {
		checkWeather(userCity);
	}
};

const generateCards = (data) => {
	const cityName = document.getElementById("city-name");
	const weatherCurrent = document.getElementById("weather-description");
	const tempCur = document.getElementById("cur-temp");
	const iconWeather = document.getElementById("icon-weather");
	const cloundCoverage = document.getElementById("cloud-coverage");
	const windDirection = document.getElementById("wind-direction");
	const sunrise = document.getElementById("sunrise");
	const sunset = document.getElementById("sunset");
  

	const celToFahr = Math.round(data.data[0].app_temp * 1.8 + 32);

	cityName.innerHTML = `${data.data[0].city_name}`;
	weatherCurrent.innerHTML = `Weather Description: ${data.data[0].weather.description}`;
	tempCur.innerHTML = `Current Tempature: ${celToFahr}&deg;`;
	iconWeather.src = `image/icons/icons/${data.data[0].weather.icon}.png`
	cloundCoverage.innerHTML = `Cloud Coverage: ${data.data[0].clouds}%`
	windDirection.innerHTML = `Wind Direction: ${data.data[0].wind_cdir}`
	sunrise.innerHTML = `Sunrise: ${data.data[0].sunrise}`
	sunset.innerHTML = `Sunrise: ${data.data[0].sunset}`
};

subButton.addEventListener("click", userInput);
