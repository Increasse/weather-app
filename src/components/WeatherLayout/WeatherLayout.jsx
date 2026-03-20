import styles from './WeatherLayout.module.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import ActivitySuggestions from '../ActivitySuggestions/ActivitySuggestions';

function WeatherLayout({ weatherData, isLoading, error }) {
    // Если нет данных или ошибка/загрузка, показывает обычную карточку
    if (!weatherData || isLoading || error) {
        return (
            <WeatherCard
                weatherData={weatherData}
                isLoading={isLoading}
                error={error}
            />
        );
    }

    return (
        <div className={styles.layout}>
            <div className={styles.weatherColumn}>
                <WeatherCard
                    weatherData={weatherData}
                    isLoading={isLoading}
                    error={error}
                    simplified={true}
                />
            </div>

            <div className={styles.suggestionsColumn}>
                <ActivitySuggestions weatherData={weatherData} />
            </div>
        </div>
    );
}

export default WeatherLayout;