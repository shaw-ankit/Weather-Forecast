const apiKey = '0596afb9ec3e641bae1d6928c6d1b8a1';

const  WeatherApi = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}
export default WeatherApi ;