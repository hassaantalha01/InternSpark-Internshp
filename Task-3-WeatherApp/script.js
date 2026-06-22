console.log("JS Loaded Successfully");

const apiKey = "Your API key";


async function getWeather() {

    const district = document.getElementById("districtSelect").value;

    if (!district) {
        alert("Please select a district");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${district},IN&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod != 200) {
            alert(data.message);
            return;
        }

        document.getElementById("weatherCard").style.display = "block";

        document.getElementById("city").innerText = data.name;

        document.getElementById("temp").innerText =
        `🌡 Temperature: ${data.main.temp} °C`;

        document.getElementById("condition").innerText =
        `☁ Condition: ${data.weather[0].description}`;

        document.getElementById("humidity").innerText =
        `💧 Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
        `🌬 Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {

        console.error(error);
        alert("Unable to fetch weather data");
    }
}
