import styles from './WeatherCard.module.css';

function WeatherCard({weatherData, isLoading, simplified = false}) {
    if (isLoading) {
        return null;
    }

    if (!weatherData) {
        return (
            <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🌤️</div>
                <h3>Погода здесь будет красивой</h3>
                <p>Введите название города, чтобы узнать текущую погоду</p>
            </div>
        )
    }

    const { name, main, weather, wind } = weatherData;

    const description = weather[0].description;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    if (simplified) {
        return (
            <div className={styles.simplifiedCard}>
                <div className={styles.simplifiedHeader}>
                    <h2 className={styles.simplifiedCityName}>{name}</h2>
                    <img
                        src={iconUrl}
                        alt={description}
                        className={styles.simplifiedIcon}
                    />
                </div>

                <div className={styles.simplifiedTemp}>
                    {Math.round(main.temp)}<span>°C</span>
                </div>

                <div className={styles.simplifiedDescription}>
                    {description}
                </div>

                <div className={styles.simplifiedDetails}>
                    <div className={styles.simplifiedDetail}>
                        <span>💧</span>
                        <span>{main.humidity}%</span>
                    </div>
                    <div className={styles.simplifiedDetail}>
                        <span>🌬️</span>
                        <span>{Math.round(wind.speed)} м/с</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.cityName}>{name}</h2>

            <img
                src={iconUrl}
                alt={description}
                style={{ width: '80px', height: '80px', margin: '10px auto' }}
            />

            <div className={styles.temperature}>
                {Math.round(main.temp)}<span>°C</span>
            </div>

            <div className={styles.description}>{description}</div>

            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Влажность</span>
                    <span className={styles.detailValue}>{main.humidity}%</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Ветер</span>
                    <span className={styles.detailValue}>{wind.speed} м/с</span>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;