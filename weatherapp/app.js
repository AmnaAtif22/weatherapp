const apiKey = '5de1e610ae5b90cc96a67560140f0574';

document.getElementById('search-btn').addEventListener('click', getWeather);
function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === "") {
        alert("Please enter a city.");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }
            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('city-name').textContent = cityName;
            document.getElementById('temp').textContent = `Temperature: ${temp}°C`;
            document.getElementById('description').textContent = `Condition: ${description}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}