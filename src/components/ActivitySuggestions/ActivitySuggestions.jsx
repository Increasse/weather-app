import styles from './ActivitySuggestions.module.css';

function ActivitySuggestions({ weatherData }) {
    if (!weatherData) return null;

    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description.toLowerCase();
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;

    const getSuggestions = () => {
        const suggestions = [];

        if (temp < 0) {
            suggestions.push({
                emoji: '🏠',
                text: 'Остаться дома с горячим какао',
                condition: 'очень холодно'
            });
        } else if (temp >= 0 && temp < 10) {
            suggestions.push({
                emoji: '📚',
                text: 'Почитать книгу в уютном кафе',
                condition: 'прохладно'
            });
            suggestions.push({
                emoji: '🍲',
                text: 'Приготовить горячий суп',
                condition: 'прохладно'
            });
        } else if (temp >= 10 && temp < 20) {
            suggestions.push({
                emoji: '🚶',
                text: 'Пойти на прогулку в парк',
                condition: 'комфортно'
            });
            suggestions.push({
                emoji: '☕',
                text: 'Выпить кофе на веранде',
                condition: 'комфортно'
            });
        } else if (temp >= 20 && temp < 30) {
            suggestions.push({
                emoji: '🧺',
                text: 'Устроить пикник',
                condition: 'тепло'
            });
            suggestions.push({
                emoji: '🏊',
                text: 'Пойти купаться (есть водоем рядом)',
                condition: 'тепло'
            });
        } else if (temp >= 30) {
            suggestions.push({
                emoji: '🍦',
                text: 'Съесть мороженое',
                condition: 'жарко'
            });
            suggestions.push({
                emoji: '🏖️',
                text: 'Искать кондиционер или тень',
                condition: 'жарко'
            });
        }

        // Рекомендации на основе осадков
        if (description.includes('дождь') || description.includes('ливень')) {
            suggestions.push({
                emoji: '🎬',
                text: 'Посмотреть фильм дома',
                condition: 'идет дождь'
            });
            suggestions.push({
                emoji: '🌂',
                text: 'Не забыть зонт!',
                condition: 'идет дождь'
            });
        } else if (description.includes('снег')) {
            suggestions.push({
                emoji: '☃️',
                text: 'Слепить снеговика',
                condition: 'идет снег'
            });
            suggestions.push({
                emoji: '⛷️',
                text: 'Покататься на лыжах или санках',
                condition: 'идет снег'
            });
        } else if (description.includes('ясно') || description.includes('солнечно')) {
            suggestions.push({
                emoji: '📸',
                text: 'Сделать красивые фото',
                condition: 'солнечно'
            });
            suggestions.push({
                emoji: '🕶️',
                text: 'Надеть солнечные очки',
                condition: 'солнечно'
            });
        } else if (description.includes('облачно')) {
            suggestions.push({
                emoji: '🎨',
                text: 'Заняться творчеством',
                condition: 'облачно'
            });
        }

        // Рекомендации на основе ветра
        if (windSpeed > 10) {
            suggestions.push({
                emoji: '🪁',
                text: 'Запустить воздушного змея',
                condition: 'сильный ветер'
            });
            suggestions.push({
                emoji: '🧥',
                text: 'Одеться теплее, ветрено',
                condition: 'сильный ветер'
            });
        } else if (windSpeed < 3) {
            suggestions.push({
                emoji: '🦋',
                text: 'Отличная погода для наблюдения за природой',
                condition: 'штиль'
            });
        }

        // Рекомендации на основе влажности
        if (humidity > 80) {
            suggestions.push({
                emoji: '💆',
                text: 'Сделать увлажняющую маску для лица',
                condition: 'высокая влажность'
            });
        } else if (humidity < 30) {
            suggestions.push({
                emoji: '💧',
                text: 'Пить больше воды, воздух сухой',
                condition: 'низкая влажность'
            });
        }

        return suggestions.slice(0, 4);
    }

    const suggestions = getSuggestions();

    return (
        <div className={styles.suggestionsContainer}>
            <h3 className={styles.suggestionsTitle}>
                <span className={styles.titleEmoji}>💡</span>
                Чем заняться сегодня?
            </h3>

            {suggestions.length > 0 ? (
                <div className={styles.suggestionsList}>
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className={styles.suggestionItem}>
                            <span className={styles.suggestionEmoji}>{suggestion.emoji}</span>
                            <div className={styles.suggestionContent}>
                                <p className={styles.suggestionText}>{suggestion.text}</p>
                                <span className={styles.suggestionCondition}>
                  {suggestion.condition}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className={styles.noSuggestions}>
                    Нет специальных рекомендаций. Просто наслаждайтесь днем!
                </p>
            )}
        </div>
    );
}

export default ActivitySuggestions;