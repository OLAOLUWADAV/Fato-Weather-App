
function checkWeather(){

    const check = document.getElementById('check');
    const cityInput = document.getElementById('city');
    // const showInfo = document.getElementById('show');
    const showInfo = document.querySelector('#show')
    const apikey = `9a431fea030ca2cf85b47f43b85899e`;
    const city = cityInput.value.trim();
    const image = document.getElementById('image')
    

        if (city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("City not found");
                    }``
                    return response.json();
                })
                .then(data => {
                    // const weatherCondition = data.weather[0].main.toLowerCase();
                    // document.body.style.backgroundImage = `url('/images/${weatherCondition}.jpg')`;

                    
                    console.log(data);
                    document.body.style.marginTop = '1vh'
                    showInfo.innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp} °C</p>
                        <p>Feels like: ${data.main.feels_like} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' /> 
                        <p>Wind Speed: ${data.wind.speed} m/s, Direction: ${data.wind.deg}°</p>
                        <p>Humidity: ${data.main.humidity}%</p>`
                    cityInput.value = ''
                })
                .catch(error => {
                    showInfo.innerHTML = `<p class="text-danger">City not found. Please try again.</p>`;
                    console.error('Error fetching weather data:', error);
                });
        } else {
            showInfo.innerHTML = `<p class="text-warning">Please enter a city name.</p>`;
        }

    }

    const check = document.getElementById('check');
    const cityInput = document.getElementById('city')

    cityInput.addEventListener('keydown', (events)=>{
        if(events.key === 'Enter'){
            events.preventDefault()
            checkWeather()
        }
    })
    
