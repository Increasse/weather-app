const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherByCity = async (city) => {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Could not find weather from API');
            }
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}