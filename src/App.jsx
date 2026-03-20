import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ActivitySuggestions from './components/ActivitySuggestions/ActivitySuggestions';
import { fetchWeatherByCity } from './utils/api';
import Loader from "./components/Loader/Loader.jsx";
import WeatherLayout from "./components/WeatherLayout/WeatherLayout.jsx";

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadDefaultCity = async () => {
            try {
                setIsLoading(true);
                const data = await fetchWeatherByCity('Москва');
                setWeatherData(data);
            } catch (error) {
                setError('Не удалось загрузить данные по умолчанию.');
            } finally {
                setIsLoading(false);
            }
        }

        loadDefaultCity();
    }, []); // [] = Выполнить один раз при монтировании

    const handleSearch = async (city) => {
        setError(null);
        if (!city) return;

        try {
            setIsLoading(true);
            console.log('Запрашиваем погоду для города: ', city);

            const data = await fetchWeatherByCity(city);
            console.log(data);

            setWeatherData(data);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
            setWeatherData(null);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="app">
            <h1>Weather App</h1>
            <Search onSearch={handleSearch} />

            <div className="contentContainer">

                {error && (
                    <div style={{
                        color: 'red',
                        textAlign: 'center',
                        marginBottom: '20px',
                        padding: '10px',
                        background: '#ffebee',
                        borderRadius: '8px'
                    }}>
                        {error}
                    </div>
                )}

                {isLoading && <Loader />}

                {!isLoading && (
                    <WeatherLayout weatherData={weatherData} isLoading={isLoading} />
                )}

            </div>
        </div>
    );
}

export default App;