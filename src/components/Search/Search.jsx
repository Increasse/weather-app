import styles from './Search.module.css';
import { useState } from 'react';

function Search({ onSearch }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (city.trim()) {
            onSearch(city.trim());
            setCity('');
        }
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input className={styles.searchInput}
                   type="search"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   placeholder="Введите название города..." />
            <button type="submit" className={styles.searchButton}>
                Найти
            </button>
        </form>
    )
}

export default Search;