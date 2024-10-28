
check.addEventListener('click', () => {
    const cityInput = document.getElementById('city');
    const check = document.getElementById('check');
    const showInfo = document.getElementById('show');
    const apikey = `9a431fea030ca2cf85b47f43b85899e1`;
    const city = cityInput.value.trim();

        if (city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("City not found");
                    }
                    return response.json();
                })
                .then(data => {
                    showInfo.innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                    `;
                    cityInput.value = ''
                })
                .catch(error => {
                    showInfo.innerHTML = `<p class="text-danger">City not found. Please try again.</p>`;
                    console.error('Error fetching weather data:', error);
                });
        } else {
            showInfo.innerHTML = `<p class="text-warning">Please enter a city name.</p>`;
        }

    });
